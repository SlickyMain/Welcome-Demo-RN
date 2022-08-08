import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Welcome from "./src/screens/Welcome/Welcome";
import Auth from "./src/screens/Auth/Auth";
import Orientation from 'react-native-orientation-locker';

const Stack = createSharedElementStackNavigator();

const App = () => {

	useEffect(() => {
		Orientation.lockToPortrait()
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen
					name="Auth"
					component={Auth}
					sharedElements={route => {
						const { item } = route.params;
						return [
							{
								id: `${item}`,
								animation: "move",
								resize: "stretch",
							},
						];
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
