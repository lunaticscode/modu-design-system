import React from "react";

interface ButtonProps {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button ref={ref}>button</button>;
  }
);
export default Button;
