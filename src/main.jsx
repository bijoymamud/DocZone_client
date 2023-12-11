import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routers';
import AuthProvider from './providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import BookingProvider from './providers/BookingProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <BookingProvider>
      <QueryClientProvider client={queryClient}>
        <div className='md:max-w-8xl mx-auto'>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </div>
      </QueryClientProvider>
    </BookingProvider>
  </AuthProvider>
)
