import React, { useState } from 'react';
import { View, StyleSheet, FlatList, UIManager, Platform, LayoutAnimation } from 'react-native';

import ListItems from '../components/ListItems/ListItems';
import { TRAINING } from '../data/dummy-data';

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Training = (props: any) => {

	const [indexToAnimate, setIndexToAnimate] = useState(-1);

	return (
		<View style={styles.screen}>
			<FlatList
				data={TRAINING}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item, index }) => (
					<ListItems
						key={item.id}
						title={item.title}
						desc={item.desc}
						image={item.imageUri}
						pressed={() => { setIndexToAnimate(index), LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); }}
						index={index}
						indexToAnimate={indexToAnimate} />
				)
				} />
		</View >
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default Training;