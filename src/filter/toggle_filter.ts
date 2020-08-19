import inject from '..'
import { setDisplay } from './set_display'
import { origins } from '../origins'

export function toggleFilter(this: HTMLDivElement) {
  const prev = localStorage.getItem(this.id)
  let hide: boolean
  prev === 'show' ? (hide = true) : (hide = false)
  if (inject.isMobile) {
    inject.metadata === 'mobile home'
      ? setDisplay(`.l-submain-h > table.tbl_m_release .${origins[this.id]}`, hide)
      : setDisplay(`.${origins[this.id]}`, hide)
  } else {
    inject.metadata === 'desktop home'
      ? setDisplay(`.l-content > table#myTable .${origins[this.id]}`, hide)
      : setDisplay(`.${origins[this.id]}`, hide)
  }
  hide ? (this.style.backgroundColor = 'white') : (this.style.backgroundColor = '#F9F871')
  localStorage.setItem(this.id, hide ? 'hide' : 'show')
}
