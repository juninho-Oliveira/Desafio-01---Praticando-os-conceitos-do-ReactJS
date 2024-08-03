import { Trash } from "phosphor-react"

import styles from './TaskiList.module.css'


export function TaskList() {
    
    
    return (
        <section className={styles.list}>
            
            <input type="checkbox" />
                
                <p>Integer urna interdum massa libero auctor neque turpis
                    turpis semper. Duis vel sed fames integer.</p>

        <button>
            <Trash size={26} />
        </button>
    </section>
    )
}