import "./sass/main.scss";

import Header from "./components/Header";
import About from "./components/About";
import Places from "./components/Places";
import Review from "./components/Review";
import Footer from "./components/Footer";

import "react-multi-carousel/lib/styles.css";
import NewNavbar from "./components/NewNavbar";
import Navbar from "./components/Navbar";

function App() {
  console.log("App Component called!");

  return (
    <>
      <NewNavbar />
      <Header />
      <main>
        <About />
        <Places />
        <Review />
        <Footer />
      </main>
    </>
  );
}

export default App;
