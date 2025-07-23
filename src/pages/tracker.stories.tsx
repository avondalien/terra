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
            id: "77Eastbound",
            routeName: "Belmont",
            routeNumber: "77",
            direction: "East",
            arrivals: [
                {
                    id: '888',
                    expectedTime: "10:30AM",
                    destination: "Diversey/Lakeshore"
                },
                {
                    id: '999',
                    expectedTime: "10:30AM",
                    destination: "Diversey/Lakeshore"
                }
            ]
        },
        {
            id: "77Westbound",
            routeName: "Belmont",
            routeNumber: "77",
            direction: "West",
            arrivals: [
                {
                    id: "111",
                    expectedTime: "10:30AM",
                    destination: "Cumberland"
                },
                {
                    id: "222",
                    expectedTime: "10:30AM",
                    destination: "Harlem"
                }
            ]
        },
        {
          id: "82Northbound",
          routeName: "Kimball-Homan",
          routeNumber: "82",
          direction: "North",
          arrivals: [
              {
                  id: 'asdf',
                  expectedTime: "10:30AM",
                  destination: "Devon/Kedzie"
              },
              {
                  id: 'dsf',
                  expectedTime: "10:30AM",
                  destination: "Lincolnwood Town Center"
              },
              {
                id: 'hgfd',
                expectedTime: "10:30AM",
                destination: "Lincolnwood Town Center"
            },
            {
              id: 'vsdgf',
              expectedTime: "10:30AM",
              destination: "Lincolnwood Town Center"
            }
          ]
        },
        {
          id: '82Southbound',
          routeName: "Kimball-Homan",
          routeNumber: "82",
          direction: "South",
          arrivals: [
              {
                  id: 'bx',
                  expectedTime: "10:30AM",
                  destination: "Central Park/Cermak"
              },
              {
                  id: 'thyaef',
                  expectedTime: "10:30AM",
                  destination: "31st/Central Park"
              }
          ]
        },
        {
          id: "Blue5",
          routeName: "Blue Line",
          direction: "Forest Park",
          arrivals: [
              {
                  id: '768543',
                  expectedTime: "10:30AM",
                  destination: "UIC-Halsted"
              },
              {
                  id: '9876',
                  expectedTime: "10:30AM",
                  destination: "Forest Park"
              }
          ]
        },
        {
          id: "Blue1",
          routeName: "Blue Line",
          direction: "O'Hare",
          arrivals: [
              {
                  id: '1234',
                  expectedTime: "10:30AM",
                  destination: "Rosemont"
              },
              {
                  id: 'vfrerev',
                  expectedTime: "10:30AM",
                  destination: "Rosemont"
              },
              {
                  id: '54gs',
                  expectedTime: "10:30AM",
                  destination: "O'Hare"
              }
          ]
        }, 
    ]
  },
};

