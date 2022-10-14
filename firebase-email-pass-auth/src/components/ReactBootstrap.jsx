import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

function ReactBootstrap() {
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = event => {

        // if Reload the page after Submit or Register use this
        event.preventDefault();

        const form = event.target;
        setSuccess(false);


        const email = event.target.email.value;
        const pass = event.target.pass.value;
        console.log(email, pass);

        if (pass.length < 6) {
            setErrors("Enter minimun six characters");
            return;
        }
        //Regular Expression condition  /( ? = . * [condition])/.test(value)

        if (!/(?=.*[A-Z])/.test(pass)) {
            setErrors("Enter minimum one upperCase");
            return;
        }
        setErrors('');

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true);
                form.reset()

            })
            .catch(error => {
                console.error('error', error);
                setErrors(error.message);
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
                <p className='text-danger'>{errors}</p>
                {success && <p className='text-success'>User Created Successfully</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}


export default ReactBootstrap;