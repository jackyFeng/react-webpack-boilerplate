import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import configureStore from './store/configureStore';
//import routes from './routes';
//import App from './components/App'

//const store = configureStore();

/* render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('index')
); */
console.log('loading index js');
const App = () => {
    return (
      <div>
        <h3>Our Application Is Alive</h3>
        <p>This isn’t reality. This — is fantasy.</p>
        <p>Yes I am quoting Star Trek I cant help it.</p>
      </div>
    );
  };
  
ReactDOM.render(<App />, document.getElementById('app'));