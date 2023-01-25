import React, { FC } from 'react'
import SidebarStyle, { Divider, SidebarWrapper, SoftSkills, Button } from './SidebarStyle'
import SidebarHeader from './SidebarHeader'
import SidebarInfo from './SidebarInfo'
import CircleRange from './circleRange/CircleRange'
import LineRange from './lineRange/LineRange'

import CheckOutlined from '@ant-design/icons/CheckOutlined'
import DownloadOutlined from '@ant-design/icons/DownloadOutlined'
import SidebarFooter from './SidebarFooter'

const sidebarData = {
	languages: [
		{
			title: 'Uzbek',
			parcent: 100
		},
		{
			title: 'Russian',
			parcent: 40
		},
		{
			title: 'English',
			parcent: 30
		}
	],
	hardSkills: [
		{
			name: 'HTML',
			value: 90
		},
		{
			name: 'CSS',
			value: 94
		},
		{
			name: 'JavaScript',
			value: 90
		},
		{
			name: 'TypeScript',
			value: 70
		},
		{
			name: 'ReactJS',
			value: 90
		}
	],
	softSkills: ['Bootsrap, Tailwind, Ant-Design, Material-UI', 'Sass/Scss, PostCSS', 'GULP, Webpack', 'Git, Github']
}

const Sidebar: FC = () => {
	return (
		<SidebarStyle>
			<SidebarHeader />
			<div
				style={{
					flexGrow: 1,
					overflow: 'auto'
				}}>
				<SidebarWrapper>
					<SidebarInfo />
					<Divider />
					<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
						{sidebarData.languages.map((data) => (
							<CircleRange
								key={data.title}
								title={data.title}
								parcent={data.parcent}
							/>
						))}
					</div>
					<Divider />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 20
						}}>
						{sidebarData.hardSkills.map((data) => (
							<LineRange
								key={data.name}
								name={data.name}
								value={data.value}
							/>
						))}
					</div>
					<Divider />
					<SoftSkills>
						{sidebarData.softSkills.map((data) => (
							<li key={data}>
								<CheckOutlined />
								<span className='name'>{data}</span>
							</li>
						))}
					</SoftSkills>
					<Divider />
					<Button>
						<DownloadOutlined />
						Download CV
					</Button>
				</SidebarWrapper>
			</div>
			<SidebarFooter />
		</SidebarStyle>
	)
}

export default Sidebar
