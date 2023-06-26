import './App.css';
import { Helmet } from 'react-helmet';
import { AboutUs, FindUs, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
