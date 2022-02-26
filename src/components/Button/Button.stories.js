import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    componentSubtitle: "Alerts draw the user's attention to something",
    layout: 'centered', // or 'fullscreen' or 'padded'
    controls: { exclude: ['children'] }
  },
  argTypes: {}
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
