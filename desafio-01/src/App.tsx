import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'

import styles from './App.module.css'
import './global.css'


export function App() {

  return (
    <div className={styles.mainContent}>
      <Header />
      <NewTask />
      <Task />
    </div>
  )
}

