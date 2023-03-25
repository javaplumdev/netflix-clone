import React from 'react';
import NewReleases from './NewReleases';
import { rankingPosters } from '../../configs/mediaData';

const MediaContainer = () => {
	return (
		<div className="media__container__parent">
			<div className="media__container">
				{rankingPosters.map((item) => {
					return <NewReleases key={item.id} poster={item.mediaPoster} />;
				})}
			</div>
		</div>
	);
};

export default MediaContainer;
