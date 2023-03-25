import React, { useState } from 'react';

const NewReleases = ({ poster }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<div
			className="media__container__child"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img
				src={poster}
				className={
					isHover
						? 'media__landscape__container__img__onHover'
						: 'media__landscape__container__img'
				}
				alt=""
			/>
			<div className={isHover ? 'card__onHover' : 'card'}>
				<p>TANGINA</p>
			</div>
		</div>
	);
};

export default NewReleases;
