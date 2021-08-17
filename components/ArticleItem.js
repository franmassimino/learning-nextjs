import articleStyle from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    return (
        <Link href='article/[id]' as={`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <button className={articleStyle.button}>Read post</button>
            </a>
        </Link>
    )
}

export default ArticleItem
