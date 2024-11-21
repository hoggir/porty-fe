import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globals.css';
import type { AppProps } from "next/app";
import localFont from 'next/font/local';
import Layout from '@/components/Layout';

const jetBrains = localFont({
  src: '../../public/fonts/JetBrainsMono-Regular.ttf',
  variable: '--font-jetbrains-mono',
  weight: '400 700',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={jetBrains.variable}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}
