import "@/client/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";

const isDevelopment = process.env.NODE_ENV !== "production";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
