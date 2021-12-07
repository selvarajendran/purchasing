import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import SimpleRoute from './components/simpleroute';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <SimpleRoute />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
