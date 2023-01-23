import React from 'react'
import RootLayoutStyle from './RootLayoutStyle'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'
import SidebarMenu from './sidebarMenu/SidebarMenu'

const RootLayout = () => {
	return (
		<RootLayoutStyle.RootLayoutStyle>
			<RootLayoutStyle.MainStyle>
				<Sidebar />
				<Content />
				<SidebarMenu />
			</RootLayoutStyle.MainStyle>
		</RootLayoutStyle.RootLayoutStyle>
	)
}

export default RootLayout
