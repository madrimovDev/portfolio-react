import styled from '@emotion/styled'

const SidebarMenuStyle = styled('nav')`
	width: ${(props: { isShow: boolean }) => (props.isShow ? '260px' : '60px')};
	height: 100%;
	background: ${({ theme }) => theme.colors.sidebarBgColor};
	transition: 0.55s ease-in-out;
	position: relative;
`
export const MenuButtonStyle = styled('button')`
	padding: 20px;
	border: none;
	background: none;
	color: #eee;
	rotate: ${(props: { isShow: boolean }) => (props.isShow ? 0 : '90deg')};
	transition: 0.25s ease-out;
	cursor: pointer;
`
export const SidebarWrapper = styled('div')`
	width: 26 0px;
	height: 100%;
	display: flex;
	flex-direction: column;
`
export const SidebarHeader = styled('div')`
	height: 60px;
	background: ${(props) => props.theme.colors.accentBgColor};
`
export const SidebarMenuList = styled.ul({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: 14,
	marginLeft: 30,
	flexGrow: 1,
	transition: '0.25s ease-out'
})

export const ListItem = styled.li({}, (props: { index: number; isShow: boolean; active: boolean }) => ({
	transition: '0.55s',
	transitionDelay: props.index > 0 ? (props.index * 0.1) + 's' : '0s',
	opacity: props.isShow ? 1 : 0,
	transform: `translateX(${props.isShow ? 0 : '30px'})`,
	a: {
		transition: '0.25s',
		fontSize: 14,
		color: props.active ? 'white' : '#8e8e8e',
		'&:hover': {
			color: 'white'
		}
	}
}))

export default SidebarMenuStyle
