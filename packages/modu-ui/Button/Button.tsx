import React, { forwardRef, ReactNode, useMemo } from "react";
import { UiBaseProps } from "../_types/common";
import makeClassName from "../utils/makeClassNames";
import "./styles/index.scss";

type ButtonColorType = "ghost" | "primary" | "danger";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    UiBaseProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  round?: boolean;
  circle?: boolean;
  color?: ButtonColorType;
}

const BUTTON_CLS_PREFIX = "button";
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    leftIcon,
    children,
    rightIcon,
    round = false,
    circle = false,
    color = "",
    ...restProps
  } = props;

  const { componentCls, classNames } = makeClassName(BUTTON_CLS_PREFIX);

  const buttonCls = useMemo(
    () =>
      classNames(
        componentCls,
        {
          [`${componentCls}--round`]: round,
          [`${componentCls}--circle`]: circle,
          [`${componentCls}--${color}`]: color,
        },
        className
      ),
    [componentCls, round, circle, color, className]
  );

  const leftIconCls = useMemo(
    () => `${componentCls}__left-icon`,
    [componentCls]
  );

  const rightIconCls = useMemo(
    () => `${componentCls}__right-icon`,
    [componentCls]
  );

  const leftIconElem = useMemo(
    () => leftIcon && <span className={leftIconCls}>{leftIcon}</span>,
    [leftIcon]
  );
  const rightIconElem = useMemo(
    () => rightIcon && <span className={rightIconCls}>{rightIconElem}</span>,
    [rightIcon]
  );
  return (
    <button ref={ref} className={buttonCls} {...restProps}>
      {leftIconElem}
      {children}
      {rightIconElem}
    </button>
  );
});
export default Button;
