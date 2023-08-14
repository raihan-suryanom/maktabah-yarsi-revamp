import PropTypes from "prop-types";

export const buttonDisplayName = "Button";

export const buttonPropTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

export const buttonDefaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};
