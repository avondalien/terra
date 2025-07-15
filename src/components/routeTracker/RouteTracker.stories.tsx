import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { RouteTracker } from './RouteTracker';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/RouteTracker',
  component: RouteTracker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof RouteTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OnTime: Story = {
  args: {
    routeName: "Belmont",
    routeNumber: "77",
    direction: "East",
    times: [
        {
            isGhost: false,
            actualTime: "10:30AM",
            scheduledTime: "10:20AM",
            destination: "Diversey/Lakeshore"
        },
        {
            isGhost: false,
            actualTime: "10:30AM",
            scheduledTime: "10:20AM",
            destination: "Diversey/Lakeshore"
        }
    ]
  },
};

export const Ghost: Story = {  
    args: {
        routeName: "Belmont",
        routeNumber: "77",
        direction: "West"
    },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
