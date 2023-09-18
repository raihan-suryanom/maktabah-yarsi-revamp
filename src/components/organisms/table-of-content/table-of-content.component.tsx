import Link from 'next/link';

import { Accordion, Badge, Button, Icon } from '~/components/atoms';

type TableOfContentProps = {
  category: string;
  path: string;
  sub:
    | {
        category: string;
        path: string;
        sub?: undefined;
      }
    | {
        category: string;
        path: string;
        sub: {
          category: string;
          path: string;
        }[];
      }[];
};

const TableOfContent = ({ category, path, sub, kntl }: any) => {
  console.log(category, kntl);
  return (
    <Accordion.Root type="multiple" itemID={category}>
      <Accordion.Item value={category}>
        <Accordion.Trigger
          variant="categories"
          className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
          asChild
        >
          <Link href={path} passHref>
            <Icon
              id="book-marked"
              name="book-marked"
              size={24}
              strokeWidth={3}
            />
            <span className="text-lg capitalize">{category}</span>
            <Badge className="font-bold">34</Badge>
            {Array.isArray(sub) && (
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
          {Array.isArray(sub)
            ? sub?.map((x) => {
                if (Array.isArray(x.sub)) {
                  return <TableOfContent key={x.category} {...x} />;
                }

                return (
                  <Button
                    className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                    asChild
                  >
                    <Link href={x.path}>{x.category}</Link>
                  </Button>
                );
              })
            : !kntl && (
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href={path}>{category}</Link>
                </Button>
              )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default TableOfContent;
