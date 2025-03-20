import './styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster, type ToasterProps } from 'react-hot-toast';
import AppRoutes from './routes';

const toasterProps: ToasterProps = {
	toastOptions: {
		style: {
			border: '1px solid #00300b',
			color: '#ffffff',
			backgroundColor: '#00300b',
		},
	},
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<AppRoutes />
			<Toaster {...toasterProps} />
		</HelmetProvider>
	</StrictMode>
);
