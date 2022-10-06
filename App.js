import './App.css';
import Layout from './components/shared/Layout';
import Emp from './pages/Emp';
import AddEmp from './pages/AddEmp';
import { Route, Routes } from "react-router-dom";
import UpdateData from './pages/UpdateData';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Emp />} />
      </Routes>
      <Routes>
        <Route path="/employee-create" element={<AddEmp />} />
      </Routes>
      <Routes>
        <Route
          path="/employee-update/:id" 
          element={<UpdateData />}
        />
      </Routes>
    </Layout>
  );
}
export default App;