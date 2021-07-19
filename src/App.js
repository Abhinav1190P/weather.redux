import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './components/layout'
import Routes from './routes'
function App() {
  return (
    <div>
  <Layout> 

  <BrowserRouter>
  <Routes/>
  </BrowserRouter>

  </Layout>
    </div>
  );
}

export default App;
