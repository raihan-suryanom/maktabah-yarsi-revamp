import PropTypes from 'prop-types';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export const IconDisplayName = 'LucideIcon';

export const IconPropTypes = {
  name: PropTypes.oneOf(Object.keys(dynamicIconImports)).isRequired,
  size: PropTypes.number,
};

export const IconDefaultProps = {
  size: 24,
};
