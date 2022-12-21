import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "modu-ui/Button";
import ButtonBasicExam from "./ButtonBasicExample";

export default {
  title: "modu-ui/Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const ButtonBasicExamTemplate: Story<ButtonProps> = (args) => (
  <ButtonBasicExam {...args} />
);
export const API = Template.bind({});
export const Basic = ButtonBasicExamTemplate.bind({});
