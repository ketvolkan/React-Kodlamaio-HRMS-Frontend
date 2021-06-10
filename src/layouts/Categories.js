import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
export default function Categories() {
    return (
        <div>
        <Menu pointing vertical>
        <Menu.Item 
          name='Employer List' as={NavLink} to="/Employer"
        />
        <Menu.Item
          name='Employee List' as={NavLink} to="/Employee"
        />
        <Menu.Item
          name='Job List' as={NavLink} to="/Job"
        />
      </Menu>
        </div>
    )
}
