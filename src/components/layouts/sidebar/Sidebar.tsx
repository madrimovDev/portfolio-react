import React, { FC } from 'react'
import SidebarStyle, { Divider, SidebarWrapper, SoftSkills, Button } from './SidebarStyle'
import SidebarHeader from './SidebarHeader'
import SidebarInfo from './SidebarInfo'
import CircleRange from './circleRange/CircleRange'
import LineRange from './lineRange/LineRange'
import SidebarFooter from './SidebarFooter'

import CheckOutlined from '@ant-design/icons/CheckOutlined'
import DownloadOutlined from '@ant-design/icons/DownloadOutlined'
import Linkedin from '@ant-design/icons/LinkedinFilled'
import Facebook from '@ant-design/icons/FacebookFilled'
import Github from '@ant-design/icons/GithubFilled'
import Instagram from '@ant-design/icons/InstagramFilled'

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
	softSkills: ['Bootsrap, Tailwind, Ant-Design, Material-UI', 'Sass/Scss, PostCSS', 'GULP, Webpack', 'Git, Github'],
	socials: [
		{
			icon: <Linkedin />,
			href: '/'
		},
		{
			icon: <Github />,
			href: '/'
		},
		{
			icon: <Facebook />,
			href: '/'
		},
		{
			icon: <Instagram />,
			href: '/'
		}
	]
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
			<SidebarFooter socials={sidebarData.socials} />
		</SidebarStyle>
	)
}

export default Sidebar
