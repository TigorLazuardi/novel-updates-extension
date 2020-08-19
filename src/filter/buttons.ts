import { origins } from '../origins'
import { setDisplay } from './set_display'
import { toggleFilter } from './toggle_filter'

const selections = document.createElement('div')
// Making sure the chexboxes wrap well on small resolution screens
selections.style.display = 'flex'
selections.style.flexWrap = 'wrap'

for (const country in origins) {
  const show = localStorage.getItem(country) ?? 'show'
  const button = document.createElement('div')
  const name = document.createElement('p')
  name.style.marginBottom = '0'
  name.innerText = country

  button.appendChild(name)
  button.style.display = 'flex'
  button.style.alignItems = 'center'
  button.style.justifyContent = 'center'
  button.style.minWidth = '80px'
  button.style.backgroundColor = 'white'
  button.style.padding = '5px'
  button.style.marginBottom = '15px'
  button.style.marginTop = '5px'
  button.style.marginRight = '5px'
  button.style.cursor = 'pointer'
  button.style.borderRadius = '10px'
  button.style.border = '2px solid #7c5262'
  button.id = country
  button.addEventListener('click', toggleFilter)

  if (show === 'hide') {
    setDisplay(`.${origins[country]}`, false)
    button.style.backgroundColor = '#f9f871'
  }

  selections.appendChild(button)
}

export default selections
