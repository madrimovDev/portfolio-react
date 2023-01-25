import { GlobalProps } from '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			bgColor: string
			sidebarBgColor: string
			contentBgColor: string
			accentBgColor: string
		}
	}
	export interface Global extends GlobalProps {
		styles: Interpolation<Theme>
	}
	export interface css extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject {}
}
