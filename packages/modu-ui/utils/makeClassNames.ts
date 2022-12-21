const ROOT_CLS_PREFIX = "modu";
import classNames, { Argument } from "classnames";
interface MakeClassNameType {
  componentCls: string;
  classNames: (...args: Argument[]) => string;
}

const makeClassName = (cls?: string): MakeClassNameType => {
  const componentCls = `${ROOT_CLS_PREFIX}-${cls}`;
  return {
    componentCls,
    classNames,
  };
};

export default makeClassName;
