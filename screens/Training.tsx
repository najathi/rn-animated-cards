import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Image, Text, UIManager, Platform, LayoutAnimation } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

import DetailCard from '../components/DetailCard';
import ListItems from '../components/ListItems';
import { TRAINING } from '../data/dummy-data';
import TouchableNative from '../components/TouchableNative';
import Fonts from '../constants/Fonts';

const { Value, timing, cond, eq, block, clockRunning, set, startClock, debug, Clock, stopClock } = Animated;

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Training = (props: any) => {

	const [indexToAnimate, setIndexToAnimate] = useState(-1);

	let heightRow: any = useRef(new Value(60));

	function runTiming(clock: any, value: any, dest: any) {
		const state = {
			finished: new Value(0),
			position: value, //from position given by value
			time: new Value(0),
			frameTime: new Value(0), //frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far)
		};

		const config = {
			duration: 500, //animation duration
			toValue: dest, //to position given by dest
			easing: Easing.inOut(Easing.cubic), //easing function
		};
		//block nodes can be used if we want to execute several nodes (commands) in a specific sequence
		return block([
			//check if clock is running already, if not we set variables and start clock
			cond(clockRunning(clock), 0, [
				//cond nodes are equivalent of if ... else
				set(state.finished, 0), //set nodes are equivalent of =
				set(state.time, 0),
				set(state.position, value),
				set(state.frameTime, 0),
				set(config.toValue, dest),
				startClock(clock),
			]),
			timing(clock, state, config), //here we start animation using timing which takes state and config variables
			// cond(!state.finished, debug('animation running')),
			cond(state.finished, debug('stop clock', stopClock(clock))), //if animation is finished ,we stop clock
			state.position, //return position of animated variable which will map to this.heightIncrease
		]);
	}

	const onPressButton = (item: any, index: number) => {
		if (indexToAnimate === -1) {
			return;
		}
		if (indexToAnimate === index) {
			heightRow.current = runTiming(new Clock(), new Value(60), new Value(260));
		} else {
			heightRow.current = runTiming(new Clock(), new Value(260), new Value(60));
		}
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
					<TouchableNative onPressed={() => { setIndexToAnimate(index), onPressButton(item, index), LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); }}>
						<View style={index == indexToAnimate ? styles.itemContainer : styles.listContainer}>
							<View style={index == indexToAnimate ? styles.ItemImageContainer : styles.imageContainer}>
								<Image
									fadeDuration={1000}
									source={{ uri: item.imageUri }}
									style={styles.image}
									resizeMode="cover" />
								{index == indexToAnimate && <AntDesign name="checkcircle" size={24} color="black" style={styles.icon} />}
							</View>
							<View style={index == indexToAnimate ? styles.itemTextContainer : styles.textContainer}>
								<Text style={index == indexToAnimate ? styles.itemHeading : styles.heading}>{item.title}</Text>
								<Text style={index == indexToAnimate ? styles.itemText : styles.text}>{item.desc}</Text>
							</View>
						</View>
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