import "./sass/main.scss";

import Header from "./components/Header";
import About from "./components/About";
import Places from "./components/Places";
import Review from "./components/Review";
import Footer from './components/Footer';

import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Places />
        <Review />
        <Footer/>
      </main>
    </>
  );
}

export default App;
