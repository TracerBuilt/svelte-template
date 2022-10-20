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
			white: 'rgb(248 250 251 / <alpha-value>)',
			black: 'rgb(18 18 16 / <alpha-value>)',
			grey: {
				0: 'rgb(248 250 251 / <alpha-value>)',
				1: 'rgb(242 244 246 / <alpha-value>)',
				2: 'rgb(235 237 239 / <alpha-value>)',
				3: 'rgb(224 228 229 / <alpha-value>)',
				4: 'rgb(209 214 216 / <alpha-value>)',
				5: 'rgb(177 182 185 / <alpha-value>)',
				6: 'rgb(151 155 157 / <alpha-value>)',
				7: 'rgb(126 130 130 / <alpha-value>)',
				8: 'rgb(102 105 104 / <alpha-value>)',
				9: 'rgb(80 81 79 / <alpha-value>)',
				10: 'rgb(58 58 55 / <alpha-value>)',
				11: 'rgb(37 37 33 / <alpha-value>)',
				12: 'rgb(18 18 16 / <alpha-value>)'
			},

			red: {
				0: 'rgb(255 245 245 / <alpha-value>)',
				1: 'rgb(255 227 227 / <alpha-value>)',
				2: 'rgb(255 201 201 / <alpha-value>)',
				3: 'rgb(255 168 168 / <alpha-value>)',
				4: 'rgb(255 135 135 / <alpha-value>)',
				5: 'rgb(255 107 107 / <alpha-value>)',
				6: 'rgb(250 82 82 / <alpha-value>)',
				7: 'rgb(240 62 62 / <alpha-value>)',
				8: 'rgb(224 49 49 / <alpha-value>)',
				9: 'rgb(201 42 42 / <alpha-value>)',
				10: 'rgb(176 37 37 / <alpha-value>)',
				11: 'rgb(150 32 32 / <alpha-value>)',
				12: 'rgb(125 26 26 / <alpha-value>)'
			},

			pink: {
				0: 'rgb(255 240 246 / <alpha-value>)',
				1: 'rgb(255 222 235 / <alpha-value>)',
				2: 'rgb(252 194 215 / <alpha-value>)',
				3: 'rgb(250 162 193 / <alpha-value>)',
				4: 'rgb(247 131 172 / <alpha-value>)',
				5: 'rgb(240 101 149 / <alpha-value>)',
				6: 'rgb(230 73 128 / <alpha-value>)',
				7: 'rgb(214 51 108 / <alpha-value>)',
				8: 'rgb(194 37 92 / <alpha-value>)',
				9: 'rgb(166 30 77 / <alpha-value>)',
				10: 'rgb(140 25 65 / <alpha-value>)',
				11: 'rgb(115 21 54 / <alpha-value>)',
				12: 'rgb(89 16 42 / <alpha-value>)'
			},

			purple: {
				0: 'rgb(248 240 252 / <alpha-value>)',
				1: 'rgb(243 217 250 / <alpha-value>)',
				2: 'rgb(238 190 250 / <alpha-value>)',
				3: 'rgb(229 153 247 / <alpha-value>)',
				4: 'rgb(218 119 242 / <alpha-value>)',
				5: 'rgb(204 93 232 / <alpha-value>)',
				6: 'rgb(190 75 219 / <alpha-value>)',
				7: 'rgb(174 62 201 / <alpha-value>)',
				8: 'rgb(156 54 181 / <alpha-value>)',
				9: 'rgb(134 46 156 / <alpha-value>)',
				10: 'rgb(112 38 130 / <alpha-value>)',
				11: 'rgb(90 30 105 / <alpha-value>)',
				12: 'rgb(68 23 79 / <alpha-value>)'
			},
			violet: {
				0: 'rgb(243 240 255 / <alpha-value>)',
				1: 'rgb(229 219 255 / <alpha-value>)',
				2: 'rgb(208 191 255 / <alpha-value>)',
				3: 'rgb(177 151 252 / <alpha-value>)',
				4: 'rgb(151 117 250 / <alpha-value>)',
				5: 'rgb(132 94 247 / <alpha-value>)',
				6: 'rgb(121 80 242 / <alpha-value>)',
				7: 'rgb(112 72 232 / <alpha-value>)',
				8: 'rgb(103 65 217 / <alpha-value>)',
				9: 'rgb(95 61 196 / <alpha-value>)',
				10: 'rgb(82 53 171 / <alpha-value>)',
				11: 'rgb(70 45 145 / <alpha-value>)',
				12: 'rgb(58 37 120 / <alpha-value>)'
			},
			indigo: {
				0: 'rgb(237 242 255 / <alpha-value>)',
				1: 'rgb(219 228 255 / <alpha-value>)',
				2: 'rgb(186 200 255 / <alpha-value>)',
				3: 'rgb(145 167 255 / <alpha-value>)',
				4: 'rgb(116 143 252 / <alpha-value>)',
				5: 'rgb(92 124 250 / <alpha-value>)',
				6: 'rgb(76 110 245 / <alpha-value>)',
				7: 'rgb(66 99 235 / <alpha-value>)',
				8: 'rgb(59 91 219 / <alpha-value>)',
				9: 'rgb(54 79 199 / <alpha-value>)',
				10: 'rgb(47 68 173 / <alpha-value>)',
				11: 'rgb(40 58 148 / <alpha-value>)',
				12: 'rgb(33 48 122 / <alpha-value>)'
			},
			blue: {
				0: 'rgb(231 245 255 / <alpha-value>)',
				1: 'rgb(208 235 255 / <alpha-value>)',
				2: 'rgb(165 216 255 / <alpha-value>)',
				3: 'rgb(116 192 252 / <alpha-value>)',
				4: 'rgb(77 171 247 / <alpha-value>)',
				5: 'rgb(51 154 240 / <alpha-value>)',
				6: 'rgb(34 139 230 / <alpha-value>)',
				7: 'rgb(28 126 214 / <alpha-value>)',
				8: 'rgb(25 113 194 / <alpha-value>)',
				9: 'rgb(24 100 171 / <alpha-value>)',
				10: 'rgb(20 85 145 / <alpha-value>)',
				11: 'rgb(17 70 120 / <alpha-value>)',
				12: 'rgb(13 55 94 / <alpha-value>)'
			},
			cyan: {
				0: 'rgb(227 250 252 / <alpha-value>)',
				1: 'rgb(197 246 250 / <alpha-value>)',
				2: 'rgb(153 233 242 / <alpha-value>)',
				3: 'rgb(102 217 232 / <alpha-value>)',
				4: 'rgb(59 201 219 / <alpha-value>)',
				5: 'rgb(34 184 207 / <alpha-value>)',
				6: 'rgb(21 170 191 / <alpha-value>)',
				7: 'rgb(16 152 173 / <alpha-value>)',
				8: 'rgb(12 133 153 / <alpha-value>)',
				9: 'rgb(11 114 133 / <alpha-value>)',
				10: 'rgb(9 92 107 / <alpha-value>)',
				11: 'rgb(7 70 82 / <alpha-value>)',
				12: 'rgb(5 48 56 / <alpha-value>)'
			},
			teal: {
				0: 'rgb(230 252 245 / <alpha-value>)',
				1: 'rgb(195 250 232 / <alpha-value>)',
				2: 'rgb(150 242 215 / <alpha-value>)',
				3: 'rgb(99 230 190 / <alpha-value>)',
				4: 'rgb(56 217 169 / <alpha-value>)',
				5: 'rgb(32 201 151 / <alpha-value>)',
				6: 'rgb(18 184 134 / <alpha-value>)',
				7: 'rgb(12 166 120 / <alpha-value>)',
				8: 'rgb(9 146 104 / <alpha-value>)',
				9: 'rgb(8 127 91 / <alpha-value>)',
				10: 'rgb(6 102 73 / <alpha-value>)',
				11: 'rgb(5 77 55 / <alpha-value>)',
				12: 'rgb(3 51 37 / <alpha-value>)'
			},
			green: {
				0: 'rgb(235 251 238 / <alpha-value>)',
				1: 'rgb(211 249 216 / <alpha-value>)',
				2: 'rgb(178 242 187 / <alpha-value>)',
				3: 'rgb(140 233 154 / <alpha-value>)',
				4: 'rgb(105 219 124 / <alpha-value>)',
				5: 'rgb(81 207 102 / <alpha-value>)',
				6: 'rgb(64 192 87 / <alpha-value>)',
				7: 'rgb(55 178 77 / <alpha-value>)',
				8: 'rgb(47 158 68 / <alpha-value>)',
				9: 'rgb(43 138 62 / <alpha-value>)',
				10: 'rgb(35 112 50 / <alpha-value>)',
				11: 'rgb(27 87 39 / <alpha-value>)',
				12: 'rgb(19 61 27 / <alpha-value>)'
			},

			lime: {
				0: 'rgb(244 252 227 / <alpha-value>)',
				1: 'rgb(233 250 200 / <alpha-value>)',
				2: 'rgb(216 245 162 / <alpha-value>)',
				3: 'rgb(192 235 117 / <alpha-value>)',
				4: 'rgb(169 227 75 / <alpha-value>)',
				5: 'rgb(148 216 45 / <alpha-value>)',
				6: 'rgb(130 201 30 / <alpha-value>)',
				7: 'rgb(116 184 22 / <alpha-value>)',
				8: 'rgb(102 168 15 / <alpha-value>)',
				9: 'rgb(92 148 13 / <alpha-value>)',
				10: 'rgb(76 122 11 / <alpha-value>)',
				11: 'rgb(60 97 9 / <alpha-value>)',
				12: 'rgb(44 71 6 / <alpha-value>)'
			},

			yellow: {
				0: 'rgb(255 249 219 / <alpha-value>)',
				1: 'rgb(255 243 191 / <alpha-value>)',
				2: 'rgb(255 236 153 / <alpha-value>)',
				3: 'rgb(255 224 102 / <alpha-value>)',
				4: 'rgb(255 212 59 / <alpha-value>)',
				5: 'rgb(252 196 25 / <alpha-value>)',
				6: 'rgb(250 176 5 / <alpha-value>)',
				7: 'rgb(245 159 0 / <alpha-value>)',
				8: 'rgb(240 140 0 / <alpha-value>)',
				9: 'rgb(230 119 0 / <alpha-value>)',
				10: 'rgb(179 92 0 / <alpha-value>)',
				11: 'rgb(128 66 0 / <alpha-value>)',
				12: 'rgb(102 53 0 / <alpha-value>)'
			},

			orange: {
				0: 'rgb(255 244 230 / <alpha-value>)',
				1: 'rgb(255 232 204 / <alpha-value>)',
				2: 'rgb(255 216 168 / <alpha-value>)',
				3: 'rgb(255 192 120 / <alpha-value>)',
				4: 'rgb(255 169 77 / <alpha-value>)',
				5: 'rgb(255 146 43 / <alpha-value>)',
				6: 'rgb(253 126 20 / <alpha-value>)',
				7: 'rgb(247 103 7 / <alpha-value>)',
				8: 'rgb(232 89 12 / <alpha-value>)',
				9: 'rgb(217 72 15 / <alpha-value>)',
				10: 'rgb(191 64 13 / <alpha-value>)',
				11: 'rgb(153 51 11 / <alpha-value>)',
				12: 'rgb(128 43 9 / <alpha-value>)'
			},

			choco: {
				0: 'rgb(255 248 220 / <alpha-value>)',
				1: 'rgb(252 225 188 / <alpha-value>)',
				2: 'rgb(247 202 158 / <alpha-value>)',
				3: 'rgb(241 178 128 / <alpha-value>)',
				4: 'rgb(233 155 98 / <alpha-value>)',
				5: 'rgb(223 133 69 / <alpha-value>)',
				6: 'rgb(212 110 37 / <alpha-value>)',
				7: 'rgb(189 95 27 / <alpha-value>)',
				8: 'rgb(164 81 23 / <alpha-value>)',
				9: 'rgb(138 69 19 / <alpha-value>)',
				10: 'rgb(112 58 19 / <alpha-value>)',
				11: 'rgb(87 47 18 / <alpha-value>)',
				12: 'rgb(61 33 13 / <alpha-value>)'
			},

			brown: {
				0: 'rgb(250 244 235 / <alpha-value>)',
				1: 'rgb(237 224 209 / <alpha-value>)',
				2: 'rgb(224 202 183 / <alpha-value>)',
				3: 'rgb(211 183 158 / <alpha-value>)',
				4: 'rgb(197 162 133 / <alpha-value>)',
				5: 'rgb(183 143 109 / <alpha-value>)',
				6: 'rgb(168 124 86 / <alpha-value>)',
				7: 'rgb(149 107 71 / <alpha-value>)',
				8: 'rgb(130 91 58 / <alpha-value>)',
				9: 'rgb(111 75 45 / <alpha-value>)',
				10: 'rgb(94 58 33 / <alpha-value>)',
				11: 'rgb(78 43 21 / <alpha-value>)',
				12: 'rgb(66 36 18 / <alpha-value>)'
			},

			sand: {
				0: 'rgb(248 250 251 / <alpha-value>)',
				1: 'rgb(230 228 220 / <alpha-value>)',
				2: 'rgb(213 207 189 / <alpha-value>)',
				3: 'rgb(194 185 160 / <alpha-value>)',
				4: 'rgb(174 165 140 / <alpha-value>)',
				5: 'rgb(154 145 120 / <alpha-value>)',
				6: 'rgb(134 124 101 / <alpha-value>)',
				7: 'rgb(115 106 83 / <alpha-value>)',
				8: 'rgb(95 87 70 / <alpha-value>)',
				9: 'rgb(75 70 57 / <alpha-value>)',
				10: 'rgb(56 53 45 / <alpha-value>)',
				11: 'rgb(37 37 33 / <alpha-value>)',
				12: 'rgb(18 18 16 / <alpha-value>)'
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
