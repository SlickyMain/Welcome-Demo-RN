import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Animated,
	StyleSheet,
	Text,
} from "react-native";
import React, { useState } from "react";
import SharedElement from "react-navigation-shared-element/build/SharedElement";
import UsualButton from "../../components/UsualButton/UsualButton";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";

const Auth = ({ navigation }) => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const handleUser = user => {
		setUser(user.nativeEvent.text);
	};
	const handlePassword = password => {
		setPassword(password.nativeEvent.text);
	};

	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				alignItems: "center",
				backgroundColor: "lightblue",
			}}
		>
			<View
				style={{
					width: "100%",
					alignSelf: "center",
					justifyContent: "center",
				}}
			>
				<Header
					header={"Auth"}
					description="Enter into your account"
					goBack={() => {
						navigation.goBack();
					}}
				/>
			</View>
			<LoginForm
				handleUser={handleUser}
				handlePassword={handlePassword}
				user={user}
				password={password}
			/>
			<Animated.View style={[styles.panel]}>
				<SharedElement
					id="buttons"
					style={{ bottom: 0, width: "100%", height: "100%" }}
				>
					<UsualButton
						title="Login"
						backgroundColor="white"
						color="#5DAAC5"
					/>
				</SharedElement>
			</Animated.View>
			<Text>{`User: ${user}`}</Text>
			<Text>{`Password: ${password}`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		paddingBottom: 160,
		flexDirection: "row",
	},
	absolute: {
		position: "absolute",
	},
	panel: {
		width: "100%",
		maxHeight: 150,
		paddingHorizontal: 30,
		paddingTop: 50,
		marginBottom: 50,
		paddingBottom: 50,
	},
	text: {
		fontSize: 22,
		color: "white",
		fontWeight: "500",
	},
	loading: {
		justifyContent: "flex-start",
		position: "absolute",
		width: "100%",
		height: 200,
		marginBottom: 100,
		zIndex: 5,
		bottom: 0,
	},
});

export default Auth;
