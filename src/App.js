import './App.css';
import TrackShipment from './pages/TrackShipment';
import Layout from './pages/Layout'
import MyThemeProvider from './theme';

function App() {
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
