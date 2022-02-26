import Alert from '.'

export default {
  title: 'components/Alert',
  component: Alert,
  parameters: {
    componentSubtitle: "Alerts draw the user's attention to something",
    layout: 'centered', // or 'fullscreen' or 'padded'
    controls: { exclude: ['children'] }
  },
  argTypes: {}
}

const Template = () => <Alert>123</Alert>

export const Primary = Template.bind({})
