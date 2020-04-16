import { StyleSheet } from 'react-native';

import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: 64,
		backgroundColor: 'white',
		padding: 5,
		margin: 8,
		flexDirection: 'row'
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

export default styles;