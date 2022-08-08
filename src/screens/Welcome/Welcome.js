import {
	View,
	Text,
	StyleSheet,
	Animated,
	Dimensions,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react-native";
import loader from "../../assets/simple.json";
import RadialGradient from "react-native-radial-gradient";
import UsualButton from "../../components/UsualButton/UsualButton";
import { SharedElement } from "react-navigation-shared-element";

const Welcome = ({ navigation }) => {
	const width = Dimensions.get("window").width;
	const height = Dimensions.get("window").height;
	const [isLoading, setIsLoading] = useState(true);

	const textAnimation = [];
	const viewPosition = new Animated.Value(50);
	const earthAnimationValue = new Animated.Value(0),
		aboutAppValue = new Animated.Value(0),
		buttonsPanelValue = new Animated.Value(0);

	const brandName = "Slicky".split("");
	brandName.forEach((_, i) => {
		if (i) textAnimation[i] = new Animated.Value(0);
		else textAnimation[i] = new Animated.Value(1);
	});

	// simulate an query
	setTimeout(() => {
		setIsLoading(false);
		const lettersOpacity = brandName.map((_, i) => {
			return Animated.timing(textAnimation[i], {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			});
		});
		const earthAnim = Animated.timing(earthAnimationValue, {
			toValue: 1,
			duration: 72000,
			useNativeDriver: true,
		});
		const firstAnim = Animated.timing(viewPosition, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		});
		const secondAnim = Animated.stagger(100, lettersOpacity);
		Animated.sequence([firstAnim, secondAnim]).start();
		Animated.loop(earthAnim, {
			iterations: -1,
		}).start();
		const aboutApp = Animated.timing(aboutAppValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		});
		const buttons = Animated.timing(buttonsPanelValue, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		});
		Animated.sequence([aboutApp, buttons]).start();
	}, 1000);

	return (
		<View
			style={{
				width: width,
				height: height,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Animated.View
				style={{
					width: width,
					height: height,
					justifyContent: "center",
					alignItems: "center",
					zIndex: -1,
					transform: [
						{
							scale: textAnimation[1].interpolate({
								inputRange: [0, 1],
								outputRange: [10, 1],
							}),
						},
					],
				}}
			>
				<RadialGradient
					style={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
					colors={["#6CB9C4", "#4B9BC9", "#2A76C1"]}
					stops={[0.1, 0.4, 0.75]}
					center={[width / 2, height / 2 - 100]}
					radius={300}
				>
					<Animated.Image
						source={require("../../assets/earth.png")}
						style={{
							opacity: 0.1,
							height: height + 100,
							resizeMode: "contain",
							position: "absolute",
							transform: [
								{
									rotate: earthAnimationValue.interpolate({
										inputRange: [0, 1],
										outputRange: ["0deg", "360deg"],
									}),
								},
							],
						}}
					></Animated.Image>
				</RadialGradient>
			</Animated.View>
			<Animated.View
				style={[
					styles.main,
					{
						position: "absolute",
						transform: [{ translateX: viewPosition }],
					},
				]}
			>
				{brandName.map((item, index) => {
					return (
						<Animated.Text
							style={{
								fontSize: 40,
								fontWeight: "800",
								color: "white",
								paddingHorizontal: 2,
								opacity: textAnimation[index],
								transform: [
									{
										perspective: 100,
									},
									{
										scaleX: textAnimation[index],
									},
									{
										rotateY: textAnimation[
											index
										].interpolate({
											inputRange: [0, 1],
											outputRange: ["45deg", "0deg"],
										}),
									},
								],
							}}
							key={item}
						>
							{item}
						</Animated.Text>
					);
				})}
			</Animated.View>
			<Animated.View style={[styles.absolute, { paddingBottom: 75 }]}>
				{!!!isLoading && (
					<Animated.Text
						style={[
							styles.text,
							{
								opacity: aboutAppValue,
								transform: [
									{
										translateY: aboutAppValue.interpolate({
											inputRange: [0, 1],
											outputRange: [100, 0],
										}),
									},
								],
							},
						]}
					>
						This is my test app
					</Animated.Text>
				)}
			</Animated.View>
			{!!!isLoading && (
				<Animated.View
					style={[
						styles.absolute,
						styles.panel,
						{ opacity: buttonsPanelValue },
					]}
				>
					<SharedElement id="buttons">
						<UsualButton
							title="Login"
							backgroundColor="white"
							color="#5DAAC5"
							onPress={() => {
								navigation.navigate("Auth", {
									item: "buttons",
								});
							}}
						/>
					</SharedElement>
					<UsualButton
						title="Create account"
						backgroundColor="rgba(255, 255, 255, 0)"
					/>
				</Animated.View>
			)}
			<View style={styles.loading}>
				<Lottie
					source={loader}
					autoPlay
					loop
					style={{
						display: isLoading ? "flex" : "none",
					}}
				/>
			</View>
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
		paddingHorizontal: 30,
		paddingTop: 50,
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

export default Welcome;
