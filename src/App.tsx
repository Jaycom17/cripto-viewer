import Main from "./pages/Main";
import Exchanges from "./pages/Exchanges";
import Exchange from "./pages/Exchange";
import Crypto from "./pages/Crypto";
import Error404 from "./pages/Error404";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/crypto/:coinId" element={<Crypto />} />
            <Route path="/exchange/:exchangeId" element={<Exchange />} />
            <Route path="*" element={<Error404 />} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
