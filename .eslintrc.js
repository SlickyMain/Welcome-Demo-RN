module.exports = {
	root: true,
	extends: "@react-native-community",
	parser: "@typescript-eslint/parser",
	plugins: ["prettier"],
	rules: {
		indent: ["tab"],
		"prettier/prettier": [2, { useTabs: true, endOfLine: "auto" }],
		quotes: [2, "double", { avoidEscape: true }],
	},
};
