import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { Accordion, Button } from '~/components/atoms';
import { accordionTriggerVariants } from '~/components/atoms/accordion/accordion.style';
import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';

import type { VariantProps } from 'class-variance-authority';

export type CategoryProps = {
  _id?: string;
  title: string;
  path: string;
  children?: ReadonlyArray<CategoryProps>;
};

export type CollapsibleMenuProps = VariantProps<
  typeof accordionTriggerVariants
> &
  CategoryProps & {
    className?: string;
    Icon: JSX.Element;
    isRootCategory?: boolean;
    controlled?: boolean;
  };

const CollapsibleMenu = async ({
  className,
  title,
  path,
  children,
  variant,
  Icon,
  controlled,
  isRootCategory,
}: CollapsibleMenuProps) => {
  const hasSubCategory = Array.isArray(children);

  return (
    <Accordion.Root
      type="multiple"
      itemID={title}
      className={className}
      controlled={controlled}
    >
      <Accordion.Item value={title}>
        <Accordion.Trigger variant={variant} asChild>
          <Link href={path} scroll={false} passHref>
            {!hasSubCategory && variant === 'categories' && Icon}
            {reverseSlugCaseToOriginal(title)}
            {hasSubCategory && (
              <ChevronRight
                className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
                size={20}
                strokeWidth={2}
              />
            )}
          </Link>
        </Accordion.Trigger>
        <Accordion.Content asChild>
          {hasSubCategory
            ? children.map((sub: CollapsibleMenuProps) => {
                if (Array.isArray(sub.children)) {
                  return (
                    <CollapsibleMenu
                      key={sub._id}
                      className="border-l border-[#e5e5e5] pl-4 dark:border-dark-300"
                      {...sub}
                      variant={variant}
                      Icon={Icon}
                    />
                  );
                }

                return (
                  <Button
                    key={sub._id}
                    className="inline-flex w-full cursor-pointer items-center justify-start rounded-l-none border-l border-[#e5e5e5] py-1 font-normal hover:text-primary-light dark:border-dark-300 dark:hover:text-primary-dark"
                    variant={variant}
                    asChild
                  >
                    <Link href={sub.path} scroll={false}>
                      {variant === 'categories' && Icon}
                      {reverseSlugCaseToOriginal(sub.title)}
                    </Link>
                  </Button>
                );
              })
            : !isRootCategory && (
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-[#e5e5e5] py-1 font-normal hover:text-primary-light dark:border-dark-300 dark:hover:text-primary-dark"
                  variant={variant}
                  asChild
                >
                  <Link href={path} scroll={false}>
                    {reverseSlugCaseToOriginal(title)}
                  </Link>
                </Button>
              )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CollapsibleMenu;
