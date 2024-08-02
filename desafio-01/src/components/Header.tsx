
import styles from './Header.module.css'
import img from '../assets/rocket.png'

export function Header () {
    return (
        <header className={styles.header}>
                <img src={img} alt="LOGO" />
                <strong>to<span>do</span></strong>
        </header>
    )
}