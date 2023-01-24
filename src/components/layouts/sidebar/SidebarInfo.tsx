import React from 'react'
import { SidebarInfoStyle } from './SidebarStyle'

const SidebarInfo = () => {
	return (
		<SidebarInfoStyle>
			<ul>
				<li>
					<span className='name'>Residence</span>
					<span className='value'>Uzbekistan</span>
				</li>
				<li>
					<span className='name'>City</span>
					<span className='value'>Khiva</span>
				</li>
				<li>
					<span className='name'>Age</span>
					<span className='value'>24</span>
				</li>
			</ul>
		</SidebarInfoStyle>
	)
}

export default SidebarInfo
