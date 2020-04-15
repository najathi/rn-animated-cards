import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Fonts from '../constants/Fonts';

const DetailCard = (props: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					fadeDuration={1000}
					source={{ uri: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
					style={styles.image}
					resizeMode="cover" />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.heading}>Posture Squats</Text>
				<Text style={styles.text}>20 Reps</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: 220,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 3,
		margin: 8
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageContainer: {
		width: '100%',
		height: 163,
		borderRadius: 5,
		overflow: 'hidden'
	},
	textContainer: {
		paddingVertical: 8,
		paddingHorizontal: 2
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

export default DetailCard;