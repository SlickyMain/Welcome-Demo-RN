import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Welcome from "./src/screens/Welcome/Welcome";
import Auth from "./src/screens/Auth/Auth";

const Stack = createSharedElementStackNavigator();

const App = () => {
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
