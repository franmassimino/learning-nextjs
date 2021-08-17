import Head from "next/head"
import Layout from "../components/Layout"

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name='keywords' content='web development, programming' />
            </Head>
            <h1>About</h1>
        </div>
    )
}

About.getLayout = function getLayout(home) {
    return (
      <Layout>
        {home}
      </Layout>
    )
  }

export default About
