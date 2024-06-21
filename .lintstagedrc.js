module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['pnpm lint'],
  '*.{vue,ts}': [
    () => {
      return `vue-tsc --noEmit --skipLibCheck`
    },
  ],
}
