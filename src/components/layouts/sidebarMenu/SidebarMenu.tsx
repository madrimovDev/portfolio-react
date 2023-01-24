import React, { useState } from 'react'

import SidebarMenuStyle, { MenuButtonStyle, SidebarHeader, SidebarWrapper } from './SidebarMenuStyle'

import MenuOutlined from '@ant-design/icons/MenuOutlined'
import CloseOutlined from '@ant-design/icons/CloseOutlined'

const SidebarMenu = () => {
	const [isShow, setIsShow] = useState<boolean>(false)
	const toggleShow = () => setIsShow((prev) => !prev)

	return (
		<SidebarMenuStyle isShow={isShow}>
			<SidebarWrapper>
				<SidebarHeader>
					<MenuButtonStyle
						isShow={isShow}
						onClick={toggleShow}>
						{isShow ? <CloseOutlined style={{ fontSize: 18 }} /> : <MenuOutlined style={{ fontSize: 18 }} />}
					</MenuButtonStyle>
				</SidebarHeader>
			</SidebarWrapper>
		</SidebarMenuStyle>
	)
}

export default SidebarMenu
