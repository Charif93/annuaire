
import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <Header
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
      />

      <main>






      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );

};
export default App;
