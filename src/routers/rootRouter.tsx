import { RootLayout } from '@/components'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />
	}
])

export default rootRouter
