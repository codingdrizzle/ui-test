import { Avatar } from 'antd';
import React, {useState} from 'react';
import './styles.css';
import user from '../../assets/user.jpg';
import { Logo } from '../../commons';
import { FaRegComment, FaRegStar, FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';

const BlogCard = ({data}) => {

	const d = new Date(Date.now());
	const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun','Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const date = `${months[d.getMonth()]} ${d.getMonth()}`;
	const time = `${d.getHours()}:${d.getMinutes()}`;

	const [review, setReview] = useState(false);
	const [likes, setLikes] = useState(false);
	const [likesValue, setLikesValue] = useState(0);

	function handleReview () {setReview(!review);}
	const handleLikes = () => {
		if (likes) {
			setLikes(false);
			setLikesValue(likesValue - 1);
		} else {
			setLikes(true);
			setLikesValue(likesValue + 1);
		}
	};
	return (
		<div className='blog-card'>
			<div className='labels'>
				<div className='user-label'>
					<Avatar size={'large'} src={user} />
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<b>{data.name}</b>
						<span>@{data.username.toLowerCase()}</span>
					</div>
				</div>
				<div className='logo-label'>
					<Logo size={30} />
				</div>
			</div>
			<div>
				{data.message}
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', flex: 0.5 }}>
					<span className='post-icon'><FaRegComment/> 7</span>
					<span className='post-icon'>{review ? <FaStar onClick={handleReview} color={'#d6a400'}/> : <FaRegStar onClick={handleReview}/>} 4</span>
					<span className='post-icon'>{likes ? <FaHeart onClick={handleLikes} color={'#ff004c'} /> : <FaRegHeart onClick={handleLikes} />} {likesValue}</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 0.5 }}>
					<strong style={{color: '#bbb'}}>{date} &nbsp;{time}</strong>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;