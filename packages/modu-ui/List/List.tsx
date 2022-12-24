import React, {
  forwardRef,
  HTMLAttributes,
  createContext,
  useMemo,
  ReactNode,
  ReactElement,
  cloneElement,
  Children,
} from "react";
import { UiBaseProps } from "../_types/common";
import makeClassName from "../utils/makeClassNames";
import ListItem from "./ListItem";

const LIST_CLS_PREFIX = "list";

interface ListContextProps {
  onClickItem: (id: string) => void;
}
export interface ListProps
  extends UiBaseProps,
    HTMLAttributes<HTMLUListElement> {
  headerElem?: ReactNode;
  borderLine?: boolean;
  children?: ReactNode;
  footerElem?: ReactNode;
}

export const ListContext = createContext<ListContextProps>({
  onClickItem: () => {},
});
const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const {
    className,
    borderLine = false,
    headerElem,
    footerElem,
    children,
    ...restProps
  } = props;

  const { componentCls, classNames } = makeClassName(LIST_CLS_PREFIX);

  const listCls = useMemo(
    () =>
      classNames(
        componentCls,
        {
          [`${componentCls}--border_line`]: borderLine,
        },
        className
      ),
    [componentCls, borderLine, className]
  );

  const onClickItem = (id: string) => {
    console.log(`Clicked Item-${id}`);
  };

  const childrenToElemArray = useMemo(
    () => Children.toArray(children) as Array<ReactElement>,
    [children]
  );

  const listItemElems = useMemo(
    () => childrenToElemArray.filter((elem) => elem.type === ListItem),
    [childrenToElemArray]
  );

  const contextValue = { onClickItem };
  return (
    <ListContext.Provider value={contextValue}>
      <ul ref={ref} className={listCls} {...restProps}>
        {/* header */}
        {headerElem && (
          <li className={`${componentCls}__header`}>{headerElem}</li>
        )}

        {/* list-items */}
        {listItemElems &&
          listItemElems.length &&
          listItemElems?.map?.((elem) => cloneElement(elem))}

        {/* footer */}
        {footerElem && (
          <li className={`${componentCls}__footer`}>{footerElem}</li>
        )}
      </ul>
    </ListContext.Provider>
  );
});

export default List;
