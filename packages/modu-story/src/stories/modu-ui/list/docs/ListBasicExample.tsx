import { FC } from "react";
import List, { ListItem } from "modu-ui/List";
const ListBasicExam: FC = () => {
  return (
    <>
      <List>
        <ListItem id={"1"}>ListItem - 1</ListItem>
        <ListItem id={"2"}>ListItem - 2</ListItem>
        <ListItem id={"3"}>ListItem - 3</ListItem>
      </List>
    </>
  );
};
export default ListBasicExam;
