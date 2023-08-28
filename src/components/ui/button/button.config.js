import PropTypes from 'prop-types';

export const ButtonDisplayName = 'Button';

export const ButtonPropTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'link']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  asChild: PropTypes.bool,
};

export const ButtonDefaultProps = {
  asChild: false,
};
