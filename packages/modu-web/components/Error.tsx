import { FC } from "react";
import { FallbackProps } from "react-error-boundary";
const IS_DEBUG = true;

interface ErrorProps extends FallbackProps {}

const Error: FC<ErrorProps> = ({ error }) => {
  IS_DEBUG && console.log(error);
  return <>{`(!) Error occured.`}</>;
};
export default Error;
