import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    componentSubtitle:
      'Buttons have a variety of functions, they are typically used to fire actions when clicked.',
    layout: 'centered', // or 'fullscreen' or 'padded'
    controls: { exclude: ['children'] }
  },
  argTypes: {
    content: { control: { type: 'text' } },
    className: { control: { type: 'text' } }
  }
}

const Template = args => <Button {...args}>{args.content}</Button>

export const Default = Template.bind({})
Default.args = {
  content: 'Test 1234'
}

export const Custom_Style = Template.bind({})
Custom_Style.args = {
  content: 'I am custom',
  className: 'bg-blue-200 p-4 rounded'
}
