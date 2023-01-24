import React, { FC } from 'react'
import LineRangeStyle, { LineRangeHeader, Line, Range } from './LineRangeStyle'

interface LineRangeProps {
	name: string
	value: number
}

const LineRange: FC<LineRangeProps> = ({ name, value }) => {
	return (
		<LineRangeStyle>
			<LineRangeHeader>
				<span className='name'>{name}</span>
				<span className='value'>{value} %</span>
			</LineRangeHeader>
			<Line>
				<Range value={value} />
			</Line>
		</LineRangeStyle>
	)
}

export default LineRange
