import { ButtonType } from './components/ButtonType';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/theme';
import { AppContainer } from './styles/App';
import { SideMenu } from './components/SideMenu';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <SideMenu />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
