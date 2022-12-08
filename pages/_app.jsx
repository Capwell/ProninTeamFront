import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { ThemeProvider } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
