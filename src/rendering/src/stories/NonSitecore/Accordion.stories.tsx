import { Meta } from '@storybook/react';
import Accordion from '../../components/NonSitecore/Accordion';

export default {
  title: 'Components/NonSitecore/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

const mockDescription =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ducimus ipsam molestiae laudantium ut iure autem asperiores cumque ad voluptatum! Perferendis, laudantium sequi? Fugiat similique laborum a at sint nostrum, explicabo totam quidem sequi delectus voluptas molestiae dolor. Rerum mollitia quisquam omnis nobis suscipit non nihil. Odio tempore ut nemo.';

const baseArgs = {
  heading: 'Sample Accordion Heading',
  items: [
    {
      heading: 'First Accordion Item',
      description: mockDescription,
    },
    {
      heading: 'Second Accordion Item',
      description: mockDescription,
    },
    {
      heading: 'Third Accordion Item',
      description: mockDescription,
    },
    {
      heading: 'Disabled Accordion Item',
      description: mockDescription,
      disabled: true,
    },
  ],
};

export const Default = {
  args: {
    ...baseArgs,
  },
};

export const Loading = {
  args: {
    ...baseArgs,
    loading: true,
  },
};
