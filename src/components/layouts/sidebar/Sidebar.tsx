import React, { FC } from 'react'
import SidebarStyle, { Divider, SidebarWrapper } from './SidebarStyle'
import SidebarHeader from './SidebarHeader'
import SidebarInfo from './SidebarInfo'
import CircleRange from './circleRange/CircleRange'
import LineRange from './lineRange/LineRange'

const Sidebar: FC = () => {
	return (
		<SidebarStyle>
			<SidebarHeader />
			<SidebarWrapper>
				<SidebarInfo />
				<Divider />
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
				<Divider />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 20
					}}>
					<LineRange
						name='HTML'
						value={95}
					/>
					<LineRange
						name='CSS'
						value={90}
					/>
					<LineRange
						name='JavaScript'
						value={80}
					/>
					<LineRange
						name='ReactJS'
						value={80}
					/>
				</div>
			</SidebarWrapper>
		</SidebarStyle>
	)
}

export default Sidebar
