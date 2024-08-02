import { Rocket } from "phosphor-react";
import styles from './Header.module.css'

export function Header () {
    return (
        <header className={styles.header}>
                <Rocket size={56} />
                <strong>to<span>do</span></strong>
        </header>
    )
}