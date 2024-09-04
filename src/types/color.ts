export type ColorScale = | Partial<{
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  foreground: string
  DEFAULT: string
}> | string

export interface BaseColors {
  background: ColorScale
  foreground: ColorScale
}

export interface SemanticBaseColors {
  light: BaseColors
  dark: BaseColors
}

export type ThemeColors = BaseColors & {
  default: ColorScale
  primary: ColorScale
  success: ColorScale
  warn: ColorScale
  error: ColorScale
}
