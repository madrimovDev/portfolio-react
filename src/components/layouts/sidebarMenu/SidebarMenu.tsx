import React, { useRef } from 'react'

import SidebarMenuStyle, { SidebarHeader, SidebarWrapper } from './SidebarMenuStyle'
import SidebarButton from './SidebarButton'

import { useMenu } from '@/hooks'

const SidebarMenu = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [isShow, toggleShow] = useMenu(ref)

	return (
		<SidebarMenuStyle
			ref={ref}
			isShow={isShow}>
			<SidebarWrapper>
				<SidebarHeader>
					<SidebarButton
						isShow={isShow}
						toggleShow={toggleShow}
					/>
				</SidebarHeader>
			</SidebarWrapper>
		</SidebarMenuStyle>
	)
}

export default SidebarMenu
