import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MainAlert } from './MainAlert';

const meta = {
    title: 'Example/MainAlert',
    component: MainAlert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        appErrorId: { control: 'radio', options: [1, 2, 3, null] },
        loading: { control: 'boolean'}
    },
    } satisfies Meta<typeof MainAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      appErrorId: 3,
      appErrorMessage: 'message example',
    },
  };