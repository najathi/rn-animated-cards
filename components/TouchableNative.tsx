import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View } from 'react-native';

const TouchableNative = (props: any) => {

	let TouchableCmp: JSX.Element = (
		<TouchableNativeFeedback onPress={props.onPressed}>
			{props.children}
		</TouchableNativeFeedback>
	);

	if (Platform.OS === 'ios') {
		TouchableCmp = (
			<TouchableOpacity onPress={props.onPressed} activeOpacity={.9}>
				{props.children}
			</TouchableOpacity>
		);
	}

	return <View style={{ ...props.style }}>{TouchableCmp}</View>;
}

export default TouchableNative;