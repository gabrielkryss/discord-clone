import React from 'react';
import './ChannelBarChannel.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';


function ChannelBarChannel ( { id, channelName}: any) {
	const dispatch = useDispatch();

	return (
		<div 
			className="channelBarChannel" 
			onClick={() => 
				dispatch(
					setChannelInfo({
						channelId: id, 
						channelName: channelName,
					})
				)
			} 
		>
			<h4><span className="channelBarChannel__hash">#</span>{channelName}</h4>
		</div>
	);
}

export default ChannelBarChannel;