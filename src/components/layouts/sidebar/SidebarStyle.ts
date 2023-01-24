import styled from '@emotion/styled'

const SidebarStyle = styled('aside')`
	min-width: 300px;
	height: 100%;
	background: ${({ theme }) => theme.colors.sidebarBgColor};
	z-index: 11;
`

export default SidebarStyle
