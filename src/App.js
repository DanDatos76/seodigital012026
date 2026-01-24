import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Map from './components/Map';
import FeaturedSlider from './components/FeaturedSlider';
import ProcessSection from './components/ProcessSection';
import About from './components/about'; // 👈 ojo con la mayúscula
import GoExpertsPage from './components/Goexpert'; // 👈 ojo con el nombre
import Django from './components/Django';
import CSharp from './components/Csharp';
import Angular from './components/Angular';
import Python from './components/Python';
import Agriculture from './components/IndusriaModel';
 
import FinanzasPage from './components/Finanzas';
import SeguroPage from './components/Seguro';
import InmueblePage from './components/Inmueble';
import TelecomunicacionesPage from './components/Telecomunicaciones';
import AutomotrizPage from './components/Automotor';
import ConstruccionPage from './components/Construccion';
import FintechPage from './components/Fintech';
import MarketingPage from './components/Marketing';
import MinoristaPage from './components/Pormenor';
import TransportePage from './components/Transporte';
import AviacionPage from './components/Aviacion';
import DiversionPage from './components/Diversion';
import SanidadPage from './components/Sanitaria';
import PetroleroPage from './components/Petrolero';
import SuministroPage from './components/Suministro';
import ViajesPage from './components/Viajes';
import BlogPage from './components/Blogpage';
import Works from './components/OurWork';
import BackendPage from './components/Backend';
import IadePage from './components/Iadev';
import IadevPage from './components/Iadev';
import CmsPage from './components/Cms';
import CriptoPage from './components/Cripto';
import FrontendPage from './components/Frontend';
import MlearningPage from './components/Mlearning';
import QatestingPage from './components/Qatesting';
import UxuiPage from './components/Uxui';
import BackupPage from './components/Backup';
import BigdataPage from './components/Bigdata';
import CloudPage from './components/Cloud';
import CybersecurityPage from './components/Cybersecurity';
import DevopsPage from './components/Devops';
import ErpPage from './components/ErpDevelopment';
import TransformacionDigitalPage from './components/tdigital';
import NodeJS from './components/Node';
import IADevelopment from './components/Iasection';
import Golang from './components/Goexpert';
import CPP from './components/Cms';
import VueJS from './components/Vuej';
import BankingPage from './components/bancaria';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services />
              <Map />
              <FeaturedSlider />
              <ProcessSection />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/go-experts" element={<Golang />} />
        <Route path="/django" element={<Django />} />
        <Route path="/csharp" element={<CSharp />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/python" element={<Python />} />
        <Route path="/node" element={<NodeJS />} />
        <Route path="/iasection" element={<IADevelopment />} />
         <Route path="/cmasmas" element={<CPP />} />
         <Route path="/vuejs" element={<VueJS />} />
         <Route path="/agricultura" element={<Agriculture />} />
         
         
         <Route path="/finanzas" element={<FinanzasPage />} />
         <Route path="/seguro" element={<SeguroPage />} />
         <Route path="/inmueble" element={<InmueblePage />} />
         <Route path="/telecomunicaciones" element={<TelecomunicacionesPage />} />
         <Route path="/automotor" element={<AutomotrizPage />} />
         <Route path="/construccion" element={<ConstruccionPage />} />
         <Route path="/fintech" element={<FintechPage />} />
         <Route path="/marketing" element={<MarketingPage />} />
         <Route path="/minorista" element={<MinoristaPage />} />
         <Route path="/transporte" element={<TransportePage />} />
         <Route path="/aviacion" element={<AviacionPage />} />
         <Route path="/diversion" element={<DiversionPage />} />
         <Route path="/sanidad" element={<SanidadPage />} />
         <Route path="/petroleo" element={<PetroleroPage />} />
         <Route path="/suministro" element={<SuministroPage />} />
         <Route path="/viajes" element={<ViajesPage />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/our-work" element={<Works />} />
         <Route path="/backend" element={<BackendPage />} />
         <Route path="/iadev" element={<IadevPage />} />
         <Route path="/cms" element={<CmsPage />} />
         <Route path="/cripto" element={<CriptoPage />} />
         <Route path="/frontend" element={<FrontendPage />} />
         <Route path="/mlearning" element={<MlearningPage />} />
         <Route path="/qatesting" element={<QatestingPage />} />
         <Route path="/uxui" element={<UxuiPage />} />
         <Route path="/backup" element={<BackupPage />} />
         <Route path="/bigdata" element={<BigdataPage />} />
         <Route path="/cloud" element={<CloudPage />} />
         <Route path="/cyberseguridad" element={<CybersecurityPage />} />
         <Route path="/devops" element={<DevopsPage />} />
         <Route path="/erp" element={<ErpPage />} />
         <Route path="/tdigital" element={<TransformacionDigitalPage />} />
         <Route path="/python" element={<Python />} />
         <Route path="/banca" element={< BankingPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
