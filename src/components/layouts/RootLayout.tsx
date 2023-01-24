import React from 'react'
import RootLayoutStyle from './RootLayoutStyle'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

const RootLayout = () => {
	return (
		<RootLayoutStyle.RootLayoutStyle>
			<RootLayoutStyle.MainStyle>
				<Sidebar />
				<Content />
			</RootLayoutStyle.MainStyle>
		</RootLayoutStyle.RootLayoutStyle>
	)
}

export default RootLayout
