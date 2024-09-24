import React from 'react'
import NavigationMenu from '../components/NavigationMenu'
import MenuList from '../components/MenuList';

const Layout = ({children}) => { 
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
}

export default Layout