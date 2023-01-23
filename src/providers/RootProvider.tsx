import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { rootRouter } from '@/routers'
import { store } from '@/store'
import { GlobalStyle, theme } from '@/assets'
import { ThemeProvider } from '@emotion/react'

const RootProvider: FC = () => {
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<RouterProvider router={rootRouter} />
				</ThemeProvider>
			</Provider>
		</>
	)
}

export default RootProvider
