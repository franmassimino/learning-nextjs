import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout'


export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Web dev news</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      {home}
    </Layout>
  )
}

