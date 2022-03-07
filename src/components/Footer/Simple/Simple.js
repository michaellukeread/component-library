const Simple = ({ logo, copyright, children }) => (
  <footer className="w-full bg-stone-100 p-8 flex justify-between items-center">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold">{logo}</h1>
      <p className="text-sm border-l-2 border-stone-600 pl-4">{copyright}</p>
    </div>
    <div className="flex gap-4">{children}</div>
  </footer>
)

export default Simple
