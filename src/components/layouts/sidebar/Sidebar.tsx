import React, { FC } from 'react'
import SidebarStyle, { Divider, SidebarWrapper } from './SidebarStyle'
import SidebarHeader from './SidebarHeader'
import SidebarInfo from './SidebarInfo'
import CircleRange from './circleRange/CircleRange'

const Sidebar: FC = () => {
	return (
		<SidebarStyle>
			<SidebarHeader />
			<SidebarWrapper>
				<SidebarInfo />
				<Divider />
				<div style={{ display: 'flex', justifyContent: 'space-evenly',  }}>
					<CircleRange
						title='Uzbek'
						parcent={100}
					/>
					<CircleRange
						title='Russian'
						parcent={40}
					/>
					<CircleRange
						title='English'
						parcent={20}
					/>
				</div>
			</SidebarWrapper>
		</SidebarStyle>
	)
}

export default Sidebar
