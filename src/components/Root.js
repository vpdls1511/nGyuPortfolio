import React, {Component} from "react";

import Header from './Header'


export default class Root extends Component {
	render(){
		return(
			<div className="container">
				<div className="header">
					<Header />
				</div>
				<div className="contnets">
					{this.props.children}
				</div>
			</div>
		);
	}
}