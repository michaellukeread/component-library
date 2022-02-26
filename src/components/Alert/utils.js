import { makeVariantFinder } from 'utils'

const variants = {
  positive: {
    background: 'bg-green-50',
    text: 'text-green-800',
    icon: 'check',
    iconColour: 'text-green-400'
  },
  warning: {
    background: 'bg-yellow-50',
    text: 'text-yellow-800',
    icon: 'exclamation-circle',
    iconColour: 'text-yellow-400'
  },
  negative: {
    background: 'bg-red-50',
    text: 'text-red-800',
    icon: 'minus-circle',
    iconColour: 'text-red-400'
  },
  information: {
    background: 'bg-blue-50',
    text: 'text-blue-800',
    icon: 'info-circle',
    iconColour: 'text-blue-400'
  },
  default: {
    background: 'bg-gray-200',
    text: 'text-gray-800',
    icon: 'info-circle',
    iconColour: 'text-gray-400'
  }
}
export const ALLOWED_VARIANTS = Object.keys(variants)
export const findColours = makeVariantFinder(variants)
