import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { Card } from '~/components/atoms/card';

import type { CategoryProps } from '~/lib/utils/index.type';

type CardGroupProps = {
  data: ReadonlyArray<CategoryProps>;
};

const CardGroup = ({ data }: CardGroupProps) => {
  const formattedData = data.slice(0, 5);

  formattedData.push({
    _id: '',
    title: 'Lainnya',
    path: '',
    children: [],
  });

  return (
    <>
      {formattedData.map((category) => (
        <Link
          key={category._id}
          className="peer"
          href={`/categories/${category._id}`}
          passHref
        >
          <Card.Root className="h-full rounded-[20px] p-3">
            <Card.Header className="mb-2.5 items-center p-0">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-white">
                <BookOpen size={28} strokeWidth={3} />
              </span>
            </Card.Header>
            <Card.Content className="p-0">
              <Card.Title className="text-center font-normal capitalize sm:text-sm md:text-base lg:text-lg">
                {category.title}
              </Card.Title>
            </Card.Content>
          </Card.Root>
        </Link>
      ))}
    </>
  );
};

export const CardGroupSkeleton = () => (
  <>
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="h-[154px] rounded-[20px] bg-light-300 p-7 text-slate-950 dark:bg-dark-200 dark:text-slate-50 lg:min-w-[150px]"
      />
    ))}
  </>
);

export default CardGroup;
