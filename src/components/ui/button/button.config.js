import PropTypes from "prop-types";

export const buttonDisplayName = "Button";

export const buttonPropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "outline"]),
};

export const buttonDefaultProps = {
  className: "",
  asChild: false,
};
