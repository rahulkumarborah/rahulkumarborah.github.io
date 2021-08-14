import './App.css';
import '@fontsource/roboto';

import Blogs from './containers/Blogs';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import { headerSections } from './constants';

function App() {
  return (
    <div className="App">
      <Header title="Rahul Kumar Borah" sections={headerSections} />
      <Container maxWidth="lg" className="Main-container">
        <Blogs />
      </Container>
    </div>
  );
}

export default App;
