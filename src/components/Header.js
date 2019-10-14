import React from "react";
import ReactDOM,{Link} from "react-router-dom";

import './css/header.css';

var bgStyle;

class Header extends React.Component{	
	
	 
	state={
		bgColor:'',
	};

	home(e){
		document.getElementById('main').style.backgroundColor="#152238";
		this.setState((state , props)=>{
			return {bgColor:"#152238"};
		});
		this.forceUpdate();
	}

	intro(e){
		document.getElementById('main').style.backgroundColor="#49B09C";
		this.setState((state , props) =>{
			return {bgColor:"#49B09C"};
		});
		this.forceUpdate();
	}

	
	//49B09C
	
	render(){
		return(
			<div className="mainHeader" style={{ backgroundColor : this.state.bgColor }}>
				<div className="Logo">
					N
				</div>
				
				<nav>
					<Link className="nav-link" to="/" onClick={()=>this.home()}>
						<div id="homeIcon">
							<div className="roof"/>
							<div className="gate"/>
						</div>
					</Link>
					<Link className="nav-link" to="/intro" onClick={()=>this.intro()}>
						<div id="cardIcon">
							WHO
						</div>
					</Link>
					<Link className="nav-link" to="/contect" onClick={()=>this.intro()}>
						<div id="cardIcon">
							contect
						</div>
					</Link>
				</nav>
			</div>
		);
	}
	

}

export default Header;