import getInjection from './inject_loc'
import filter from './filter'

const inject = getInjection()

inject.metadata == 'desktop home' || inject.metadata == 'mobile home'
  ? inject.location?.parentNode?.insertBefore(filter, inject.location)
  : inject.location?.parentNode?.insertBefore(filter, inject.location.nextSibling)

console.error('Extension loaded')

export default inject
