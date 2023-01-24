import styled from '@emotion/styled'

const SidebarMenuStyle = styled('div')`
	width: ${(props: { isShow: boolean }) => (props.isShow ? '300px' : '60px')};
	height: 100%;
	background: ${({ theme }) => theme.colors.sidebarBgColor};
	transition: 0.85s ease-out;
	position: relative;
`
export const MenuButtonStyle = styled('button')`
	padding: 20px;
	border: none;
	background: none;
	color: #eee;
	rotate: ${(props: {isShow: boolean}) => (props.isShow ? 0 : '90deg')};
	transition: .25s ease-out;
	cursor: pointer;
`
export const SidebarWrapper = styled('div')`
	width: 300px;
	height: 100%;
`
export const SidebarHeader = styled('div')`
	height: 60px;
	background: ${props => props.theme.colors.accentBgColor}
`

export default SidebarMenuStyle
