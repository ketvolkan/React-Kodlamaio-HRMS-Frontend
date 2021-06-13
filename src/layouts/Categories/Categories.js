import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import "./Categories.css"
export default function Categories() {
    return (
        <div className="categories">
        <Menu pointing vertical>
        <Menu.Item 
          name='İş veren listesi' active as={NavLink} to="/List/Employer"
        />
        <Menu.Item
          name='İş arayan listesi' as={NavLink} to="/List/Employee"
        />
        <Menu.Item
          name='İş Türleri Listesi' as={NavLink} to="/List/Job"
        />
      </Menu>
        </div>
    )
}
