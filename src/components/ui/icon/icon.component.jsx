import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import {
  IconDefaultProps,
  IconDisplayName,
  IconPropTypes,
} from './icon.config';

const Icon = ({ name, size, ...props }) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon size={size} {...props} />;
};

Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;
Icon.displayName = IconDisplayName;

export { Icon };
