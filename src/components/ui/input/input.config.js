import PropTypes from 'prop-types';

import { iconNames } from '../icon/icon.config';

export const InputDisplayName = 'LucideIcon';

export const InputPropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  withIcon: iconNames,
  size: PropTypes.oneOf(['large', 'medium']),
};

export const InputDefaultProps = {
  type: 'text',
};
