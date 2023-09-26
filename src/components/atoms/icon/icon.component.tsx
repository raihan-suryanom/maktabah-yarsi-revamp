import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Skeleton } from '~/components/atoms';

import type { LucideProps } from 'lucide-react';

export type Iconprops = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

const Icon = ({ name, size = 24, ...props }: Iconprops) => {
  const LucideIcon = dynamic(dynamicIconImports[name], {
    loading: () => (
      <Skeleton
        className="inline-block rounded-full"
        style={{ width: size, height: size }}
      />
    ),
  });

  return <LucideIcon size={size} {...props} />;
};

Icon.displayName = 'LucideIcon';

export default Icon;
