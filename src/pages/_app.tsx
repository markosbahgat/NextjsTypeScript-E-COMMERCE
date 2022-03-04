import '../styles/globals.scss'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app';
import {Provider} from 'react-redux';
import store from 'store';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/layout/layout.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
MyApp.getInitialProps =async (context:AppContext) => {
  const {ctx} = context;
  if(ctx.pathname === '/'){
    ctx.res?.writeHead(302, {
      Location: '/home',
      'Content-Type':'text/html; charset=utf-8',
    })
    ctx.res?.end();
  }
  return await App.getInitialProps(context);
}
export default MyApp;
