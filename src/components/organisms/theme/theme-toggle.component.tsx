'use client';

import { Monitor, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button, DropdownMenu, Icon } from '~/components/atoms';
import { cn } from '~/lib/utils';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes: {
    light: 'sun';
    dark: 'moon-star';
    system: 'monitor';
  } = {
    light: 'sun',
    dark: 'moon-star',
    system: 'monitor',
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Icon name={themes[theme as keyof typeof themes]} />
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
