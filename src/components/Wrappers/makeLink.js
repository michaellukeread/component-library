const makeLink =
  Component =>
  ({ link, ...props }) =>
    (
      <a href={link} className="inline-block h-12 w-12 bg-slate-400 rounded-full ring-2 ring-white">
        <Component {...props} />
      </a>
    )

export default makeLink
