// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Register.module.css';

const SignupForm = () => {
  return (
    <div className={styles.signupCard}>
      <form className={styles.signupForm}>
        <input type="text" placeholder="First Name" className={styles.input} />
        <input type="text" placeholder="Last Name" className={styles.input} />
        <input type="tel" placeholder="Contact" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <input type="password" placeholder="Confirm Password" className={styles.input} />
        <button type="submit" className={styles.submitButton}>Sign Up</button>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>Sign up with Google</button>
          <button className={styles.socialButton}>Sign up with LinkedIn</button>
          <button className={styles.socialButton}>Sign up with GitHub</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
