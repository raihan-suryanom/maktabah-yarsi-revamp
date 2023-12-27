'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';
import type { CategoryProps, TOCProps } from '~/lib/utils/index.type';
import { useSearchParams } from 'next/navigation';

const SummaryComponent = ({
  variant,
  item,
}: {
  item: TOCProps | CategoryProps;
  variant: 'tableOfContents' | 'categories';
}) => {
  return (
    <summary className="flex justify-between py-1 font-semibold capitalize leading-snug text-dark-100 dark:text-light-400">
      {variant === 'tableOfContents' ? (
        <Link
          href={item.path}
          className="inline w-auto leading-snug hover:text-dark-100 dark:hover:text-light-400"
          onClick={(e) => {
            const details = (e.target as HTMLElement).closest('details');
            if (details) {
              details.open = !details.open;
            }
          }}
        >
          {item.title}
        </Link>
      ) : (
        reverseSlugCaseToOriginal(item.title)
      )}

      <ChevronRight
        className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
        size={20}
        strokeWidth={2}
      />
    </summary>
  );
};

export default SummaryComponent;
