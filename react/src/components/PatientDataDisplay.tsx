// src/components/PatientDataDisplay.tsx
import React from 'react';
// @ts-ignore
import styles from '../styles/Dashboard.module.css';

interface PatientData {
  heartRate: number;
  bloodPressure: string;
  temperature: number;
}

interface PatientDataDisplayProps {
  data: PatientData;
}

const PatientDataDisplay: React.FC<PatientDataDisplayProps> = ({ data }) => {
  return (
    <div className={styles.patientDataDisplay}>
      <h2 className={styles.sectionTitle}>Patient Vital Signs</h2>
      <div className={styles.vitalSigns}>
        <div className={styles.vitalSign}>
          <h3>Heart Rate</h3>
          <p>{data.heartRate} bpm</p>
        </div>
        <div className={styles.vitalSign}>
          <h3>Blood Pressure</h3>
          <p>{data.bloodPressure} mmHg</p>
        </div>
        <div className={styles.vitalSign}>
          <h3>Temperature</h3>
          <p>{data.temperature}°C</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDataDisplay;
