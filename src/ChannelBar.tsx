import React, { useState, useEffect } from 'react';
import './ChannelBar.css';
import ChannelBarChannel from './ChannelBarChannel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import CallIcon from '@material-ui/icons/Call';
import CallEndIcon from '@material-ui/icons/CallEnd';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import db, { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function ChannelBar() {
	const user = useSelector(selectUser);

	const [ channels, setChannels ] = useState<any[]>([]);

	useEffect( () => {
		db.collection('channels').onSnapshot( (snapshot: any) => 
			setChannels(
				snapshot.docs.map( (doc: any) => ({
					id: doc.id,
					channel: doc.data(),
				}))
			)
		);
	}, []);

	const handleAddChannel = () => {
		const channelName = prompt("Enter a new channel name");

		if (channelName) {
			db.collection("channels").add({
				channelName: channelName,
			});
		}
	}

	return (
		<div className="channelBar">
			<div className="channelBar__top">
				<h3>Discord Clone</h3>
				<ExpandMoreIcon />
			</div>

			<div className="channelBar__channels">
				<div className="channelBar__channelsHeader">
					<div className="channelBar__header">
						<ExpandMoreIcon />
						<h4>Text Channels</h4>
					</div>

					<AddIcon onClick={handleAddChannel} className="channelBar__addChannel" />
				</div>

				<div className="channelBar__channelList">
					{
						channels.map( ({ id, channel }) => (
							<ChannelBarChannel key={id} id={id} channelName={channel.channelName} />
						))
					}
				</div>
			</div>

			<div className="channelBar__voice">
				<SignalCellularAltIcon 
					className="channelBar__voiceSignalIcon"
					fontSize="large"
				/>

				<div className="channelBar__voiceStatus">
					<h3>Voice Connected</h3>
					<p>Voice Channel Name</p>
				</div>

				{/* try replace voice info with a custom icon */}
				<div className="channelBar__voiceInfoIcon">
					<InfoOutlinedIcon />
				</div> 

				<div className="channelBar__voiceDisconnectIcon">
					<CallEndIcon />
				</div>
			</div>

			<div className="channelBar__userProfile">
				<Avatar onClick={ () => auth.signOut() } src={user.photo} />

				<div className="channelBar__userProfileInfo">
					<h3>{user.displayName}</h3>
					<p>#{user.uid.substring(0, 5)}</p>
				</div>

				<div className="channelBar__userProfileMuteIcon">
					<MicIcon />
				</div>

				<div className="channelBar__userProfileDeafenIcon">
					<HeadsetIcon />
				</div>

				<div className="channelBar__userProfileSettingsIcon">
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
}

export default ChannelBar;
