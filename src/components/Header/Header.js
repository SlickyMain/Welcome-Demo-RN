import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconButton from "../IconButton/IconButton";

const Header = ({ header, description, goBack }) => {
	return (
		<View style={styles.container}>
			<IconButton name={"arrowleft"} onPress={goBack} />
			<View style={styles.textView}>
				<Text style={styles.headerText}>{header}</Text>
				<Text style={styles.descText}>{description}</Text>
			</View>
			<IconButton name={"customerservice"} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 20,
		justifyContent: "space-around",
		alignItems: "center",
	},
	textView: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	headerText: {
		fontSize: 28,
		fontWeight: "800",
		color: "black",
	},
	descText: {
		fontSize: 20,
		color: "black",
	},
});

export default Header;
