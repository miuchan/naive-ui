import { scrollbarLight } from '../../scrollbar/styles'
import { dialogLight } from '../../dialog/styles'
import { cardLight } from '../../card/styles'
import { commonLight } from '../../_styles/new-common'
import type { ThemeCommonVars } from '../../_styles/new-common'
import { createTheme } from '../../_mixins'

const self = (vars: ThemeCommonVars) => {
  const { modalColor, textColor2, boxShadow3 } = vars
  return {
    color: modalColor,
    textColor: textColor2,
    boxShadow: boxShadow3
  }
}

export type ModalThemeVars = ReturnType<typeof self>

const modalLight = createTheme({
  name: 'Modal',
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight,
    Dialog: dialogLight,
    Card: cardLight
  },
  self
})

export default modalLight
export type ModalTheme = typeof modalLight