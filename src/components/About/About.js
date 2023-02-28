import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import "./About.css";
import aboutAnime from "../../assets/about_anime.gif";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className='section-container'>
			<Header
				heading=' About Me! '
				details=' Student | Enthusiatic Front End Developer who loves going into the depth of HOWs and WHYs.!'
			/>

			<div className='about-main'>
				<div className='about-main-left'>
					{/* sub-section 1 */}
					<p className='about-sub-head'>
						My name is Aditya Kumar, and I am a passionate front-end
						developer. I have always been fascinated by the
						intersection of technology and design, and my interest
						in creating visually stunning and user-friendly websites
						and applications led me to pursue a career in frontend
						development.
					</p>
					<p className='about-sub-head'>
						Currently, I am pursuing a Bachelor's degree in Computer
						Applications (BCA) to gain a deeper understanding of
						computer science concepts, programming languages, and
						software development. My goal is to continue to grow my
						knowledge and skills in the field of frontend
						development so that I can build better experiences for
						users.
					</p>
					<p className='about-sub-head'>
						As a self-taught developer, I have worked on several
						projects, all of which are currently deployed on the
						web. These projects have allowed me to showcase my
						skills in creating responsive layouts, implementing
						modern design trends, and optimizing website
						performance.
					</p>
					<p className='about-details'>
						<Link to='/skills' className='about-link-element'>
							check out my skills
						</Link>
					</p>
				</div>

				<div className='about-main-right'>
					<img
						src={aboutAnime}
						alt='aboutAnimeGif'
						className='about-anime'
					/>
				</div>
			</div>

			<FooterLink
				phrase=' check out my '
				link='projects!'
				toAdress='/projects'
			/>
		</div>
	);
};
export default About;
