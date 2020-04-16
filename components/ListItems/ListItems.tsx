import React from 'react';
import { View, Text, Image, } from 'react-native';

import TouchableNative from '../TouchableNative';
import styles from './ListItems-styles';

interface ListItemProps {
	index: number,
	title: string,
	desc: string,
	image: string,
	pressed: () => void,
	indexToAnimate: number
}

const ListItem = ({ index, title, desc, image, pressed, indexToAnimate }: ListItemProps) => {

	return (
		<TouchableNative onPressed={pressed}>
			<View style={index == indexToAnimate ? styles.itemContainer : styles.listContainer}>
				<View style={index == indexToAnimate ? styles.ItemImageContainer : styles.imageContainer}>
					<Image
						fadeDuration={1000}
						source={{ uri: image }}
						style={styles.image}
						resizeMode="cover" />
					{index == indexToAnimate && <Image style={styles.icon} source={require('../../assets/icons/tick.png')} />}
				</View>
				<View style={index == indexToAnimate ? styles.itemTextContainer : styles.textContainer}>
					<Text style={index == indexToAnimate ? styles.itemHeading : styles.heading}>{title}</Text>
					<Text style={index == indexToAnimate ? styles.itemText : styles.text}>{desc}</Text>
				</View>
			</View>
		</TouchableNative >
	);
};

export default ListItem;