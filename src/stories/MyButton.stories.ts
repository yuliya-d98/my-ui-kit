import type { Meta, StoryObj } from '@storybook/react';

import MyButton from '../MyButton/MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/MyButton',
    component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedBtn: Story = {
    args: {
        color: 'red',
        children: 'i am button'
    },
};
export const OrangeBtn: Story = {
    args: {
        color: 'orange',
        children: 'i am button'
    },
};
export const BigBtn: Story = {
    args: {
        big: true,
        children: 'i am button'
    },
};