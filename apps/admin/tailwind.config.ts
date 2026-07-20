import type { Config } from 'tailwindcss'
import sharedConfig from '../../packages/theme/tailwind.config'

const config: Config = {
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
}

export default config
