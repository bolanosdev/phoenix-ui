import type {
  ScaleType,
  RoundingType,
  ActionType,
} from '@phoenix-ui/types/attributes'

import type {
  ReactBaseComponentProperties,
  ReactBaseComponentAttributes,
} from '@phoenix-ui/react-base-component/'

export interface ButtonAttributes extends ReactBaseComponentAttributes {
  disabled?: boolean
}

export interface ButtonProperties extends ReactBaseComponentProperties {
  action?: ActionType
  scale?: ScaleType
  rounded?: RoundingType
  isFullWidth?: boolean
  disabled?: boolean
}
