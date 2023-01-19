import React from 'react';
import { Button } from 'antd';
import './styles.css';
import smartblog from '../../assets/smartblog.png';
import { LogoText } from '../../commons';
import { Link } from 'react-router-dom';
import Slider from './slider';

const Header = () => {
	return (
		<div className='landing-header'>
			<div className="landing-image">
				<img src={smartblog} alt="smartblog" width={'50%'} height={'auto'} />
			</div>
			<div className="landing-content">
				<nav className='navbar'>
					<div className='nav-logo'>
						<LogoText size={50} />
					</div>
					<ul className='nav-links'>
						<Link to={'/'}>Home</Link>
						<Link to={'/blog'}>Blog</Link>
						<Link to={'/articles'}>Articles</Link>
						<Link to={'/settings'}>Settings</Link>
					</ul>
				</nav>
				<div className={'insider'}>
					{/* <div> */}
					<h1>Create, Read, & Explore Blogs </h1>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eius fugiat accusamus totam cum error, natus eum explicabo dolorem provident tempora corporis distinctio quibusdam velit vel incidunt est, odio harum.</p>
					{/* </div> */}
				</div>
				<div className='btns'>
					<Button className='premium-btn'>Upgrade to Premium</Button>
					<Button className='sigup-btn'>SignUp for free !</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;