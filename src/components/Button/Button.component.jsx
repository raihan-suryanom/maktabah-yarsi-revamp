import React from "react";

import { ButtonDefaultProps, ButtonPropTypes } from "./Button.config";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, size, label, ...props }) => {
  return (
    <button
      type="button"
      className="bg-red-500 px-2 py-2 text-white hover:text-black"
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = ButtonPropTypes;
Button.defaultProps = ButtonDefaultProps;
