import PropTypes from 'prop-types';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export const IconDisplayName = 'LucideIcon';

export const ICON_SIZES = [16, 20, 24, 28, 32, 36, 40, 44, 48];

export const iconNames = PropTypes.oneOf(Object.keys(dynamicIconImports));

export const IconPropTypes = {
  name: iconNames.isRequired,
  size: PropTypes.oneOf(ICON_SIZES),
};

export const IconDefaultProps = {
  size: 24,
};
