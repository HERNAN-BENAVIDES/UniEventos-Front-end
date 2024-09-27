module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Incluye los archivos donde se usará Tailwind (HTML, TypeScript, etc.)
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
      },
    },
  },
  plugins: [],
}
