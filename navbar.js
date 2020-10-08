import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Navbar1 extends Component
{
    render(){
        return(
            <Navbar dark expand="md">
           <div className="container">
              
               <Nav navbar>
               <NavItem>
                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>
               </Nav>  
           </div>
           </Navbar>
        )
    }
}
export default Navbar1;