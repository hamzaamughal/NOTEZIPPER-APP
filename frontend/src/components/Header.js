import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {
	const history = useHistory()
	return (
		<Navbar bg="primary" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to='/'> Note Zipper </Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Form>
							<FormControl
								type="text"
								placeholder="search"
								className="mr-sm-2"
							/>
						</Form>
					</Nav>
					<Nav>
						<Nav.Link><Link to='/mynotes'>My Notes</Link></Nav.Link>
						<NavDropdown title="Hamza Mughal" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
							<NavDropdown.Item onClick={() => {
								localStorage.removeItem('userInfo')
								history.push('/')
							}}>Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
