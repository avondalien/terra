import type { Meta, StoryObj } from '@storybook/react-vite';

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
  },
} satisfies Meta<typeof RouteTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OnTime: Story = {
  args: {
    id: "77Belmont",
    routeName: "Belmont",
    routeNumber: "77",
    direction: "East",
    arrivals: [
        {
            id: 'asdf',
            expectedTime: "10:30AM",
            destination: "Diversey/Lakeshore"
        },
        {
            id: 'lkj',
            expectedTime: "10:20AM",
            destination: "Diversey/Lakeshore"
        }
    ]
  },
};

export const Ghost: Story = {  
    args: {
        id: "77Belmont",
        routeName: "Belmont",
        routeNumber: "77",
        direction: "Westbound",
        arrivals: []
    },
};
