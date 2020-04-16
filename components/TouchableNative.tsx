import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View, StyleProp } from 'react-native';

interface TouchableNativeProps {
	children: ReactNode,
	onPressed: () => void,
	styleTouchable?: {}
}

const TouchableNative = ({ children, onPressed, styleTouchable }: TouchableNativeProps) => {

	let TouchableCmp: JSX.Element = (
		<TouchableNativeFeedback onPress={onPressed}>
			{children}
		</TouchableNativeFeedback>
	);

	if (Platform.OS === 'ios') {
		TouchableCmp = (
			<TouchableOpacity onPress={onPressed} activeOpacity={.9}>
				{children}
			</TouchableOpacity>
		);
	}

	return <View style={{ ...styleTouchable }}>{TouchableCmp}</View>;
}

export default TouchableNative;