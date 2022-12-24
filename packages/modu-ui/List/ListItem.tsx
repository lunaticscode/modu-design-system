import React, { ReactNode, useCallback, useContext, useMemo } from "react";
import makeClassName from "../utils/makeClassNames";
import { UiBaseProps } from "../_types/common";
import { ListContext } from "./List";

const LIST_ITEM_CLS_PREFIX = "list-item";

interface ListItemProps extends UiBaseProps {
  id: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}
const ListItem: React.FC<ListItemProps> = (props) => {
  const { id, children, leftIcon, rightIcon, disabled, className } = props;
  const { onClickItem } = useContext(ListContext);

  const { componentCls, classNames } = makeClassName(LIST_ITEM_CLS_PREFIX);
  const listItemCls = useMemo(
    () =>
      classNames(
        componentCls,
        {
          [`${componentCls}--disabled`]: disabled,
        },
        className
      ),
    [className, disabled]
  );

  const handleClickListItem = useCallback(() => {
    if (disabled) return;
    onClickItem(id);
  }, [disabled, onClickItem]);
  return (
    <li className={listItemCls} onClick={handleClickListItem}>
      {leftIcon && (
        <span className={`${listItemCls}__left-icon`}>{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className={`${listItemCls}__right-icon`}>{rightIcon}</span>
      )}
    </li>
  );
};
export default ListItem;
