import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
	js.configs.recommended,
	...astro.configs.recommended,
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astro.parser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
			},
		},
	},
	{
		ignores: ['dist/', '.astro/', 'node_modules/', 'public/', 'src/assets/'],
	},
];
