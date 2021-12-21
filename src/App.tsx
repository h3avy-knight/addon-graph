import { Card } from '@sparrow-marketing/storybook';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import AddonChart from './components/AddonChart';

function App() {
  return (
    <div className='app'>
      <Card>
        <Header />
        {/* <div> */}
        <Tabs />
        <AddonChart />
        {/* </div> */}
      </Card>
    </div>
  );
}

export default App;
