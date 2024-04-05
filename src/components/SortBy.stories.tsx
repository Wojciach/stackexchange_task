import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SortBy } from './SortBy';

export default {
  title: 'Example/SortBy',
  component: SortBy,
} as Meta;

const Template: StoryFn = (args) => <SortBy {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // define your args here
};
