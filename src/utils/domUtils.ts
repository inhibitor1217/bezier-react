/* External dependencies */
import { document } from 'ssr-window'

export const rootElement =
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement
