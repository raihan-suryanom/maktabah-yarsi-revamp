import PropTypes from "prop-types";

export const buttonDisplayName = "Button";

export const buttonPropTypes = {
  className: PropTypes.string,
  /**
   * Button contents
  */
 variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost", "link"]),
 asChild: PropTypes.bool,
 /**
  * How large should the button be?
  */
 size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

export const buttonDefaultProps = {
  asChild: false
};
