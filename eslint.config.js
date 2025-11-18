import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import lintImport from 'eslint-plugin-no-relative-import-paths';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default [
	{ ignores: ['dist'] },
	{
		...reactPlugin.configs.flat.recommended,
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			'no-relative-import-paths': lintImport,
			'jsx-a11y': jsxA11y,
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'no-relative-import-paths/no-relative-import-paths': [
				'error',
				{ allowSameFolder: true, rootDir: 'src', prefix: '@' },
			],
			'jsx-a11y/alt-text': [
				'warn',
				{
					elements: ['img'],
				},
			],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'import/no-unresolved': [
				'error',
				{ commonjs: true, amd: true, ignore: ['\\?react$'] },
			],
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx', '.json', '.svg'],
				},
				node: {
					extensions: ['.js', '.jsx', '.json', '.svg'],
				},
			},
		},
	},
];
