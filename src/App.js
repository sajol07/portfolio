import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';

import Blog from './Pages/Blog/Blog';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import Profile from './Pages/Home/Profile';
import KazoliDas from './Pages/KazoliDas/KazoliDas';
import MyProject from './Pages/MyProject/MyProject';
import Navbar from './Pages/Navbar/Navbar';
import BookArchive from './Pages/ProjectDetails/BookArchive/BookArchive';
import IMac from './Pages/ProjectDetails/IMac/IMac';
import JSONUniversity from './Pages/ProjectDetails/JSONUniversity/JSONUniversity';
import TraveAgency from './Pages/ProjectDetails/TravelAgency/TraveAgency';
import Thanks from './Pages/Thanks/Thanks';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar></Navbar>
            <Switch> 
              <Route exact path ="/">
                <Profile></Profile>
              </Route>
              <Route path="/home">
                <Profile></Profile>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route path="/allProjects">
               <MyProject></MyProject>
              </Route>
              <Route path="/contactme">
                <ContactMe></ContactMe>
              </Route>
              <Route path="/aboutme">
                <AboutMe></AboutMe>
              </Route>
              <Route path="/kazoli-das">
                <KazoliDas></KazoliDas>
              </Route>
              <Route path="/thanks">
                <Thanks></Thanks>
              </Route>
              <Route path="/book-archive">
                <BookArchive></BookArchive>
              </Route>
              <Route path="/json-university">
                <JSONUniversity></JSONUniversity>
              </Route>
              <Route path="/travel-agency">
                <TraveAgency></TraveAgency>
              </Route>
              <Route path="/imac">
                <IMac></IMac>
              </Route>
            </Switch>
          <Footer></Footer>
      </BrowserRouter>
      

     
    </div>
  );
}

export default App;
