import { ThemeProvider } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Header />
        <main className="main">
          <Component {...pageProps} />
        </main>
      <Footer />
    </ThemeProvider>
  )
}
