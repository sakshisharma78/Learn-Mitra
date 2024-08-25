// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <nav className={styles.sideNavbar}>
        <div className={styles.logo}>LearnMitra</div>
        <ul className={styles.navItems}>
          <li>Home</li>
          <li>My Quiz</li>
          <li>My Progress</li>
          <li>My Roadmap</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main className={styles.mainContent}>
        <button className={styles.createRoadmapButton}>Create a Roadmap</button>
        <div className={styles.graph}></div>
      </main>
    </div>
  );
};

export default Dashboard;
