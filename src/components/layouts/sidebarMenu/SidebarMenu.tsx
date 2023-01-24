import React, { useRef, useState } from 'react'

import SidebarMenuStyle, { MenuButtonStyle, SidebarHeader, SidebarWrapper } from './SidebarMenuStyle'

import MenuOutlined from '@ant-design/icons/MenuOutlined'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import { useOutsideClick } from '@/hooks'

const SidebarMenu = () => {
	const [isShow, setIsShow] = useState<boolean>(false)
	const toggleShow = () => setIsShow((prev) => !prev)
	const ref = useRef<HTMLDivElement>(null)

	useOutsideClick(ref, () => setIsShow(false))

	return (
		<SidebarMenuStyle
			ref={ref}
			isShow={isShow}>
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
