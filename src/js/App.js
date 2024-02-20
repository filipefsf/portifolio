import '../estilos/App.css';
import Header from './Header';
import MainBannerPage from './MainBannerPage';
import SkillsBanner from './SkillsBanner';
import ProjectBanner from './ProjectBanner';
import Footer from './Footer';
import FadeIn from 'react-fade-in';

function App() {

  return (
    <div className="App">
      <Header />
      <MainBannerPage />
      <FadeIn delay={7000} transitionDuration={1000}><SkillsBanner/></FadeIn>
      <FadeIn delay={7300} transitionDuration={1000}><ProjectBanner /></FadeIn>
      <Footer />
    </div>
  );
}

export default App;
