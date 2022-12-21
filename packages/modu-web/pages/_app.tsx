import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";
import { Suspense } from "react";

export interface PageCommonProps {
  pagePath: string;
}

function MyApp({ Component, pageProps }: AppProps<PageCommonProps>) {
  console.log(pageProps);
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<div>loading....</div>}>
        <Component {...pageProps} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default MyApp;
