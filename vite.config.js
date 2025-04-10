// Importing the defineConfig function from Vite for configuration
import { defineConfig } from 'vite'
// Importing the react plugin for Vite
import react from '@vitejs/plugin-react'

// Exporting the vite configuration object
// https://vitejs.dev/config/
export default defineConfig({
 // Specifying plugins to use, including the React plugin
  plugins: [react()],
// Configuring the development server
  server: {
    // Specifying the port to run the server on
    port: 3000,
    open: true // Automatically opening the app in the default browser
  }
})