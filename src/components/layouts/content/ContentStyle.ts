import styled from '@emotion/styled'

const ContentStyle = styled('main')`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.contentBgColor};
	display: flex;
	justify-content: flex-end;
`
export default ContentStyle
