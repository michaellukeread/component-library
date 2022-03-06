import { toInitials } from 'utils'

const Avatar = ({ onClick, name, image }) => {
  const initials = toInitials(name)

  return (
    <button
      onClick={onClick}
      className="inline-block h-12 w-12 bg-stone-900 rounded-full ring-2 ring-white">
      {image ? (
        <img className="rounded-full" src={image} alt={name} />
      ) : (
        <span className="font-semibold text-lg text-white">{initials}</span>
      )}
    </button>
  )
}

export default Avatar
