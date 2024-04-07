import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PageNumber } from './PageNumber';

const meta = {
    title: 'Example/PageNumber',
    component: PageNumber,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        page: {
            control: {
                type: 'range',
                min: 1,
                max: 5,
                step: 1,
            }
        },
    },
    args: {
        page: 1,
        has_more: true,
    }
    
    } satisfies Meta<typeof PageNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      page: 1,
      has_more: true,
    },
  };