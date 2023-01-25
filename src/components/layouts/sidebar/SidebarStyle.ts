import styled from '@emotion/styled'

const SidebarStyle = styled('aside')`
	overflow: hidden;
	min-width: 300px;
	height: 100%;
	background: ${({ theme }) => theme.colors.sidebarBgColor};
	box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1);
	z-index: 11;
	display: flex;
	flex-direction: column;
`
export const SidebarHeaderStyle = styled('div')`
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	background: ${(props) => props.theme.colors.accentBgColor};
	padding: 30px;
	height: 235px;
	display: flex;
	flex-direction: column;
	justify-content: column;
	align-items: center;
	& img {
		border-radius: 50%;
		margin-bottom: 15px;
		height: 100px;
	}
	& h5 {
		margin-bottom: 10px;
		font-size: 14px;
		color: #eee;
	}
	& p {
		color: #8c8c8e;
		font-size: 11px;
		font-weight: 400;
		letter-spacing: 1px;
	}
`
export const SidebarWrapper = styled('div')`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`
export const SidebarInfoStyle = styled('div')`
	& li {
		display: flex;
		justify-content: space-between;
		color: #eee;
		font-size: 12px;
		margin-bottom: 4px;
		& span.name {
		}

		& span.value {
			color: #8c8c8e;
		}
	}
`
export const Divider = styled('div')`
	width: 100%;
	height: 1px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.1);
`
export const SoftSkills = styled.ul({
	li: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		color: 'orange',
		fontSize: 12,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		'span.name': {
			color: '#8e8e8e'
		}
	}
})
export const Button = styled.button({
	color: '#8e8e8e',
	display: 'inline-flex',
	alignItems: 'center',
	alignSelf: 'flex-start',
	gap: 10,
	padding: '5px 8px',
	borderRadius: 4,
	fontSize: 12,
	border: 'none',
	cursor: 'pointer',
	background: 'none',
	transitionDuration: '0.25s',
	'&:hover': {
		color: 'white'
	}
})
export const SidebarFooterStyle = styled.div(
	{
		padding: '10px 20px',
		boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
		display: 'flex',
		justifyContent: 'space-evenly',
		a: {
			color: '#8e8e8e',
			fontSize: 18
		}
	},
	(props) => ({
		background: props.theme.colors.accentBgColor
	})
)

export default SidebarStyle
