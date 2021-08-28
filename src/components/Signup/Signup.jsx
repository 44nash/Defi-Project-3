import firebase from 'firebase/app'; // <---- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// import { fb } from 'service';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormField } from '../FormField/FormField';
import { defaultValues, validationSchema } from './formikConfig';
import './Signup.css';
import firebaseConfig from '../../firebaseConfig';

// import axios from 'axios';

export const Signup = () => {
  // firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp({});
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const fb = {
    auth: firebase.auth(),
    storage: firebase.storage(),
    firestore: firebase.firestore(),
  };
  const history = useHistory();
  const [serverError, setServerError] = useState('');

  const signup = ({ email, userName, password }, { setSubmitting }) => {
    function emailId(str) {
      const myArr = str.split('@');
      return myArr[0];
    }

    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let emailIdVar = emailId(res.user.email);
        if (res?.user?.uid) {
          fb.firestore.collection('users').doc(res.user.uid).set({
            userName: userName,
            avatar: '',
            email: res.user.email,
          });
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
        history.push('/defi');
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setServerError('An account with this email already exists');
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="auth-form">
      <h1 style={{ color: 'white' }}>Signup</h1>
      <Formik
        onSubmit={signup}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="User Name" />
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <FormField
              type="password"
              name="verifyPassword"
              label="Verify Password"
            />

            {/* <div className="auth-link-container">
              Already have an account?{' '}
              <span className="auth-link" onClick={() => history.push('login')}>
                Log In!
              </span>
            </div> */}

            <button disabled={isSubmitting || !isValid} type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
