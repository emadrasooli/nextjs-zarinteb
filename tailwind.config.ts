import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
	"./src/**/*.{js,ts,jsx,tsx}",
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
			brand: {
				gold: 'hsl(var(--brand-gold))',
				'gold-hover': 'hsl(var(--brand-gold-hover))',
				'gold-light': 'hsl(var(--brand-gold-light))',
				navy: 'hsl(var(--brand-navy))',
				teal: 'hsl(var(--brand-teal))',
				'teal-light': 'hsl(var(--brand-teal-light))'
			}
		},
		borderRadius: {
			'3xl': '1.5rem',
			'2xl': '1rem',
			xl: '0.75rem',
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			full: '9999px'
		},
		boxShadow: {
			subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
			card: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
			elevated: '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
			glow: '0 0 25px -5px rgba(245, 158, 11, 0.2)'
		}
	}
  },
  plugins: [],
} satisfies Config;
