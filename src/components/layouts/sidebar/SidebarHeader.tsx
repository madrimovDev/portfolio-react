import React from 'react'
import { SidebarHeaderStyle } from './SidebarStyle'

const SidebarHeader = () => {
	return (
		<SidebarHeaderStyle>
			<img src='https://api.lorem.space/image/face?w=100&h=100' />
			<h5>Johnny Depp</h5>
			<p>
				Javascript Developer,
				<br />
				💙 Love Typescript
			</p>
		</SidebarHeaderStyle>
	)
}

export default SidebarHeader
