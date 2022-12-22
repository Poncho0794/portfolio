import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './sections/Home'
import Slogan from './sections/Slogan';
import WorkExperience from './sections/WorkExperience';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Slogan />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
