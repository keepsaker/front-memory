import type { Meta, StoryObj } from '@storybook/react';
import StarRating from '.';
import { useState } from 'react';

const meta: Meta<typeof StarRating> = {
  component: StarRating,
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  argTypes: {
    rating: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
  },
};

const Wrapper = () => {
  const [rating, setRating] = useState(0);
  return <StarRating rating={rating} setRating={setRating} />;
};

export const Interactive: Story = {
  render: () => <Wrapper />,
};
