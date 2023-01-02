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
        <main>
          <h2>oiasdasdassa</h2>
        </main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
