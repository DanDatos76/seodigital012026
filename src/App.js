import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Header from './components/header';
import Footer from './components/footer';
import PageTransition from './components/PageTransition';
import LoadingOverlay from './components/LoadingOverlay';
import Hero from './components/hero';
import Services from './components/services';
import Map from './components/map';
import ProcessSection from './components/processSection';
import TeamSection from './components/TeamSection';
import About from './components/about'; // 👈 ojo con la mayúscula
import Django from './components/django';
import CSharp from './components/csharp';
import Angular from './components/angular';
import Python from './components/python';
import Agriculture from './components/indusriaModel';
 
 import SeguroPage from './components/seguro';
import InmueblePage from './components/inmueble';
import TelecomunicacionesPage from './components/telecomunicaciones';
import ConstruccionPage from './components/construccion';
import FintechPage from './components/fintech';
import MarketingPage from './components/marketing';
 
import AviacionPage from './components/aviacion';
 
import BlogPage from './components/blogpage';
import Works from './components/ourWork';
import BackendPage from './components/backend';
 
import IadevPage from './components/iadev';
import CmsPage from './components/cms';
import CriptoPage from './components/cripto';
import FrontendPage from './components/frontend';
 import QatestingPage from './components/qatesting';
import UxuiPage from './components/uxui';
import BackupPage from './components/backup';
import BigdataPage from './components/bigdata';
import CloudPage from './components/cloud';
import CybersecurityPage from './components/cybersecurity';
import DevopsPage from './components/devops';
import ErpPage from './components/erpDevelopment';
import TransformacionDigitalPage from './components/tdigital';
import NodeJS from './components/node';
 import Golang from './components/goexpert';
import CPP from './components/cms';
import VueJS from './components/vuej';
import BankingPage from './components/bancaria';
import FinancePage from './components/finanzas';
import RealEstatePage from './components/braices';
import Autom from './components/automotriz';
import Retail from './components/retail';
import Transporte from './components/transporte';
import Medios from './components/medios';
import HealthcarePage from './components/sanitaria';
import OilGasPage from './components/petrolero';
import SupplyChainPage from './components/suministro';
import TravelHospitalityPage from './components/viajes';
import Kotlin from './components/kotlin';
import ReactPage from './components/reactjs';
import PHPPage from './components/php';
import TypeScriptPage from './components/typescript';
import DotNetPage from './components/net';
import PowerBIPage from './components/powerbi';
import GoogleCloudPage from './components/gcloud';
import AWSPage from './components/aws';
import JavaPage from './components/java';
import MachineLearningPage from './components/mlearnig';
import ArtificialIntelligencePage from './components/ia';
import AzurePage from './components/azure';
import SalesforcePage from './components/salesforce';
import ClientShowcase from './components/trabajo';
import IndustrySection from './components/nuestroslideres';
import VettingProcess from './components/tecnologicos';
import PressReleases from './components/prensa';
import ContactHelp from './components/contacto';
import FAQ from './components/faq';
import TrophyCabinet from './components/premios';
import CertifiedExpertise from './components/certificados';
import CareersSEOdigital from './components/trabajar';
import OpenPositionsSEOdigital from './components/vacantes';
import ReferralSEOdigital from './components/referidos';
import Culture from './components/cultura';
import CookiesPolicy from './components/cookies';
import AvisoLegalSEOdigital from './components/avisolegal';

// Componente interno para manejar las rutas animadas
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <LoadingOverlay />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Hero/>
                <Services />
                <TeamSection />
                <Map />
                <ProcessSection />
              </PageTransition>
            } 
          />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/go-experts" element={<PageTransition><Golang /></PageTransition>} />
          <Route path="/django" element={<PageTransition><Django /></PageTransition>} />
          <Route path="/csharp" element={<PageTransition><CSharp /></PageTransition>} />
          <Route path="/angular" element={<PageTransition><Angular /></PageTransition>} />
          <Route path="/python" element={<PageTransition><Python /></PageTransition>} />
          <Route path="/node" element={<PageTransition><NodeJS /></PageTransition>} />
          <Route path="/ia" element={<PageTransition><ArtificialIntelligencePage /></PageTransition>} />
          <Route path="/cmasmas" element={<PageTransition><CPP /></PageTransition>} />
          <Route path="/vuejs" element={<PageTransition><VueJS /></PageTransition>} />
          <Route path="/agricultura" element={<PageTransition><Agriculture /></PageTransition>} />
          <Route path="/braices" element={<PageTransition><RealEstatePage /></PageTransition>} />
          <Route path="/automotriz" element={<PageTransition><Autom /></PageTransition>} />   
          <Route path="/finanzas" element={<PageTransition><FinancePage /></PageTransition>} />
          <Route path="/seguro" element={<PageTransition><SeguroPage /></PageTransition>} />
          <Route path="/inmueble" element={<PageTransition><InmueblePage /></PageTransition>} />
          <Route path="/telecomunicaciones" element={<PageTransition><TelecomunicacionesPage /></PageTransition>} />
          <Route path="/construccion" element={<PageTransition><ConstruccionPage /></PageTransition>} />
          <Route path="/fintech" element={<PageTransition><FintechPage /></PageTransition>} />
          <Route path="/marketing" element={<PageTransition><MarketingPage /></PageTransition>} />
          <Route path="/minorista" element={<PageTransition><Retail /></PageTransition>} />
          <Route path="/transporte" element={<PageTransition><Transporte /></PageTransition>} />
          <Route path="/aviacion" element={<PageTransition><AviacionPage /></PageTransition>} />
          <Route path="/medios" element={<PageTransition><Medios /></PageTransition>} />
          <Route path="/sanidad" element={<PageTransition><HealthcarePage /></PageTransition>} />
          <Route path="/petroleo" element={<PageTransition><OilGasPage /></PageTransition>} />
          <Route path="/suministro" element={<PageTransition><SupplyChainPage /></PageTransition>} />
          <Route path="/viajes" element={<PageTransition><TravelHospitalityPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/our-work" element={<PageTransition><Works /></PageTransition>} />
          <Route path="/backend" element={<PageTransition><BackendPage /></PageTransition>} />
          <Route path="/iadev" element={<PageTransition><IadevPage /></PageTransition>} />
          <Route path="/cms" element={<PageTransition><CmsPage /></PageTransition>} />
          <Route path="/cripto" element={<PageTransition><CriptoPage /></PageTransition>} />
          <Route path="/frontend" element={<PageTransition><FrontendPage /></PageTransition>} />
          <Route path="/qatesting" element={<PageTransition><QatestingPage /></PageTransition>} />
          <Route path="/uxui" element={<PageTransition><UxuiPage /></PageTransition>} />
          <Route path="/backup" element={<PageTransition><BackupPage /></PageTransition>} />
          <Route path="/bigdata" element={<PageTransition><BigdataPage /></PageTransition>} />
          <Route path="/cloud" element={<PageTransition><CloudPage /></PageTransition>} />
          <Route path="/cyberseguridad" element={<PageTransition><CybersecurityPage /></PageTransition>} />
          <Route path="/devops" element={<PageTransition><DevopsPage /></PageTransition>} />
          <Route path="/erp" element={<PageTransition><ErpPage /></PageTransition>} />
          <Route path="/tdigital" element={<PageTransition><TransformacionDigitalPage /></PageTransition>} />
          <Route path="/banca" element={<PageTransition><BankingPage /></PageTransition>} />
          <Route path="/kotlin" element={<PageTransition><Kotlin /></PageTransition>} />
          <Route path="reactjs" element={<PageTransition><ReactPage /></PageTransition>} />
          <Route path="/php" element={<PageTransition><PHPPage /></PageTransition>} />
          <Route path="/typescript" element={<PageTransition><TypeScriptPage /></PageTransition>} />
          <Route path="/net" element={<PageTransition><DotNetPage /></PageTransition>} />
          <Route path="powerbi" element={<PageTransition><PowerBIPage /></PageTransition>} />
          <Route path="/gcloud" element={<PageTransition><GoogleCloudPage /></PageTransition>} />
          <Route path="/aws" element={<PageTransition><AWSPage /></PageTransition>} /> 
          <Route path="/java" element={<PageTransition><JavaPage /></PageTransition>} />
          <Route path="/mlearning" element={<PageTransition><MachineLearningPage /></PageTransition>} /> 
          <Route path="/azure" element={<PageTransition><AzurePage /></PageTransition>} /> 
          <Route path="/salesforce" element={<PageTransition><SalesforcePage /></PageTransition>} />
          <Route path="/trabajo" element={<PageTransition><ClientShowcase /></PageTransition>} />
          <Route path="/nuestroslideres" element={<PageTransition><IndustrySection /></PageTransition>} /> 
          <Route path="/tecnologicos" element={<PageTransition><VettingProcess /></PageTransition>} />
          <Route path="/prensa" element={<PageTransition><PressReleases /></PageTransition>} />
          <Route path="/contacto" element={<PageTransition><ContactHelp /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/premios" element={<PageTransition><TrophyCabinet /></PageTransition>} />
          <Route path="/certificaciones"  element={<PageTransition><CertifiedExpertise /></PageTransition>} /> 
          <Route path="/trabajar" element={<PageTransition><CareersSEOdigital/></PageTransition>} /> 
          <Route path="/vacantes" element={<PageTransition><OpenPositionsSEOdigital/></PageTransition>} /> 
          <Route path="/referidos" element={<PageTransition><ReferralSEOdigital/></PageTransition>} />
          <Route path="/cultura" element={<PageTransition><Culture/></PageTransition>} />
          <Route path="/cookies" element={<PageTransition><CookiesPolicy/></PageTransition>} />
          <Route path="/legal" element={<PageTransition><AvisoLegalSEOdigital /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
