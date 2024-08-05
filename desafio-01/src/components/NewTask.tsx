import { PlusCircle } from "phosphor-react";
import styles from './NewTask.module.css'
import { useState } from "react";
//import { Task } from './Task'

interface NewTaskProps {
    addTask: (task: string) => void;
}

export function NewTask({addTask}:NewTaskProps) {

    const [valor, setValor] = useState<string>('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValor(event.target.value);
    }

    const handleNewTaskList = () => {
        addTask(valor); 
        setValor('');
    };

    return (
        <> 
        <div className={styles.contentNewTask}>

            <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={valor}
            onChange={handleInputChange} />

            <button
                type='submit'
                onClick={handleNewTaskList}>
                Criar <PlusCircle size={20} />
            </button>
        </div>
        
        </>

        
    )
}