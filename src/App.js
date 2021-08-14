import './App.css';
import '@fontsource/roboto';

import Blogs from './components/Blogs';
import Header from './components/Header';
import { headerSections } from './constants';

function App() {
  return (
    <div className="App">
      <Header title="Rahul Kumar Borah" sections={headerSections} />
      <Blogs />
    </div>
  );
}

export default App;
