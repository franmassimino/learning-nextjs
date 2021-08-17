import {useRouter} from 'next/router'
import img from '../../../assets/post.jpg'
import Image from 'next/image'
import articleStyles from '../../../styles/Article.module.css'
import Navbar from '../../../components/Navbar'
import ArticleLayout from '../../../components/ArticleLayout'


const Article = ({article}) => {
    return (
        <div className={articleStyles.article}>
            <h1 className={articleStyles.title}>{article.title} <br /> Article {article.id} </h1>
            <Image  width='800px' height='500px' className={articleStyles.img} src={img} alt={article.title} />
            <p>{article.body}</p>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
} 

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
      paths,
      fallback: false,
    }
}

Article.getLayout = function getLayout(article) {
    return (
      <ArticleLayout>
        {article}
      </ArticleLayout>
    )
  }

export default Article
