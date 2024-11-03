import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      {/* <Portfolio></Portfolio> */}
<Contact></Contact>
    </>
  );
}

export default App;
