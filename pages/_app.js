import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
