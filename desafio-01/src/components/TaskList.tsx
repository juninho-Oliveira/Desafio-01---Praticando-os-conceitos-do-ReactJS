import { Trash } from "phosphor-react"
import { useState } from "react";
import styles from './TaskiList.module.css'

interface TaskiListProps {
    tarefa: string;
    onCheckChange: (isChecked: boolean) => void;
    remover: () => void
}


export function TaskList({ tarefa, onCheckChange, remover }: TaskiListProps) {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    function handleCheckboxChange() {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onCheckChange(newCheckedState);
    }

    function removerTarefa() {
        //alert('ola')
        remover()
    }

    return (
        <section className={styles.list}>

            <div>
                <input
                    type="checkbox"
                    title="input"
                    onChange={handleCheckboxChange} />
            </div>

            <p className={isChecked ? styles.checked : ''}>{tarefa}</p>

            <div>
                <button title="botao" onClick={removerTarefa}>
                    <Trash size={26} />
                </button>
            </div>
        </section>
    )
}