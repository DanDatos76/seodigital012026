import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Services from './components/services';
import Map from './components/map';
import ProcessSection from './components/processSection';
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

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero/>
              <Services />
              <Map />
               
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
        <Route path="/ia" element={<ArtificialIntelligencePage />} />
         <Route path="/cmasmas" element={<CPP />} />
         <Route path="/vuejs" element={<VueJS />} />
         <Route path="/agricultura" element={<Agriculture />} />
         <Route path="/braices" element={<RealEstatePage />} />
         <Route path="/automotriz" element={<Autom />} />   
         <Route path="/finanzas" element={<FinancePage />} />
         <Route path="/seguro" element={<SeguroPage />} />
         <Route path="/inmueble" element={<InmueblePage />} />
         <Route path="/telecomunicaciones" element={<TelecomunicacionesPage />} />
          <Route path="/construccion" element={<ConstruccionPage />} />
         <Route path="/fintech" element={<FintechPage />} />
         <Route path="/marketing" element={<MarketingPage />} />
         <Route path="/minorista" element={<Retail />} />
         <Route path="/transporte" element={<Transporte />} />
         <Route path="/aviacion" element={<AviacionPage />} />
         <Route path="/medios" element={<Medios />} />
         <Route path="/sanidad" element={<HealthcarePage />} />
         <Route path="/petroleo" element={<OilGasPage />} />
         <Route path="/suministro" element={<SupplyChainPage />} />
         <Route path="/viajes" element={<TravelHospitalityPage />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/our-work" element={<Works />} />
         <Route path="/backend" element={<BackendPage />} />
         <Route path="/iadev" element={<IadevPage />} />
         <Route path="/cms" element={<CmsPage />} />
         <Route path="/cripto" element={<CriptoPage />} />
         <Route path="/frontend" element={<FrontendPage />} />
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
         <Route path="/kotlin" element={< Kotlin />} />
         <Route path="reactjs" element={< ReactPage />} />
         <Route path="/php" element={< PHPPage />} />
         <Route path="/typescript" element={< TypeScriptPage />} />
         <Route path="/net" element={< DotNetPage />} />
         <Route path="powerbi" element={< PowerBIPage />} />
         <Route path="/gcloud" element={< GoogleCloudPage />} />
         <Route path="/aws" element={< AWSPage />} /> 
         <Route path="/java" element={< JavaPage />} />
         <Route path="/mlearning" element={<MachineLearningPage />} /> 
         <Route path="/azure" element={<AzurePage />} /> 
         <Route path="/salesforce" element={<SalesforcePage />} />
         <Route path="/trabajo" element={<ClientShowcase />} />
         <Route path="/nuestroslideres" element={<IndustrySection />} /> 
         <Route path="/tecnologicos" element={<VettingProcess />} />
         <Route path="/prensa" element={<PressReleases />} />
         <Route path="/contacto" element={<ContactHelp />} />
         <Route path="/faq" element={<FAQ />} />
         <Route path="/premios" element={<TrophyCabinet />} />
         <Route path="/certificaciones"  element={<CertifiedExpertise />} /> 
         <Route path="/trabajar" element={< CareersSEOdigital/>} /> 
         <Route path="/vacantes" element={<  OpenPositionsSEOdigital/>} /> 
         <Route path="/referidos" element={< ReferralSEOdigital/>} />
         <Route path="/cultura" element={< Culture/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
