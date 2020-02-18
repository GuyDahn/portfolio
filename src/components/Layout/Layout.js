import React from 'react'
import Topbar from '../Topbar'
import UserHeader from '../UserHeader'
import MobileNav from '../MobileNav'

import { StyledContent } from './styles'

const Layout = ({ user, children }) => {
  return (
    <div>
      <MobileNav />
      <Topbar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </div>
  )
}

export default Layout
