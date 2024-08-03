import styles from './Task.module.css'
import { TaskList } from './TaskList'


export function Task() {
    return (
        <main className={styles.mainContent}>

            <div className={styles.content}>

                <section className={styles.info}>
                    <p>Tarefas criadas 5</p>
                    <span>Concluídas 2 de 5</span>
                </section>

                <section className={styles.listContent}>
                    < TaskList />
                    < TaskList />
                    < TaskList />
                </section>

            </div>

        </main>
    )
}