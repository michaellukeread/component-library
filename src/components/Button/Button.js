const Button = ({ className, children, disabled }) => (
  <button
    type="button"
    disabled={disabled}
    className={
      className
        ? className
        : 'px-5 py-2.5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded'
    }>
    {children}
  </button>
)

export default Button
