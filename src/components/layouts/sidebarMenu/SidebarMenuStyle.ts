import styled from '@emotion/styled'

const SidebarMenuStyle = styled('div')`
  position: absolute;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebarBgColor};
  top: 0;
  right: 0;
`

export default SidebarMenuStyle
