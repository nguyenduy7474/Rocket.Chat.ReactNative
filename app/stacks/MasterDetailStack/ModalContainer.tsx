import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainerProps } from '@react-navigation/core';

import sharedStyles from '../../views/Styles';
import { themes } from '../../lib/constants';
import { TSupportedThemes } from '../../theme';

interface IModalContainer extends NavigationContainerProps {
	navigation: StackNavigationProp<any>;
	children: React.ReactNode;
	theme: TSupportedThemes;
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	backdrop: {
		...StyleSheet.absoluteFillObject
	}
});

export const ModalContainer = ({ navigation, children, theme }: IModalContainer): JSX.Element => (
	<View style={[styles.root, { backgroundColor: `${themes[theme].backdropColor}70` }]}>
		<TouchableWithoutFeedback onPress={() => navigation.pop()}>
			<View style={styles.backdrop} />
		</TouchableWithoutFeedback>
		<View
			style={{
				...sharedStyles.modalFormSheet,
				width: Dimensions.get('window').width,
				height: Dimensions.get('window').height - 50
				// height: modalHeight > height ? height : modalHeight
			}}>
			{children}
		</View>
	</View>
);
