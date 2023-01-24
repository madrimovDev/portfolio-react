import styled from '@emotion/styled'

const LineRangeStyle = styled('div')``

export const LineRangeHeader = styled.div({
	display: 'flex',
	justifyContent: 'space-between',
	color: '#8e8e8e',
	marginBottom: 8,
})

export const Line = styled.div(
	{
		width: '100%',
		height: 4
	},
	(props) => ({
		background: props.theme.colors.accentBgColor
	})
)

export const Range = styled.div(
	{
		height: '100%',
		background: 'orange',
		borderRadius: 10
	},
	(props: { value: number }) => ({
		width: props.value + '%'
	})
)

export default LineRangeStyle
