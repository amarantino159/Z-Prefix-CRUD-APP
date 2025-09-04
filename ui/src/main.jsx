import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from "./components/UserProvider.jsx";

createRoot(document.getElementById('root')).render(
  // <StrictMode> // no idea if this one did anything
    <UserProvider>
      {/* context wrapper */}
      <App />
    </UserProvider>
  // </StrictMode>
)
