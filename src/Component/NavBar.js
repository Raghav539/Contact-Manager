import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;



function NavBar() {
  return (
        <Header position='static'>
            <Toolbar>
            <Tabs to="./" exact="true">Home</Tabs>
                <Tabs to="all" exact="true">All Users</Tabs>
                <Tabs to="add" exact="true">Add User</Tabs>
            </Toolbar>
        </Header>
  )
}

export default NavBar
