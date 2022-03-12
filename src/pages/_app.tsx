import React from 'react';
import '../styles/globals.scss'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app';
import {Provider} from 'react-redux';
import store, {persistor} from 'store';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/layout/layout.component';
import nookies, {parseCookies} from 'nookies';
import { PersistGate } from 'redux-persist/integration/react';
import {useRouter} from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const cookies = parseCookies();
  React.useEffect(() => {
    if(router.pathname === '/products' && !cookies.authUser){
      router.push('/login')
    }
    else if(router.pathname === '/login' && cookies.authUser){
      router.push('/home')
    }
    else if (router.pathname === '/'){
      router.push('/home')
    }
  }, [router])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </PersistGate>
    </Provider>
  )
}
MyApp.getInitialProps = async (context:AppContext) => {
  const {ctx} = context;
  const cookies = nookies.get(ctx);
  if(ctx.pathname === '/' && cookies.authUser){
    ctx.res?.writeHead(302, {
      Location: '/home',
      'Content-Type':'text/html; charset=utf-8',
    })
    ctx.res?.end();
  }
  else if(ctx.pathname === '/' || ctx.pathname === '/home' && !cookies.authUser){
    ctx.res?.writeHead(302, {
      Location: '/login',
      'Content-Type':'text/html; charset=utf-8',
    })
    ctx.res?.end();
  }
  return await App.getInitialProps(context);
}
export default MyApp;
