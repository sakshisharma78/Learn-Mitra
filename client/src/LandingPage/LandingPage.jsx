// eslint-disable-next-line no-unused-vars
import React from 'react';
import L from'./Landingpage.module.css';

function Landingpage() {
  return (
    <div className={L.container}>
      <div className={L.header}>
        <h1>Uppar</h1>
        <ul>
          <li>Home</li>
          <li>Arone</li>
          <li>About</li>
          <li>Ug</li>
          <li>Uo</li>
          <li>Sign</li>
          <li>Sign</li>
          <li>Sign up</li>
          <li>Sign</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className={L.content}>
        <div className={L.welcome}>
          <h2>Welcome to</h2>
          <h1>LearnMitra</h1>
          <p>The bus or Ota nacia palatian mevñora, The Beater via maitoral her bimariy ayl.</p>
        </div>
        <div className={L.features}>
          <p>Woling morwalnúncio doug cho od dominating of OIT Icielal</p>
          <div className={L.feature}>
            <img src="https://images.unsplash.com/photo-1553062407-1330a14815a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Learn Mitra" />
            <h3>Loarn Noirs</h3>
          </div>
          <div className={L.feature}>
            <img src="https://images.unsplash.com/photo-1553062407-1330a14815a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="About Us" />
            <h3>Aboc Us</h3>
          </div>
          <div className={L.feature}>
            <img src="https://images.unsplash.com/photo-1553062407-1330a14815a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Nuncaólares Ap" />
            <h3>Nuncaólares Ap</h3>
          </div>
          <div className={L.feature}>
            <img src="https://images.unsplash.com/photo-1553062407-1330a14815a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="San Up" />
            <h3>San Up</h3>
          </div>
        </div>
        <button className={L.button}>Lets Got Started</button>
        <p className={L.footer}>Lada ga borted</p>
      </div>
    </div>
  );
}

export default Landingpage;