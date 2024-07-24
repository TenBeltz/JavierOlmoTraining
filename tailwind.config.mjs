/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		extend: {
			colors: {
        'electric-lime': '#ccff00',
        'lime-zest': '#d9ff00',
        'vegan-mastermind': '#20cf46',
        'acid-pops': '#41ea67',
        'gray-fog': '#F1F5F9',
      },
      boxShadow: {
        'header-element': 'inset 0 0 10px 2px #c7c7c779'
      },
      height: {
        '88': '22rem'
      },
      width: {
        '84': '21rem'
      }
		},
	},
	plugins: [],
}
