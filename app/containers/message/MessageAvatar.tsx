import React, { useContext } from 'react';
import { View } from 'react-native';

import Avatar from '../Avatar';
import styles from './styles';
import MessageContext from './Context';
import { IMessageAvatar } from './interfaces';
import { SubscriptionType } from '../../definitions';

const MessageAvatar = React.memo(
	({ isHeader, avatar, author, small, navToRoomInfo, emoji, getCustomEmoji, checkauthor }: IMessageAvatar) => {
		const { user } = useContext(MessageContext);
		const size = small ? 20 : 36;
		if (isHeader && author) {
			const navParam = {
				t: SubscriptionType.DIRECT,
				rid: author._id
			};
			return (
				<Avatar
					style={small ? styles.avatarSmall : styles.avatar}
					text={avatar ? '' : author.username}
					size={size}
					borderRadius={small ? 2 : 4}
					onPress={author._id === user.id ? undefined : () => navToRoomInfo(navParam)}
					getCustomEmoji={getCustomEmoji}
					avatar={avatar}
					emoji={emoji}
				/>
			);
		}
		if (checkauthor === 'true') {
			return <View style={{ width: size }}></View>;
		}
		return null;
	}
);

MessageAvatar.displayName = 'MessageAvatar';

export default MessageAvatar;
