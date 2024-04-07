import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SwitchOrder } from './SwitchOrder';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SwitchOrder',
  component: SwitchOrder,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    order: {
      control: 'radio',
      options: ['asc', 'desc']
    },
  },
  //args: { sort: "popular" }

} satisfies Meta<typeof SwitchOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: "asc",
  },
};