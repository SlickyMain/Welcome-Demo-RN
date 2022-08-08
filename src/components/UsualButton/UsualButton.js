import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const UsualButton = ({
	onPress,
	title,
	fontSize = 14,
	color = "white",
	backgroundColor = "grey",
}) => {
	const styles = StyleSheet.create({
		container: {
			width: "100%",
			height: "100%",
			backgroundColor: backgroundColor,
			justifyContent: "center",
			alignItems: "center",
			marginBottom: 5,
			borderRadius: 10
		},
		text: {
			fontSize: fontSize,
			color: color,
			fontWeight: "700",
			letterSpacing: 2
		},
	});

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default UsualButton;
