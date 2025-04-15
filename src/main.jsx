import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Scroll from './Components/Scrollbar/SmoothScroll.jsx';
import { createContext, useState } from 'react';

// 1. Create the context
export const ScrollContext = createContext('light');

const Root = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  return (
    <StrictMode>
      <ScrollContext.Provider value={{ scrollHeight,setScrollHeight }}>
        <App />
      </ScrollContext.Provider>
    </StrictMode>
  );
};

// 2. Render it
createRoot(document.getElementById('root')).render(<Root />);
