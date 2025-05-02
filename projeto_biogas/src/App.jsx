import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes'; // Importando o arquivo de rotas

function App() {
  return (
    <BrowserRouter>
      <RoutesApp /> {/* Gerenciando as rotas */}
    </BrowserRouter>
  );
}

export default App;

