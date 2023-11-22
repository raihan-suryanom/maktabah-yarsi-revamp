import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Accordion, Button } from '~/components/atoms';
import { accordionTriggerVariants } from '~/components/atoms/accordion/accordion.style';
import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';

import type { VariantProps } from 'class-variance-authority';

export type CategoryProps = {
  _id?: string;
  name: string;
  path: string;
  subcategories?: ReadonlyArray<CategoryProps> & { category?: string };
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
  name,
  path,
  subcategories,
  variant,
  Icon,
  controlled,
  isRootCategory,
}: CollapsibleMenuProps) => {
  const hasSubCategory = Array.isArray(subcategories);

  return (
    <Accordion.Root
      type="multiple"
      itemID={name}
      className={className}
      controlled={controlled}
    >
      <Accordion.Item value={name}>
        <Accordion.Trigger variant={variant} asChild>
          <Link href={path} scroll={false} passHref>
            {(hasSubCategory || variant === 'categories') && Icon}
            {reverseSlugCaseToOriginal(name)}
            {hasSubCategory && variant === 'categories' && (
              <ChevronDown
                className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
                size={24}
                strokeWidth={3}
              />
            )}
          </Link>
        </Accordion.Trigger>
        <Accordion.Content asChild>
          {hasSubCategory
            ? subcategories.map((sub) => {
                if (Array.isArray(sub.subcategories)) {
                  return (
                    <CollapsibleMenu
                      controlled={controlled}
                      key={sub._id}
                      className="border-l border-[#e5e5e5] pl-2 dark:border-dark-300"
                      variant={variant}
                      Icon={Icon}
                      {...sub}
                    />
                  );
                }

                return (
                  <Button
                    key={sub._id}
                    className="block w-full cursor-pointer rounded-l-none border-l border-[#e5e5e5] px-[19px] py-1.5 text-lg font-normal hover:text-primary-light dark:border-dark-300 dark:hover:text-primary-dark"
                    asChild
                  >
                    <Link href={sub.path} scroll={false}>
                      {reverseSlugCaseToOriginal(sub.name)}
                    </Link>
                  </Button>
                );
              })
            : !isRootCategory && (
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-[#e5e5e5] px-[19px] py-1.5 text-lg font-normal hover:text-primary-light dark:border-dark-300 dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href={path} scroll={false}>
                    {reverseSlugCaseToOriginal(name)}
                  </Link>
                </Button>
              )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CollapsibleMenu;
