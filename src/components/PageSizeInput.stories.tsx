import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PageSizeInput } from './PageSizeInput';

const meta = {
    title: 'Example/PageSizeInput',
    component: PageSizeInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        pageSize: {
            control: 'select',
            options: [10, 20, 30, 50, 100]
        }
    },
    args: {
        pageSize: 10,
    }
    
    } satisfies Meta<typeof PageSizeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      pageSize: 10,
    },
  };