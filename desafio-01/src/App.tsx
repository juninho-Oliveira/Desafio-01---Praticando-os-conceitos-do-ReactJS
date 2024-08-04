import { Header } from './components/Header'
import { NewTask } from './components/NewTask'


import styles from './App.module.css'
import './global.css'


export function App() {

  return (
    <div className={styles.mainContent}>
      <Header />
      <NewTask />
    </div>
  )
}

