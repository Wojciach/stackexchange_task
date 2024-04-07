import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Search } from './Search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Search',
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    search: {
      control: 'text',
    },
  },
  args: { loading: false }

} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    search: "asc",
  },
};