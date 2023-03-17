module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:import/recommended",
	],
	"plugins": [
		"svelte3",
	],
	"overrides": [
		{
			"files": ["*.svelte"],
			"processor": "svelte3/svelte3"
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"linebreak-style": ["warn", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["warn", "always"],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"import/no-unresolved": ["error", { "ignore": ["^[^.]"] }],
		"import/order": [
			"warn", {
				"groups": ["builtin", "external", "object", "type", "internal", "parent", "sibling", "index",],
				"alphabetize": { "order": "asc", "caseInsensitive": true, },
			},
		]
	},
};
