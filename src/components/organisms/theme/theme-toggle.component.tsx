'use client';

import { useEffect, useState } from 'react';
import { Monitor, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '~/lib/utils/cn';
import Button from '~/components/atoms/button';
import { DropdownMenu } from '~/components/atoms/dropdown-menu';
import Skeleton from '~/components/atoms/skeleton';

const themes: {
  light: JSX.Element;
  dark: JSX.Element;
  system: JSX.Element;
} = {
  light: <Sun />,
  dark: <MoonStar />,
  system: <Monitor />,
};

const ThemeIcons = ({ icon }: { icon: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="inline-block h-6 w-6 rounded-full" />;
  }

  return themes[icon as keyof typeof themes];
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <ThemeIcons icon={theme as string} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="lg:w-40 [&_svg]:rounded-sm">
        <DropdownMenu.Label>Warna Tema</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          className="cursor-pointer gap-3"
          role="button"
          onClick={() => setTheme('light')}
        >
          <Button
            role="button"
            className={cn(
              theme === 'light'
                ? 'text-primary-light dark:text-primary-dark'
                : 'opacity-70'
            )}
            asChild
          >
            <Sun />
          </Button>
          <span>Terang</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="cursor-pointer gap-3"
          role="button"
          onClick={() => setTheme('dark')}
        >
          <Button
            role="button"
            className={cn(
              theme === 'dark'
                ? 'text-primary-light dark:text-primary-dark'
                : 'opacity-70'
            )}
            asChild
          >
            <MoonStar />
          </Button>
          <span>Gelap</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="cursor-pointer gap-3"
          role="button"
          onClick={() => setTheme('system')}
        >
          <Button
            role="button"
            className={cn(
              theme === 'system'
                ? 'text-primary-light dark:text-primary-dark'
                : 'opacity-70'
            )}
            asChild
          >
            <Monitor />
          </Button>
          <span>Sistem</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default ThemeToggle;
