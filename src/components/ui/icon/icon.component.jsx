import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

/**
 * @typedef {import('lucide-react').LucideProps} LucideProps
 * @typedef {object} IconPropTypes
 * @property {keyof typeof dynamicIconImports} name
 * @typedef {IconPropTypes & LucideProps} IconProps
 * @type React.FC<IconProps>
 * @property
 */
const Icon = ({ name, ...props }) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

Icon.displayName = 'LucideIcon';

export { Icon };
