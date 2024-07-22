import "@/styles/globals.css";
import "@repo/ui/styles.css";
import App from 'next/app';
import type { AppProps } from "next/app";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "@/utils/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;