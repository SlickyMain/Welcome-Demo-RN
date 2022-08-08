import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

const LoginForm = ({ handleUser, handlePassword, user, password }) => {
	const FormField = ({ text, icon, secure, handle, value }) => {
		const [formText, setText] = useState("");

		const styles = StyleSheet.create({
			icon: {
				position: "absolute",
				right: 0,
			},
			input: {
				borderBottomWidth: 2,
				fontSize: 24,
			},
		});
		return (
			<View style={{ marginVertical: 10 }}>
				<Text style={{ textAlign: "center" }}>{text}</Text>
				<View style={{ justifyContent: "center" }}>
					<TextInput
						defaultValue={value}
						onChangeText={newText => {
							setText(newText);
						}}
						onSubmitEditing={handle}
						style={styles.input}
						secureTextEntry={secure}
					/>
					<Icon
						name={icon}
						size={25}
						color={"black"}
						style={styles.icon}
					/>
				</View>
			</View>
		);
	};

	return (
		<View style={{ width: "100%", paddingHorizontal: 50 }}>
			<FormField
				key={"1"}
				text={"Account ID, email or phone number"}
				icon="user"
				handle={handleUser}
				value={user}
			/>
			<FormField
				key={"2"}
				text={"Your password"}
				icon="lock"
				secure
				handle={handlePassword}
				value={password}
			/>
		</View>
	);
};

export default LoginForm;
