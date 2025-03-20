import './styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<AppRoutes />
			<Toaster />
		</HelmetProvider>
	</StrictMode>
);
