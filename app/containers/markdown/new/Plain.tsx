import React from 'react';
import { Text } from 'react-native';
import { Plain as PlainProps } from '@rocket.chat/message-parser';

import styles from '../styles';
// import { useTheme } from '../../../theme';
// import { themes } from '../../../lib/constants';

interface IPlainProps {
	value: PlainProps['value'];
	checkauthor: any;
}

const Plain = ({ value, checkauthor }: IPlainProps) => {
	// const { theme } = useTheme();
	if (checkauthor === 'true') {
		return (
			<Text accessibilityLabel={value} style={[styles.plainText, { color: 'white' }]}>
				{value}
			</Text>
		);
	}
	return (
		<Text accessibilityLabel={value} style={[styles.plainText, { color: 'black' }]}>
			{value}
		</Text>
	);
};

export default Plain;
