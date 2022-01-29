import './App.css';
import TrackShipment from './pages/TrackShipment';
import Layout from './pages/Layout'
import MyThemeProvider from './theme';
import AppContextProvider from 'context';

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <MyThemeProvider>
          <Layout>
            <TrackShipment />
          </Layout>
        </MyThemeProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
