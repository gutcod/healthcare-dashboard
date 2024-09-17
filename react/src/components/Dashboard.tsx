import React from 'react';
import DataFetcher from './DataFetcher';
// @ts-ignore
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Patient Health Monitoring Dashboard</h1>
      <DataFetcher />
    </div>
  );
};

export default Dashboard;
