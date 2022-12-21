import React, { forwardRef, ReactNode, useMemo } from "react";
import { UiBaseProps } from "../_types/common";
import makeClassName from "../utils/makeClassNames";
import "./styles/index.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    UiBaseProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  round?: boolean;
  circle?: boolean;
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
  } = props;

  const { componentCls, classNames } = makeClassName(BUTTON_CLS_PREFIX);

  const buttonCls = classNames(
    componentCls,
    {
      [`${componentCls}--round`]: round,
      [`${componentCls}--circle`]: circle,
    },
    className
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
    <button className={buttonCls} ref={ref}>
      {leftIconElem}
      {children}
      {rightIconElem}
    </button>
  );
});
export default Button;
