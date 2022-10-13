import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

function ReactBootstrap() {

    const handleRegister = event => {

        // if Reload the page after Submit or Register use this
        event.preventDefault();


        const email = event.target.email.value;
        const pass = event.target.pass.value;
        console.log(email, pass);

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pass" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}


export default ReactBootstrap;