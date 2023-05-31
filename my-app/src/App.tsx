import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/theme';
import { AppContainer } from './styles/App';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
