import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <span className={headerStyles.span}>Web dev </span>
                news
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web development news!</p>
        </div>
    )
}

export default Header
