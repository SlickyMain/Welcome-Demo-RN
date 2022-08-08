import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const IconButton = ({
	name,
	size = 30,
	color = "#64ADC7",
	backgroundColor = "white",
	onPress,
}) => {
	const styles = StyleSheet.create({
		container: {
			width: 50,
			height: 50,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: backgroundColor,
			borderRadius: 50,
		},
	});

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Icon name={name} size={size} color={color} />
		</TouchableOpacity>
	);
};

export default IconButton;
