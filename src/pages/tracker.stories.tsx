import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tracker } from './tracker';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tracker',
  component: Tracker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      options: {
        terra: { name: 'terra', value: '#AC9682'}
      }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Tracker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    routes: [
        {
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
        {
            routeName: "Belmont",
            routeNumber: "77",
            direction: "West",
            times: [
                {
                    isGhost: true,
                    actualTime: "10:30AM",
                    scheduledTime: "10:20AM",
                    destination: "Cumberland"
                },
                {
                    isGhost: false,
                    actualTime: "10:30AM",
                    scheduledTime: "10:20AM",
                    destination: "Harlem"
                }
            ]
        },
        {
          routeName: "Kimball-Homan",
          routeNumber: "82",
          direction: "North",
          times: [
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Devon/Kedzie"
              },
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Lincolnwood Town Center"
              },
              {
                isGhost: false,
                actualTime: "10:30AM",
                scheduledTime: "10:20AM",
                destination: "Lincolnwood Town Center"
            },
            {
              isGhost: false,
              actualTime: "10:30AM",
              scheduledTime: "10:20AM",
              destination: "Lincolnwood Town Center"
          }
          ]
        },
        {
          routeName: "Kimball-Homan",
          routeNumber: "82",
          direction: "South",
          times: [
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Central Park/Cermak"
              },
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "31st/Central Park"
              }
          ]
        },
        {
          routeName: "Blue Line",
          direction: "Forest Park",
          times: [
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "UIC-Halsted"
              },
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Forest Park"
              }
          ]
        },
        {
          routeName: "Blue Line",
          direction: "O'Hare",
          times: [
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Rosemont"
              },
              {
                  isGhost: true,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "Rosemont"
              },
              {
                  isGhost: false,
                  actualTime: "10:30AM",
                  scheduledTime: "10:20AM",
                  destination: "O'Hare"
              }
          ]
        }, 
    ]
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
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
