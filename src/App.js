import './App.css';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import NewsSection from './components/news-section';
import SubscribeSection from './components/subscribe-section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <SubscribeSection />  
    </div>
  );
}

export default App;
