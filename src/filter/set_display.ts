import inject from '..'

export function setDisplay(selector: string, display: boolean) {
  const el = document.querySelectorAll(selector)
  el.forEach((e) => {
    let parent: HTMLElement | null | undefined
    if (inject.isMobile) {
      parent = e.parentElement?.parentElement
    } else {
      inject.metadata === 'desktop home'
        ? (parent = e.parentElement?.parentElement)
        : (parent = e.parentElement?.parentElement?.parentElement)
    }
    // @ts-ignore
    display ? parent?.removeAttribute('style') : (parent?.style.display = 'none')
  })
}
