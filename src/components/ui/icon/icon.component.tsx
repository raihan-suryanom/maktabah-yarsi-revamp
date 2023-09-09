import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import type { LucideProps } from 'lucide-react';

type Iconprops = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

const Icon = ({ name, ...props }: Iconprops) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

Icon.displayName = 'LucideIcon';

export { Icon };
