import React from "react";
import ReactDOM, {render} from "react-dom";
import {BrowserRouter, Route } from "react-router-dom";

import App from "./App"
ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={App} />
	</BrowserRouter>,
	document.getElementById('main')
);