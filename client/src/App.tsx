import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './routes/Home';
import CountryDetails from './routes/CountryDetails';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
