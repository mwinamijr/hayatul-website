import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import BaseLayout from "./containers/BaseLayout";
import ClassicFormPage from './containers/Register';

import BaseRouter from "./routes";

function App() {
  return (
    <Router>
	    <div className="App">
	    <Route exact path="/login/" component={ClassicFormPage} />
	      <div className="container">
	        <BaseLayout> 
	        	<BaseRouter />
	        </BaseLayout>

	      </div>
	    </div>
	  </Router>
  );
}

export default App;
