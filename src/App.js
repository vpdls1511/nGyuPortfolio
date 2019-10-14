import React from "react";
import {render} from "react-dom";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SwitchWithSlide from "./SwitchWithSlide";

import Header from "./components/Header";
import Main from "./components/contents/Main"
import Intro from "./components/contents/Intro"
import Contact from "./components/contents/Contact"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends React.Component {
	
	state={
		animate : true
	}
	
	render(){
    const SwitchComponent = this.state.animate ? SwitchWithSlide : Switch;

		return(
				<Router>
					<div>
					<Header />
					<div>
						<SwitchComponent>
							<Switch style="height:100%">
								<Route exact path="/" component={Main} />
								<Route exact path="/intro" component={Intro} />
								<Route exact path="/contact" component={Contact} />
							</Switch>
						</SwitchComponent>
						
					</div>
				</div>
			</Router>
		);
	}
}

export default App;