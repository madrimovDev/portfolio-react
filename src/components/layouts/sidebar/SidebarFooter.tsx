import React, { FC } from 'react'
import { SidebarFooterStyle } from './SidebarStyle'

interface SidebarFooterProps {
	socials: { icon: JSX.Element; href: string }[]
}

const SidebarFooter: FC<SidebarFooterProps> = ({ socials }) => {
	return (
		<SidebarFooterStyle>
			{socials.map((s, index) => (
				<a
					key={index}
					href={s.href}>
					{s.icon}
				</a>
			))}
		</SidebarFooterStyle>
	)
}

export default SidebarFooter
