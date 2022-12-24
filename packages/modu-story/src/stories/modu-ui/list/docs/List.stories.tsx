// import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import ListBasicExample from "./ListBasicExample";
import List, { ListProps } from "modu-ui/List";

export default {
  title: "modu-ui/Components/List",
  component: List,
} as Meta;

const ListBasicExamTemplate: Story<ListProps> = (args) => (
  <ListBasicExample {...args} />
);

export const Basic = ListBasicExamTemplate.bind({});
