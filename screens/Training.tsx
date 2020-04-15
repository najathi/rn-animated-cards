import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import DetailCard from '../components/DetailCard';
import ListItems from '../components/ListItems';
import { TRAINING } from '../data/dummy-data';

const Training = (props: any) => {
	return (
		<View style={styles.screen}>
			<FlatList
				data={TRAINING}
				keyExtractor={item => item.id.toString()}
				renderItem={(itemData) => (
					<ListItems
						key={itemData.item.id}
						title={itemData.item.title}
						desc={itemData.item.desc}
						image={itemData.item.imageUri} />
				)} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default Training;