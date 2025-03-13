import './App.css';
import './Footer.jsx';
import Footer from './Footer.jsx';
import './Header.jsx';
import Header from './Header.jsx';

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Footer />
    </div>
  );
}
