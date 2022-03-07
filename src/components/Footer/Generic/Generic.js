const Generic = ({ logo, subtitle, children }) => (
  <footer class="text-gray-600 w-full bg-stone-100 flex justify-between py-4 px-8 items-center">
    <div>
      <h1 className="text-4xl font-bold uppercase tracking-wider">{logo}</h1>
      <h2 className="w-64">{subtitle}</h2>
    </div>
    <div className="flex gap-16">{children}</div>
  </footer>
)

export default Generic
