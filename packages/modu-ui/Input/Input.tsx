import React, { forwardRef } from "react";
import { UiBaseProps } from "../_types/common";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    UiBaseProps {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} />;
});

export default Input;
