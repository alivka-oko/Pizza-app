import type { FC } from "react";
import "./Button.module.css";
import type { ButtonProps } from "./Button.props";
import cn from "classnames";

export const ButtonAlt: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className='button accent' {...props}>
      {children}
    </button>
  );
};

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("button accent", className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
