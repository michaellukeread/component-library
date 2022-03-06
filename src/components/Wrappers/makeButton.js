const makeButton =
  Component =>
  ({ onClick, ...props }) =>
    (
      <button
        onClick={onClick}
        className="inline-block h-12 w-12 bg-slate-400 rounded-full ring-2 ring-white">
        <Component {...props} />
      </button>
    )

export default makeButton
