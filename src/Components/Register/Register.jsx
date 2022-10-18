import React, { useState } from 'react';
import Joi from 'joi';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {

    let navigate = useNavigate();

    const [errList, setErorrList] = useState([]);

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        age: 0
    });

    const [errMessage, setErrMessage] = useState('');

    function getUser(e) {
        let inputValue = e.target.value;
        let newUser = { ...user };
        newUser[`${e.target.id}`] = inputValue;
        setUser(newUser);
    };


    async function submitForm(e) {
        e.preventDefault();
        let schema = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(10).required(),
            last_name: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().required(),
            age: Joi.number().min(18).max(60).required()
        });

        let joiResponse = schema.validate(user, { abortEarly: false });

        if (joiResponse.error) {
            setErorrList(joiResponse.error.details);
        }
        else {
            let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', user);
            if (data.errors) {
                setErrMessage(data.message);
            }
            else {
                navigate('/login');
            }
        }
    }


    return <>

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <span className="navbar-brand text-light">Noxe</span>
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
                            <Link className="nav-link active text-light" aria-current="page" to={"/login"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className='vh-100 d-flex justify-content-center align-items-center login'>
            <div className='w-50'>


                <h4>Registeration Form</h4>

                <form onSubmit={submitForm}>
                    <label htmlFor="first_name" className='mb-2'>First Name: </label>
                    <input onChange={getUser} type="text" id='first_name' className='form-control mb-3' />
                    <label htmlFor="last_name" className='mb-2'>Last Name: </label>
                    <input onChange={getUser} type="text" id='last_name' className='form-control mb-3' />
                    <label htmlFor="age" className='mb-2'>Age: </label>
                    <input onChange={getUser} type="number" id='age' className='form-control mb-3' />
                    <label htmlFor="email" className='mb-2'>email: </label>
                    <input onChange={getUser} type="email" id='email' className='form-control mb-3' />
                    <label htmlFor="password" className='mb-2'>password: </label>
                    <input onChange={getUser} type="password" id='password' className='form-control mb-3' />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div></div>
                        <div>
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </div>
                </form>

                {errMessage.length == 0 ? '' : <div className='alert alert-danger mt-4'>{errMessage}</div>}

                {errList.map(err => <div className='d-flex justify-content-center align-items-center'>
                    <div className='alert alert-danger w-100 mt-2'>
                        {err.message}
                    </div>
                </div>)}

            </div>
        </div>


    </>
}
