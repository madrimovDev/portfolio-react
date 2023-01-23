import styled from '@emotion/styled'

const MainStyle = styled('main')`
	max-width: 1400px;
	width: 100%;
	height: calc(100% - 10vh);
	display: flex;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
`

const RootLayoutStyle = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.bgColor};
`

export default {
	RootLayoutStyle,
	MainStyle
}
