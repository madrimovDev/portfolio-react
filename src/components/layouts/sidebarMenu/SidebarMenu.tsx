import React, { useRef } from 'react'

import SidebarMenuStyle, { ListItem, SidebarHeader, SidebarMenuList, SidebarWrapper } from './SidebarMenuStyle'
import SidebarButton from './SidebarButton'

import { useMenu } from '@/hooks'
import { Link, useLocation } from 'react-router-dom'

const menuList = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'Portfolio',
		href: '/portfolio'
	},
	{
		title: 'History',
		href: '/history'
	},
	{
		title: 'Contact',
		href: '/contact'
	}
]

const SidebarMenu = () => {
	const ref = useRef<HTMLDivElement>(null)

	const [isShow, toggleShow] = useMenu(ref)
	const { pathname } = useLocation()

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
				<SidebarMenuList>
					{menuList.map((item, index) => {
						return (
							<ListItem
								isShow={isShow}
								active={pathname === item.href}
								index={index}
								key={item.title}>
								<Link to={item.href}>{item.title}</Link>
							</ListItem>
						)
					})}
				</SidebarMenuList>
			</SidebarWrapper>
		</SidebarMenuStyle>
	)
}

export default SidebarMenu
