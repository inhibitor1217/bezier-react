/* External dependencies */
import { FlattenSimpleInterpolation } from 'styled-components'

/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { Rounding } from '../../../foundation/Rounding'
import { TextFieldVariant, TextFieldSize } from './TextField.types'

interface BackgroundColorProps {
  variant: TextFieldVariant
  focused: boolean
  hasError: boolean
  readOnly: boolean
}

export function getProperTextFieldBgColor({
  variant,
  focused,
  hasError,
  readOnly,
}: BackgroundColorProps): SemanticNames {
  if (variant === TextFieldVariant.Secondary) { return 'bg-black-lightest' }
  if (variant === TextFieldVariant.Primary && readOnly) { return 'bg-grey-lighter' }
  if (variant === TextFieldVariant.Primary && (focused || hasError)) { return 'bg-white-normal' }
  return 'bg-grey-lightest'
}

interface BorderRadiusProps {
  size: TextFieldSize
}

export function getProperTextFieldBorderRadius({
  size,
}: BorderRadiusProps): FlattenSimpleInterpolation {
  if (size > TextFieldSize.L) {
    return Rounding.round12
  }

  return Rounding.round8
}
