import React from 'react'
import NavigationMenu from '../components/NavigationMenu'

const Layout = ({children}) => { 
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
}

export default Layout