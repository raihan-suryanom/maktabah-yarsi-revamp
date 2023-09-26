import Link from 'next/link';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Accordion, Badge, Button, Icon } from '~/components/atoms';
import { accordionTriggerVariants } from '~/components/atoms/accordion/accordion.style';
import { wait } from '~/lib/utils';

import type { VariantProps } from 'class-variance-authority';

type Category = {
  category: string;
  path: string;
  sub?: ReadonlyArray<Category>;
};

type CollapsibleMenuProps = VariantProps<typeof accordionTriggerVariants> &
  Category & {
    className?: string;
    iconName: keyof typeof dynamicIconImports;
    isRootCategory?: boolean;
    controlled?: boolean;
    category: string;
    path: string;
  };

const CollapsibleMenu = async ({
  className,
  category,
  path,
  sub,
  variant,
  iconName,
  controlled,
  isRootCategory,
}: CollapsibleMenuProps) => {
  await wait(2000);
  const hasSubCategory = Array.isArray(sub);

  return (
    <Accordion.Root
      type="multiple"
      itemID={category}
      className={className}
      controlled={controlled}
    >
      <Accordion.Item value={category}>
        <Accordion.Trigger variant={variant} asChild>
          <Link href={path} scroll={false} passHref>
            {(hasSubCategory || variant === 'categories') && (
              <Icon
                id="book-marked"
                name={iconName}
                size={24}
                strokeWidth={3}
              />
            )}
            {category}
            {variant === 'categories' && (
              <Badge className="font-bold">34</Badge>
            )}
            {hasSubCategory && variant === 'categories' && (
              <Icon
                name="chevron-down"
                className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
                size={24}
                strokeWidth={3}
              />
            )}
          </Link>
        </Accordion.Trigger>
        <Accordion.Content asChild>
          {hasSubCategory
            ? sub?.map((x) => {
                if (Array.isArray(x.sub)) {
                  return (
                    <CollapsibleMenu
                      controlled={controlled}
                      item
                      key={x.category}
                      className="border-l border-[#e5e5e5] pl-2"
                      variant={variant}
                      iconName={iconName}
                      {...x}
                    />
                  );
                }

                return (
                  <Button
                    key={x.category}
                    className="block w-full cursor-pointer rounded-l-none border-l border-[#e5e5e5] px-[19px] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
                    asChild
                  >
                    <Link href={x.path} scroll={false}>
                      {x.category}
                    </Link>
                  </Button>
                );
              })
            : !isRootCategory && (
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-[#e5e5e5] px-[19px] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href={path} scroll={false}>
                    {category}
                  </Link>
                </Button>
              )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CollapsibleMenu;
