// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<BrowserRouter>
		{/* <ThemeProvider defaultTheme="dark" storageKey="theme"> */}
			<App />
		{/* </ThemeProvider> */}
	</BrowserRouter>
	// </StrictMode>,
)
