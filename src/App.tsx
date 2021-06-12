import { Provider } from 'react-redux'
import './App.css'
import Create from './containers/create/Create';
import Home from './containers/home/Home'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Create />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
