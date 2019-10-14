import React from "react";
import "../css/intro.css";

import { Kprofile, Eprofile } from "./IntroContent/profile";

const Intro = ({history}) => {
	return(
		<div className="intro-me">
			<div className="profile">
				<sapn className="name">
					KIM <br/>
					<span>
						NamGyu
					</span>
				</sapn>
				<br/>
				<span className="birth">
					00.02.18 <p>MAN</p>
				</span>
				
				<hr/>
				<div className="pContent">
					<Kprofile/>
					<Eprofile/>
				</div>
				
			</div>
			
			<div className="award">
				  <sapn>
					  수상경력
					  <span>Award</span>
				</sapn>

2013.03 (13세) - 여수 삼일중학교 입학.<br/>
2015. 10 ~ 2016.02 (15~16세) - 여수정보과학 고등학교의 요청으로 포토샵과 웹 개발 교육을 받음.<br/>
2016.02 (16세) - 여수 삼일중학교 졸업.<br/>
2016.08 (16세) - 검정고시 합격.<br/>
2017.03 (17세) - 숭실대학교 전산원 정보보안학과 입학.<br/>
          ## 수상 경력 ##
2013년 (13세) 수료 - 전남 정보 영재 교육원 ( 프로그래밍 고급반 )<br/>
2014년 (14세) 수료 - 전남 정보 영재 교육원 ( 애니메이션 AS3.0 고급반 )<br/>

2014년 (14세) 은상 수상 - Smart 창의성 경진대회 ( 애니메이션 부분 교내 대회, AS2.0 언어 이용)<br/>

2014년 (14세) 동상수상 - Smart 창의성 경진대회 ( 애니메이션 부분 도 대회, AS2.0 언어 이용)<br/>

2014년 (14세) 최우수 수상 - 전남 정보 영재 교육원 캠프 우수 학생 상 ( 애니메이션 고급반 )<br/>

<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>

2015년 (15세) 은상 수상 - Smart 창의성 경진대회 ( 애니메이션 부분 교내 대회, AS2.0 언어 이용)<br/>

2015년 (15세) 은상 수상 - Smart 창의성 경진대회 ( 애니메이션 부분 도 대회, AS2.0 언어 이용)<br/>

2015년 (15세) 도 대회 은상 수상 - 정보 올림피아드 ( 공모 부분 , C#과 네이버 사전 API를 이용한백과사전 프로그램 )<br/>
			</div>
			
			<div className="profileImage">
				<div className="imgfilter" />
				<div className="img" />
			</div>
		</div>
	);
}

export default Intro;