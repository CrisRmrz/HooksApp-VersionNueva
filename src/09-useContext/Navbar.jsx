import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' }`} to='/' end >
                            Home
                        </NavLink>
                        <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' }`} to='/about' end >
                            About
                        </NavLink>
                        <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' }`} to='/login' end >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
