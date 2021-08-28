import firebase from 'firebase/app'; // <---- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// import { fb } from 'service';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { FormField } from '../FormField/FormField';
import { useHistory } from 'react-router-dom';
import { validationSchema, defaultValues } from './formikConfig';
import './Login.css';
import firebaseConfig from '../../firebaseConfig';

export const Login = () => {
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

  const login = ({ email, password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (!res.user) {
          setServerError(
            "We're having trouble logging you in. Please try again.",
          );
        }
        history.push('/defi');
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          setServerError('Invalid credentials');
        } else if (err.code === 'auth/user-not-found') {
          setServerError('No account for this email');
        } else {
          setServerError('Something went wrong :(');
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="auth-form">
      <h1 style={{ color: 'white' }}>Login</h1>
      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />

            {/* <div className="auth-link-container">
              Don't have an account?{' '}
              <span
                className="auth-link"
                onClick={() => history.push('signup')}
              >
                Sign Up!
              </span>
            </div> */}

            <button type="submit" disabled={!isValid || isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
