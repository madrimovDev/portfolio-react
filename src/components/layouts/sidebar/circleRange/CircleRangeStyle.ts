import styled from '@emotion/styled'

const CircleRangeStyle = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #8c8c8e;
	gap: 8px;
`

export const Circle = styled('div')`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.accentBgColor};
	position: relative;
	overflow: hidden;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: orange;
	}
`

export const CircleContent = styled('div')`
	z-index: 1;
	width: calc(100% - 8px);
	height: calc(100% - 8px);
	background: ${(props) => props.theme.colors.accentBgColor};
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 400;
	color: #8c8c8e;
`
export default CircleRangeStyle
