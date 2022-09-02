const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize: {
			xs: 'var(--step--2)',
			sm: 'var(--step--1)',
			base: 'var(--step-0)',
			lg: 'var(--step-1)',
			xl: 'var(--step-2)',
			'2xl': 'var(--step-3)',
			'3xl': 'var(--step-4)',
			'4xl': 'var(--step-5)',
			'5xl': 'var(--step-6)',
			'6xl': 'var(--step-7)',
			'7xl': 'var(--step-8)',
			'8xl': 'var(--step-9)',
			'9xl': 'var(--step-10)'
		},

		colors: {
			white: '#f8fafb',
			black: '#121210',
			grey: {
				0: 'oklch(98.39% 0.003 228.78)',
				1: 'oklch(96.62% 0.003 247.86)',
				2: 'oklch(94.51% 0.003 247.86)',
				3: 'oklch(91.61% 0.005 214.33)',
				4: 'oklch(87.28% 0.006 223.46)',
				5: 'oklch(77.32% 0.007 233.67)',
				6: 'oklch(68.68% 0.005 228.86)',
				7: 'oklch(60.32% 0.005 197.03)',
				8: 'oklch(51.78% 0.004 174.36)',
				9: 'oklch(43.33% 0.003 128.55)',
				10: 'oklch(34.74% 0.005 106.66)',
				11: 'oklch(26.3% 0.007 106.89)',
				12: 'oklch(18.14% 0.004 106.79)'
			},

			red: {
				0: 'oklch(97.79% 0.0108 17.340)',
				1: 'oklch(93.87% 0.031 17.715)',
				2: 'oklch(88.34% 0.062 18.387)',
				3: 'oklch(81.69% 0.103 19.53)',
				4: 'oklch(75.63% 0.146 21.105)',
				5: 'oklch(71.16% 0.181 22.84)',
				6: 'oklch(67.06% 0.204 24.52)',
				7: 'oklch(63.24% 0.214 25.84)',
				8: 'oklch(59.28% 0.211 26.53)',
				9: 'oklch(54.57% 0.195 26.61)',
				10: 'oklch(49.57% 0.175 26.46)',
				11: 'oklch(44.25% 0.154 26.22)',
				12: 'oklch(38.87% 0.134 26.07)'
			},

			pink: {
				0: 'oklch(96.86% 0.018 351.142)',
				1: 'oklch(93.15% 0.04 352.16)',
				2: 'oklch(87.18% 0.071 355.09)',
				3: 'oklch(80.8% 0.11 357.15)',
				4: 'oklch(74.96% 0.147 358.8)',
				5: 'oklch(69.24% 0.177 1.25)',
				6: 'oklch(63.96% 0.197 3.19)',
				7: 'oklch(58.81% 0.201 5.25)',
				8: 'oklch(53.89% 0.193 6.48)',
				9: 'oklch(47.97% 0.172 6.83)',
				10: 'oklch(42.48% 0.151 6.38)',
				11: 'oklch(37.11% 0.129 5.58)',
				12: 'oklch(31.24% 0.106 4.62)'
			},

			purple: {
				0: 'oklch(96.48% 0.018 314.74)',
				1: 'oklch(91.65% 0.052 319.03)',
				2: 'oklch(86.3% 0.096 319.46)',
				3: 'oklch(79.04% 0.152 319.77)',
				4: 'oklch(72.52% 0.196 319.53)',
				5: 'oklch(66.95% 0.219 319.07)',
				6: 'oklch(62.39% 0.225 318.91)',
				7: 'oklch(57.83% 0.219 319.15)',
				8: 'oklch(53.33% 0.203 319)',
				9: 'oklch(47.83% 0.181 318.86)',
				10: 'oklch(42.1% 0.157 319.11)',
				11: 'oklch(36.25% 0.133 318.93)',
				12: 'oklch(30.21% 0.106 319.2)'
			},
			violet: {
				0: '#f3f0ff',
				1: '#e5dbff',
				2: '#d0bfff',
				3: '#b197fc',
				4: '#9775fa',
				5: '#845ef7',
				6: '#7950f2',
				7: '#7048e8',
				8: '#6741d9',
				9: '#5f3dc4',
				10: '#5235ab',
				11: '#462d91',
				12: '#3a2578'
			},
			indigo: {
				0: '#edf2ff',
				1: '#dbe4ff',
				2: '#bac8ff',
				3: '#91a7ff',
				4: '#748ffc',
				5: '#5c7cfa',
				6: '#4c6ef5',
				7: '#4263eb',
				8: '#3b5bdb',
				9: '#364fc7',
				10: '#2f44ad',
				11: '#283a94',
				12: '#21307a'
			},
			blue: {
				0: '#e7f5ff',
				1: '#d0ebff',
				2: '#a5d8ff',
				3: '#74c0fc',
				4: '#4dabf7',
				5: '#339af0',
				6: '#228be6',
				7: '#1c7ed6',
				8: '#1971c2',
				9: '#1864ab',
				10: '#145591',
				11: '#114678',
				12: '#0d375e'
			},
			cyan: {
				0: '#e3fafc',
				1: '#c5f6fa',
				2: '#99e9f2',
				3: '#66d9e8',
				4: '#3bc9db',
				5: '#22b8cf',
				6: '#15aabf',
				7: '#1098ad',
				8: '#0c8599',
				9: '#0b7285',
				10: '#095c6b',
				11: '#074652',
				12: '#053038'
			},
			teal: {
				0: '#e6fcf5',
				1: '#c3fae8',
				2: '#96f2d7',
				3: '#63e6be',
				4: '#38d9a9',
				5: '#20c997',
				6: '#12b886',
				7: '#0ca678',
				8: '#099268',
				9: '#087f5b',
				10: '#066649',
				11: '#054d37',
				12: '#033325'
			},
			green: {
				0: '#ebfbee',
				1: '#d3f9d8',
				2: '#b2f2bb',
				3: '#8ce99a',
				4: '#69db7c',
				5: '#51cf66',
				6: '#40c057',
				7: '#37b24d',
				8: '#2f9e44',
				9: '#2b8a3e',
				10: '#237032',
				11: '#1b5727',
				12: '#133d1b'
			},

			lime: {
				0: '#f4fce3',
				1: '#e9fac8',
				2: '#d8f5a2',
				3: '#c0eb75',
				4: '#a9e34b',
				5: '#94d82d',
				6: '#82c91e',
				7: '#74b816',
				8: '#66a80f',
				9: '#5c940d',
				10: '#4c7a0b',
				11: '#3c6109',
				12: '#2c4706'
			},

			yellow: {
				0: '#fff9db',
				1: '#fff3bf',
				2: '#ffec99',
				3: '#ffe066',
				4: '#ffd43b',
				5: '#fcc419',
				6: '#fab005',
				7: '#f59f00',
				8: '#f08c00',
				9: '#e67700',
				10: '#b35c00',
				11: '#804200',
				12: '#663500'
			},

			orange: {
				0: '#fff4e6',
				1: '#ffe8cc',
				2: '#ffd8a8',
				3: '#ffc078',
				4: '#ffa94d',
				5: '#ff922b',
				6: '#fd7e14',
				7: '#f76707',
				8: '#e8590c',
				9: '#d9480f',
				10: '#bf400d',
				11: '#99330b',
				12: '#802b09'
			},

			choco: {
				0: '#fff8dc',
				1: '#fce1bc',
				2: '#f7ca9e',
				3: '#f1b280',
				4: '#e99b62',
				5: '#df8545',
				6: '#d46e25',
				7: '#bd5f1b',
				8: '#a45117',
				9: '#8a4513',
				10: '#703a13',
				11: '#572f12',
				12: '#3d210d'
			},

			brown: {
				0: '#faf4eb',
				1: '#ede0d1',
				2: '#e0cab7',
				3: '#d3b79e',
				4: '#c5a285',
				5: '#b78f6d',
				6: '#a87c56',
				7: '#956b47',
				8: '#825b3a',
				9: '#6f4b2d',
				10: '#5e3a21',
				11: '#4e2b15',
				12: '#422412'
			},

			sand: {
				0: '#f8fafb',
				1: '#e6e4dc',
				2: '#d5cfbd',
				3: '#c2b9a0',
				4: '#aea58c',
				5: '#9a9178',
				6: '#867c65',
				7: '#736a53',
				8: '#5f5746',
				9: '#4b4639',
				10: '#38352d',
				11: '#252521',
				12: '#121210'
			}
		},

		extend: {
			fontFamily: {
				serif: ['adobe-caslon-pro', ...defaultTheme.fontFamily.serif],
				sans: ['p22-underground', ...defaultTheme.fontFamily.sans],
				'sans-sc': ['p22-underground-sc', 'p22-underground', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('tailwindcss-opentype')]
}
