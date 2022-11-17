import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Body from "./components/Layout/Body";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
