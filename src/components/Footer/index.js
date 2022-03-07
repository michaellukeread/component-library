import Generic from './Generic'
import Simple from './Simple'

const variants = {
  generic: Generic,
  simple: Simple
}

const Footer = ({ variant, ...props }) => {
  const Component = variants[variant] || variants['generic']

  return <Component {...props} />
}

export default Footer
