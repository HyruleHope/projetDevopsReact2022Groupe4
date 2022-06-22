import React from "react";
import "../../styles/LandingV1.css";
import rim from "../../assets/rim.png";
import ferrari from "../../assets/ferrari.png";

const LandingV1 = () => {
	return (
		<div className="main-div">
			<div className="header">
				<div className="header-left">
					<h2>Auto.</h2>
				</div>
				<div className="header-right">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
			<div className="orange-main">
				<div className="transparent-text">
					<h1 className="transparent-text-heading">
						<span className="tt-span-one">AU</span>
						<span className="tt-span-two">TO</span>
					</h1>
				</div>
				<div className="orange-diag"></div>
				<div className="orange-subsec1">
					<h1 className="head-main">
						<span className="head-left">AUT</span>
						<img className="rim" src={rim} alt="" />
						<span className="head-right">MOT0</span>
					</h1>
					<p>Venez découvrir nos activités !</p>
				</div>
				<div className="readmore">
					<p>SCROLL FOR MORE</p>
				</div>
				<div className="ferrari">
					<img className="rim" src={ferrari} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LandingV1;
