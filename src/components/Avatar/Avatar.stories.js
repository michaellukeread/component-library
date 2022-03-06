import Avatar from '.'

export default {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: '',
    layout: 'centered', // or 'fullscreen' or 'padded'
    controls: { exclude: ['children'] }
  },
  argTypes: {}
}

const Template = args => <Avatar {...args} />

export const Simple_Name = Template.bind({})
Simple_Name.args = {
  name: 'Neville Longbottom'
}

export const Image = Template.bind({})
Image.args = {
  image: 'https://thumb.fakeface.rest/thumb_female_20_c440fbb92af56f55169761ad9b5060a223bd71db.jpg',
  name: 'Neville Longbottom'
}
