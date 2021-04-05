import React from 'react';
import { Story, Meta } from '@storybook/react';

import { input, InputProps } from './input';

export default {
  title: 'Example/Input',
  component: input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Input',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Input',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Input',
};
