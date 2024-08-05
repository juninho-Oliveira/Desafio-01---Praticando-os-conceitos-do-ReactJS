import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Task } from './components/Task'


export function App() {
  
  return (
    <div className={styles.mainContent}>
      <Header />
      <Task/>
    </div>
  )
}

