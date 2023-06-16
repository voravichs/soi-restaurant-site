import RootContainer from './components/RootContainer';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <RootContainer />
    </div>
  );
}

export default App;
