import React from 'react'
import { Global, css } from '@emotion/react'
import '@fontsource/open-sans'

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style: none;
					text-decoration: none;
					font-family: 'Open Sans', sans-serif;
				}
				*::-webkit-scrollbar {
					display: none;
				}
			`}
		/>
	)
}

export default GlobalStyle
