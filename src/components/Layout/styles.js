import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

export const StyledContent = styled(Content)`
  min-height: 100%;
  background-color: #353A34;
  color: white;
  @media (max-width: 640px) {
    margin-left:200px!important;
  }
`
