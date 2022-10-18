import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <>

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand text-light" href=''>Noxe</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className='mx-3'>
                        <i className="fa-brands fa-facebook text-light mx-1"></i>
                        <i className="fa-brands fa-instagram text-light mx-1"></i>
                        <i className="fa-brands fa-spotify text-light mx-1"></i>
                        <i className="fa-brands fa-youtube text-light mx-1"></i>
                    </div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to={"login"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"register"}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}
