import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import type { LucideProps } from 'lucide-react';

export type Iconprops = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

const Icon = ({ name, ...props }: Iconprops) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

Icon.displayName = 'LucideIcon';

export default Icon;
