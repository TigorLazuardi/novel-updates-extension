interface Injection {
  location: Element
  metadata: 'desktop home' | 'mobile home' | 'not home'
  isMobile: boolean
}

export default function getInjection(): Injection {
  const mobileUgerAgents: { [key: string]: string } = {
    android: 'Android',
    ios: 'iPhone',
  }

  let isMobile = false

  for (const useragent in mobileUgerAgents) {
    if (window.navigator.userAgent.toLowerCase().indexOf(useragent.toLowerCase()) !== -1) {
      isMobile = true
      break
    }
  }

  const mobileHome = document.querySelectorAll('.tbl_m_release')[0]
  const desktopHome = document.querySelectorAll('.l-content table#myTable')[1]
  const seriesListingAndRanking = document.querySelector('.search_sort')
  const seriesFinderAndLatestSeries = document.querySelector('#rankfilter')
  const recommendedList = document.querySelector('.ucl_main')

  return {
    isMobile,
    metadata: mobileHome ? 'mobile home' : desktopHome ? 'desktop home' : 'not home',
    location:
      mobileHome ??
      desktopHome ??
      seriesListingAndRanking ??
      seriesFinderAndLatestSeries ??
      recommendedList,
  }
}
