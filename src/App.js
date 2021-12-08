import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './App.css';
import SimpleRoute from './components/simpleroute';
import Layout from './layout/Layout';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Layout>
            <SimpleRoute />
          </Layout>
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
