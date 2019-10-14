import React from "react"

import "./css/profile.css"

const Kprofile = () =>{
	return(
		<div className="Korean">
			<strong>한국어</strong>
			<p>안녕하세요, 한국에 거주중인 2000년생 김남규 입니다.</p>
		</div>
	);
}

const Eprofile = () =>{
	return(
		<div className="English">
			<strong>English</strong>
			<p>Hello, I'm born in 2000 about in korea and my name is Kim NamGyu</p>
		</div>
	);
}

export{
 	Kprofile,
	 Eprofile,
}