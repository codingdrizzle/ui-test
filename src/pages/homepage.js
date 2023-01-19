import React from 'react';
import Header from '../components/homepage/header';
import BlogCard from '../components/blog/card';
import { Row, Col } from 'antd';

const Homepage = () => {
	const userData = {
		name: 'Jack',
		username: 'jack_Chan23',
		message: 'What can i do to get someone\'s attention?'
	};
	return (
		<>
			<Header />
			<Row gutter={[20,20]} style={{padding: '70px'}}>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
				<Col xs={24} sm={12} md={6} lg={8}>
					<BlogCard data={userData}/>
				</Col>
			</Row>
		</>
	);
};

export default Homepage;