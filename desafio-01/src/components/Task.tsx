
import { useState } from 'react';
import styles from './Task.module.css'
import { TaskList } from './TaskList'


interface Task {
    id: number;
    task: string;
}


export function Task() {

    const [quantidadeCheck, setQuantidadeCheck] = useState<number>(0);

    const listaDeTarefas: Task[] = [
        {
            id: 1,
            task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 2,
            task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 3,
            task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 4,
            task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
        },
        {
            id: 5,
            task: 'Finalizar desafio da Rocketseat.'
        },
        {
            id: 6,
            task: 'Finalizar desafio da Rocketseat.'
        },



    ]

    const quantidadeDeTarefas = listaDeTarefas.length

    const handleTaskCheckChange = (isChecked: boolean) => {
        setQuantidadeCheck(prev => isChecked ? prev + 1 : prev - 1);
        
    };

    const remover = () => {
        alert('I am the father! ')
    } 


    return (
        <main className={styles.mainContent}>

            <div className={styles.content}>

                <section className={styles.info}>
                    <p>Tarefas criadas <span>{quantidadeDeTarefas}</span></p>
                    <p className={styles.roxo}>Concluídas <span>{`${quantidadeCheck} de ${quantidadeDeTarefas}`}</span></p>
                </section>

                <section className={styles.listContent}>

                    {listaDeTarefas.map(task => {
                        return (
                            <TaskList
                                tarefa={task.task}
                                key={task.id} 
                                onCheckChange={handleTaskCheckChange}
                                remover={remover}/>
                        )
                    })}
                </section>

            </div>

        </main>
    )
}