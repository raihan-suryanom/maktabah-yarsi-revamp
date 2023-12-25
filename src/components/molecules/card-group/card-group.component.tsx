import { BookOpen } from 'lucide-react';

import { Card } from '~/components/atoms/card';

type CardGroupProps = {
  data: ReadonlyArray<string>;
};

const CardGroup = ({ data }: CardGroupProps) => (
  <>
    {data.map((category) => (
      <Card.Root key={category} className="rounded-[20px] p-7 lg:min-w-[150px]">
        <Card.Header className="mb-2.5 items-center p-0">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-white">
            <BookOpen size={28} strokeWidth={3} />
          </span>
        </Card.Header>
        <Card.Content className="p-0">
          <Card.Title className="text-center font-normal capitalize">
            {category}
          </Card.Title>
        </Card.Content>
      </Card.Root>
    ))}
  </>
);

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
