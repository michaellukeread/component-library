import Typescale from '.'

export default {
  title: 'UI/Typescale',
  component: Typescale,
  parameters: {
    componentSubtitle: '',
    layout: 'fullscreen', // or 'fullscreen' or 'padded'
    controls: { exclude: ['children'] }
  },
  argTypes: {}
}

const Template = args => <Typescale {...args} />

export const Default = Template.bind({})
