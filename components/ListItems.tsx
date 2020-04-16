import React, { useState, useRef } from 'react';
import {
	View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Animated from 'react-native-reanimated';
import { onGestureEvent, useTransition } from 'react-native-redash';

import Fonts from '../constants/Fonts';
import TouchableNative from '../components/TouchableNative';

const ListItem = (props: any) => {

	const [indexToAnimate, setIndexToAnimate] = useState(null);

	return (
		<TouchableNative onPressed={() => { setIndexToAnimate(props.index), props.pressed }}>
			<Animated.View style={[styles.container, { opacity: props.index == indexToAnimate ? 0 : 1 }]}>
				<View style={styles.imageContainer}>
					<Image
						fadeDuration={1000}
						source={{ uri: props.image }}
						style={styles.image}
						resizeMode="cover" />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.heading}>{props.title}</Text>
					<Text style={styles.text}>{props.desc}</Text>
				</View>
			</Animated.View>
		</TouchableNative >
	);
};

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: 64,
		backgroundColor: 'white',
		padding: 5,
		margin: 8,
		flexDirection: 'row'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageContainer: {
		width: 80,
		height: 56,
		borderRadius: 3,
		overflow: 'hidden',
	},
	textContainer: {
		paddingVertical: 8,
		paddingHorizontal: 10
	},
	heading: {
		fontFamily: Fonts.MontserratSemiBold,
		fontSize: 14,
		marginBottom: 3
	},
	text: {
		fontFamily: Fonts.MontserratLight,
		fontSize: 10
	}
});

export default ListItem;