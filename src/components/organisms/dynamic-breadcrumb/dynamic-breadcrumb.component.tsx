'use client';

import { usePathname } from 'next/navigation';

import { Breadcrumb } from '~/components/molecules';

import type { BreadcrumbProps } from '~/components/molecules/breadcrumb';

const DynamicBreadcrumb = (props: Partial<BreadcrumbProps>) => {
  const pathname = usePathname();
  const categories = pathname
    .split('/')
    .slice(2)
    .map((category) => ({ title: category, link: category }));

  return <Breadcrumb {...props} paths={categories} />;
};

export default DynamicBreadcrumb;
