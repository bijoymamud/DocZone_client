import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:max-w-8xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
