import React from 'react';
import logo from '../assets/logo.png';

const blockLogo = {
	display: 'inline-flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 10
};

const logoText = {
	fontFamily: 'Pacifico',
	color: '#002057',
	fontSize: '1.5em'
};

export const Logo = ({size}) => {
	return (
		<img src={logo} alt={'logo'} width={size}/>
	);
};
    
export const LogoText = ({size}) => {
	return (
		<span style={blockLogo}>
			<img src={logo} alt={'logo'} width={size}/>
			<span style={logoText}>Bloggerman</span>
		</span>
	);
};

