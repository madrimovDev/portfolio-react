import React, { FC } from 'react'
import { MenuButtonStyle } from './SidebarMenuStyle'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import MenuOutlined from '@ant-design/icons/MenuOutlined'

interface SidebarButtonProps {
	isShow: boolean,
	toggleShow: () => void
}

const SidebarButton: FC<SidebarButtonProps> = ({isShow, toggleShow}) => {
	return (
		<MenuButtonStyle
			isShow={isShow}
			onClick={toggleShow}>
			{isShow ? <CloseOutlined style={{ fontSize: 18 }} /> : <MenuOutlined style={{ fontSize: 18 }} />}
		</MenuButtonStyle>
	)
}

export default SidebarButton
