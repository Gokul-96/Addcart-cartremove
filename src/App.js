import NavbarComp from "./NavbarComp";

import HeaderComp from "./HeaderComp";

import SectionComp from "./SectionComp";

import FooterComp from './FooterComp';

import 'bootstrap/dist/css/bootstrap.css';







function App(props) {
  const { notes } = props;

 
  return (
      <div className="App">

         <NavbarComp/>

          <HeaderComp />

          <SectionComp notes={notes}/>

          <FooterComp />
      </div>
  );
}

export default App;
