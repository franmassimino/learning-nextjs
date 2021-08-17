import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Articlelayout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Articlelayout
