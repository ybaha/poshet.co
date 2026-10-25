import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
  	colors: {
  		primary: 'rgb(var(--color-primary) / <alpha-value>)',
  		secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
  		foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
  		background: 'rgb(var(--color-background) / <alpha-value>)',
  		'background-tertiary': 'rgb(var(--color-background-tertiary) / <alpha-value>)',
  		border: 'rgb(var(--color-border) / <alpha-value>)',
  		input: 'rgb(var(--color-input) / <alpha-value>)',
            ...colors
  	},
  	screens: {
  		xs: '390px',
  		sm: '435px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	},
  	extend: {
  		animation: {
  			reveal: 'reveal 0.7s ease-in-out',
  			'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
  			'fade-in': 'fade-in 0.25s ease-out both',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-studio-body)',
  				'Geist',
                    ...defaultTheme.fontFamily.sans
                ],
  			display: [
  				'var(--font-studio-display)',
  				'var(--font-studio-body)',
                    ...defaultTheme.fontFamily.sans
                ],
  			mono: [
  				'Jetbrains Mono',
                    ...defaultTheme.fontFamily.mono
                ],
  			serif: [
  				'Cormorant Garamond',
                    ...defaultTheme.fontFamily.serif
                ]
  		},
  		keyframes: {
  			'fade-up': {
  				from: { opacity: '0', transform: 'translateY(14px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			reveal: {
  				'0%': {
  					opacity: 0,
  					filter: 'brightness(1) blur(15px)',
  					scale: '1.0125'
  				},
  				'10%': {
  					opacity: 1,
  					filter: 'brightness(1.25) blur(10px)'
  				},
  				'100%': {
  					opacity: 1,
  					filter: 'brightness(1) blur(0)',
  					scale: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		fontSize: {
  			display: ['clamp(2.5rem, 1.2rem + 5.2vw, 6.25rem)', { lineHeight: '1.02', letterSpacing: '-0.045em' }],
  			title: ['clamp(2.5rem, 1.6rem + 3.2vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
  			section: ['clamp(2.125rem, 1.7rem + 1.5vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.04em' }],
  			statement: ['clamp(1.75rem, 1.25rem + 1.9vw, 3rem)', { lineHeight: '1.14', letterSpacing: '-0.035em' }],
  			card: ['clamp(1.375rem, 1.2rem + 0.5vw, 1.625rem)', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
  			lead: ['clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem)', { lineHeight: '1.45', letterSpacing: '-0.015em' }],
  		},
  		lineHeight: {
  			slacker: '1.75'
  		},
  		gridTemplateRows: {
  			'max-1': 'repeat(1, minmax(0, max-content))'
  		},
  		height: {
  			'dynamic-screen': '100dvh'
  		},
  		minHeight: {
  			'dynamic-screen': '100dvh'
  		},
  		maxHeight: {
  			'dynamic-screen': '100dvh'
  		},
  		boxShadow: {
  			card: '0 1px 2px rgb(14 40 93 / 0.04), 0 12px 32px -16px rgb(14 40 93 / 0.22)',
  			'card-hover': '0 1px 2px rgb(14 40 93 / 0.05), 0 24px 48px -20px rgb(14 40 93 / 0.32)',
  		},
  		borderRadius: {
  			panel: '2.5rem',
  			card: '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			studio: {
  				blue: '#1556D6',
  				'blue-deep': '#0F3FA0',
  				navy: '#0E285D',
  				ink: '#06122B',
  				ice: '#F0F8FF',
  				canvas: '#F7F7F7',
  				surface: '#FFFFFF',
  				muted: '#526074',
  				line: '#DCE4EF',
  				sky: '#A9C8FF',
  				cyan: '#00DDFF',
  				deep: '#00061F',
  				void: '#00001A',
  			},
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
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
