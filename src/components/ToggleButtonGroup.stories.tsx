import React, { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';
// import ToggleButton from '@mui/lab/ToggleButton';
// import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default {
  title: 'Example/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    // Add your controls here. For example:
    exclusive: { control: 'boolean' },
    value: { control: 'text' },
    // Add more controls as needed
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof ToggleButtonGroup>> = (args: ComponentProps<typeof ToggleButtonGroup>) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="popular" aria-label="popular">
      Popular
    </ToggleButton>
    <ToggleButton value="activity" aria-label="activity">
      Activity
    </ToggleButton>
    <ToggleButton value="name" aria-label="name">
      Name
    </ToggleButton>
  </ToggleButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {
  // define your args here
};