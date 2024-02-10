'use client';

import { ChevronRight } from 'lucide-react';

import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';
import ButtonClient from '../button/button.client.component';
import { useRouter } from 'next/navigation';

import type { CategoryProps, TOCProps } from '~/lib/utils/index.type';

const SummaryComponent = ({
  variant,
  item,
}: {
  item: TOCProps | CategoryProps;
  variant: 'tableOfContents' | 'categories';
}) => {
  const router = useRouter();

  return (
    <summary className="flex justify-between py-1 font-semibold capitalize leading-snug text-dark-100 dark:text-light-400">
      {variant === 'tableOfContents' ? (
        <ButtonClient
          location={item.path}
          className="inline w-auto text-left leading-snug hover:text-dark-100 dark:hover:text-light-400"
          onClick={(event) => {
            const details = (event.target as HTMLElement).closest('details');
            if (details) {
              details.open = !details.open;
            }

            const { search } = new URL(window.location.href);
            router.push(`${item.path}${search}`);
          }}
        >
          {item.title}
        </ButtonClient>
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
