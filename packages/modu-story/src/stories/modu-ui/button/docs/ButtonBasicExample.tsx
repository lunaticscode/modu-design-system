import React, { FC } from "react";
import Button from "modu-ui/Button";
const ButtonBasicExam: FC = () => {
  return (
    <>
      <Button>basic</Button>
      <Button color="ghost">ghost</Button>
      <Button color="primary">primary</Button>
      <Button color="danger">danger</Button>
    </>
  );
};
export default ButtonBasicExam;
