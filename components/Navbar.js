import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.ul}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
