import { Provider } from "react-redux";
import { store } from "../redux/store";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider, Container } from "react-bootstrap";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
      >

        <Header />
          <main className='main'>
            <Container fluid="xxl" className="position-relative">
              <Component {...pageProps} />
            </Container>
          </main>
        <Footer />

      </ThemeProvider>
    </Provider>
  );
}
