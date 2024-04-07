import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MuiTable } from './MuiTable';
import  mockData from '../mockData/mockData.json';

const meta = {
    title: 'Example/MiuTable',
    component: MuiTable,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tableData: {
            control: 'radio',
            options: {
               "Empty Array": [],
                "Null": null,
                "Mock Data": mockData.items
            } 
    },
    },
    } satisfies Meta<typeof MuiTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      tableData: [],
    },
};