import { useRouter } from 'next/router'
import { ThemeProvider } from 'react-bootstrap'
import Header from '../components/Header/Header'
import PTBreadcrumb from '../components/PTBreadcrumb/PTBreadcrumb'
import Footer from '../components/Footer/Footer'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Header />

      <main className="main">
        { router.pathname !== '/' && <PTBreadcrumb/> }
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </ThemeProvider>
  )
}
