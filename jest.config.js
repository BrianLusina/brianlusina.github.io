module.exports = {
	moduleFileExtensions: ['ts', 'tsx', "web.js", "mjs", "js", "json", "web.jsx", "jsx", "node"],
	collectCoverageFrom: [
		"src/**/*.{js,jsx,mjs}"
	],
	coveragePathIgnorePatterns: [
		"<rootDir>/build/",
		"<rootDir>/node_modules/",
		"<rootDir>/src/(Root.*.(js|jsx))",
		"<rootDir>/src/index.js",
		"<rootDir>/src/registerServiceWorker.js",
		"<rootDir>/src/*/{initialState.js}",
		"<rootDir>/src/*/*/[A-Za-z]+(P|p)rop.*.(js|jsx)",
		"<rootDir>/src/store/DevTools.js",
		"<rootDir>/src/store/configureStore.(prod|staging|dev).js",
		"<rootDir>/src/store/configureStore.js",
		"<rootDir>/src/store/middleware.js",
		"<rootDir>/src/store/historyConfig.js",
		"<rootDir>/src/store/persistConfig.js",
		"<rootDir>/src/*/endpoints.+\\.js$",
		"<rootDir>/src/api/constants.js",
		"<rootDir>/src/api/endpoints.js",
		"<rootDir>/src/actionTypes/",
		// "<rootDir>/src/containers/**/*(actionTypes|initialState|state).js",
	],
	setupFiles: [
		"<rootDir>/config/polyfills.js",
		// "<rootDir>/config/setupTests.js"
	],
	testMatch: [
		"<rootDir>/__tests__/**/*.{js,jsx,mjs}",
		"<rootDir>/?(*.)(spec|test).{js,jsx,mjs}",
		"<rootDir>/src/__tests__/**/*.{js,jsx,mjs}",
		"<rootDir>/src/**/*.test.{js,jsx,mjs}",
	],
	testEnvironment: "node",
	testURL: "http://localhost",
	transform: {
		"^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
		"^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
		"^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
	},
	// TODO: transform ignore patterns 
	transformIgnorePatterns: [
		"node_modules/(?!(gatsby)/)",
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
		// "<rootDir>/src/assets/",
		// "<rootDir>/node_modules/",
		// "node_modules/(?!(redux-persist|react-loader)/)",
	],
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
	globals: {
		__PATH_PREFIX__: '',
	},
	// TODO: add module mappers for stylsheets
	moduleNameMapper: {
		"^react-native$": "react-native-web",
		// "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		// "\\.(css|less|scss)$": "<rootDir>/src/assets/styles",
		// "\\.(css)$": "<rootDir>/node_modules/",
		// "\\.(png|jpg|svg)$": "<rootDir>/src/assets/images",
	},
	setupTestFrameworkScriptFile: "<rootDir>/config/setupTests.js"
}
