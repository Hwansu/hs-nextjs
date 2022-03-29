import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import '../styles/globals.css'

const pathTitles = {
  '/': 'Home',
  '/about': 'About',
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  console.log('a', router)
  return (
    <>
      <Seo title={pathTitles[router.pathname]} />
      <Layout>
        <Component {...pageProps} />
        {/* <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style> */}
      </Layout>
    </>
  )
}
