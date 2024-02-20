import '../estilos/App.css';
import Header from './Header';
import MainBannerPage from './MainBannerPage';
import SkillsBanner from './SkillsBanner';
import ProjectBanner from './ProjectBanner';
import Footer from './Footer';
import React from 'react';

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
