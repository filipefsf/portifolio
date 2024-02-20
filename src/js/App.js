import '../estilos/App.css';
import Header from './Header';
import MainBannerPage from './MainBannerPage';
import SkillsBanner from './SkillsBanner';
import ProjectBanner from './ProjectBanner';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <MainBannerPage />
      <SkillsBanner />
      <ProjectBanner />
      <Footer />
    </div>
  );
}

export default App;
