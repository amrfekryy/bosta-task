import './App.css';
import TrackShipment from './pages/TrackShipment';
import Layout from './pages/Layout'
import MyThemeProvider from './theme';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation()
  i18n.changeLanguage('ar')
  console.log('i18n', i18n);
  return (
    <div className="App">
      <MyThemeProvider>
        <Layout>
          <TrackShipment />
        </Layout>
      </MyThemeProvider>
    </div>
  );
}

export default App;
