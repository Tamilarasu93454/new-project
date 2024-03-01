
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';


function App() {
  
const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/register' element={<Register /> } />
      </Routes>
      </Router>
    </div>
    </ ThemeProvider>
  );

}

export default App;
