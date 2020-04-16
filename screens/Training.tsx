import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert, Image, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

import DetailCard from '../components/DetailCard';
import ListItems from '../components/ListItems';
import { TRAINING } from '../data/dummy-data';
import TouchableNative from '../components/TouchableNative';
import Fonts from '../constants/Fonts';

const { timing } = Animated;

const Training = (props: any) => {

	const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
	const [indexToAnimate, setIndexToAnimate] = useState(-1);

	const onPressButton = (item: any) => {
		if (indexToAnimate === -1) {
			return;
		}
		timing(fadeAnim, {
			toValue: 0,
			duration: 500,
			easing: Easing.ease,
		}).start();
	}

	return (
		<View style={styles.screen}>
			{/* <FlatList
				data={TRAINING}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item, index }) => (
					<ListItems
						key={item.id}
						title={item.title}
						desc={item.desc}
						image={item.imageUri}
						pressed={onPressButton(index)}
						index={index} />
				)} /> */}
			<FlatList
				data={TRAINING}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item, index }) => (
					<TouchableNative onPressed={() => { setIndexToAnimate(index), onPressButton(item) }}>
						<Animated.View style={index == indexToAnimate ? styles.itemContainer : styles.listContainer}>
							<Animated.View style={index == indexToAnimate ? styles.ItemImageContainer : styles.imageContainer}>
								<Image
									fadeDuration={1000}
									source={{ uri: item.imageUri }}
									style={styles.image}
									resizeMode="cover" />
								{index == indexToAnimate && <AntDesign name="checkcircle" size={24} color="black" style={styles.icon} />}
							</Animated.View>
							<Animated.View style={index == indexToAnimate ? styles.itemTextContainer : styles.textContainer}>
								<Animated.Text style={index == indexToAnimate ? styles.itemHeading : styles.heading}>{item.title}</Animated.Text>
								<Animated.Text style={index == indexToAnimate ? styles.itemText : styles.text}>{item.desc}</Animated.Text>
							</Animated.View>
						</Animated.View>
					</TouchableNative >
				)
				} />
		</View >
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	listContainer: {
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
		overflow: 'hidden'
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
	},
	itemContainer: {
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
	ItemImageContainer: {
		width: '100%',
		height: 163,
		borderRadius: 5,
		overflow: 'hidden',
		flexDirection: 'row',
		alignItems: "flex-end",
		justifyContent: 'flex-end'
	},
	itemTextContainer: {
		paddingVertical: 8,
		paddingHorizontal: 2
	},
	itemHeading: {
		fontFamily: Fonts.MontserratSemiBold,
		fontSize: 14,
		marginBottom: 3
	},
	itemText: {
		fontFamily: Fonts.MontserratLight,
		fontSize: 10
	},
	icon: {
		position: 'absolute',
		color: '#37b284',
		padding: 5
	}
});

export default Training;