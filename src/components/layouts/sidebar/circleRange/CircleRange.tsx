import React, { FC } from 'react'
import CircleRangeStyle, {Circle, CircleContent} from './CircleRangeStyle'

interface CircleRangeProps {
	title: string,
	parcent: number
}

const CircleRange: FC<CircleRangeProps> = ({title, parcent}) => {
	return (
		<CircleRangeStyle>
			
			<Circle>
				<CircleContent>
					<p>{parcent}%</p>
				</CircleContent>
			</Circle>

			<h5>{title}</h5>
		</CircleRangeStyle>
	)
}

export default CircleRange