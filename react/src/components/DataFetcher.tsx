import React, { useState, useEffect } from 'react';
import PatientDataDisplay from './PatientDataDisplay';
import VitalsChart from './VitalsChart';
// @ts-ignore
import styles from '../styles/Dashboard.module.css';

interface WeatherData {
  current: {
    temperature: number;
    windspeed: number;
    relativehumidity_2m: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    windspeed_10m: number[];
  };
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature,windspeed,relativehumidity_2m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&forecast_days=1'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: WeatherData = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!data) return null;

  const patientData = {
    heartRate: Math.round(data.current.windspeed),
    bloodPressure: `${Math.round(data.current.temperature * 2)}/${Math.round(data.current.relativehumidity_2m)}`,
    temperature: data.current.temperature,
  };

  const chartData = {
    labels: data.hourly.time.slice(0, 24),
    datasets: [
      {
        label: 'Temperature',
        data: data.hourly.temperature_2m.slice(0, 24),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humidity',
        data: data.hourly.relativehumidity_2m.slice(0, 24),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.dataFetcher}>
      <PatientDataDisplay data={patientData} />
      <VitalsChart data={chartData} />
    </div>
  );
};

export default DataFetcher;
