import React, {
  forwardRef,
  HTMLAttributes,
  createContext,
  useMemo,
} from "react";
import { UiBaseProps } from "../_types/common";
import makeClassName from "../utils/makeClassNames";

const LIST_CLS_PREFIX = "list";

interface ListContextProps {
  onClickItem: (id: string) => void;
}
interface ListProps extends UiBaseProps, HTMLAttributes<HTMLUListElement> {
  borderLine?: boolean;
}

const ListContext = createContext<ListContextProps>({
  onClickItem: () => {},
});
const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { className, borderLine = false, ...restProps } = props;

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

  const contextValue = { onClickItem };
  return (
    <ListContext.Provider value={contextValue}>
      <ul ref={ref} className={listCls} {...restProps}></ul>
    </ListContext.Provider>
  );
});

export default List;
