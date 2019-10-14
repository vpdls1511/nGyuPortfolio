import React from "react";
import "../css/main.css";
import Typing from 'react-typing-animation';

const Main = ({history}) => {
	return(
		<div className="main">
			<div className="imgFilter">
				<Typing speed={80}>
					<div className="ment">
						<p>상상하고 시도합니다.</p>
						<p>Imagine and try.</p>
					</div>
				</Typing>
			</div>
			<div className="backImg">
			</div>
			
		</div>
	);
}

export default Main;