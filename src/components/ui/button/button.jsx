"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";
import {
  buttonDefaultProps,
  buttonDisplayName,
  buttonPropTypes,
} from "./button.config";
import { buttonVariants } from "./button.styles";

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.propTypes = buttonPropTypes;
Button.defaultProps = buttonDefaultProps;
Button.displayName = buttonDisplayName;

export { Button };
