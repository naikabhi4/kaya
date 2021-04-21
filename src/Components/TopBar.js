import { Avatar } from '@material-ui/core'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { auth } from '../firebase'
import "./styles/TopBar.css"


function TopBar() {

   
    return (
        <div className="topbar">
            <div className="logo">
                <img src="https://s3-alpha-sig.figma.com/img/fece/fb86/be1921ba0a0ce827c20f9282d35ea812?Expires=1619395200&Signature=RUl4gcio~8fIjd4-1tZGyl0fj6hyA9Vc4wHMmc-6t-GJGF1IGZy2VAW1wy0Q-EJeZv4UmZNqFo34~RTb7uqycF-Pl8HVeKqzMsUQ3gi7UKkKgidV4cnWD9OeTbMVktb7~GT3vFCU-ZqTXNSYxY11BbJOYpjhBXcLv43r1N6n3LtxLlZjT9PMvFqvwy8mV-ZkAX0jy~e1YQC1XU67Vrz0D1-m-Gp7Imgo4f5SkXQDdKli14-OQx0okp56oy1jjYZNJwFo-KULc53SIxr-uJkZzcnIbqIkKmGahOzN33C4C96xHf0jRvVI-Za2x3Mgl~1eXyIMYe3ZRcMLyXbLG5AmsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo"/>
            </div>
            <Nav className="nav ml-auto" >
            <Avatar   className="avatar"/>
            <NavDropdown className="drop" title="" id="nav-dropdown" >
        <NavDropdown.Item eventKey="4.1" onClick={() => auth.signOut()}>Log-Out</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3" >Something else here</NavDropdown.Item>
      </NavDropdown>
            </Nav>
            <div className="username">
                <p>Good Morning</p>
                <p> Hello User </p>
            </div>

        </div>
    )
}

export default TopBar
