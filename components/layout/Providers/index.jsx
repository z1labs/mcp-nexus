"use client";

import React from "react";
import { Provider } from "react-redux";
import { WagmiProvider } from "wagmi";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { store } from "@/store";
import { config } from "@/logic/wagmi/config";
import { wallets, endpoint } from "@/logic/solwalletadapter/config";

export default function Providers({ children }) {
  const queryClient = new QueryClient();

  const network = WalletAdapterNetwork.Mainnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const wallets = useMemo(
  //   () => [new BackpackWalletAdapter(), new PhantomWalletAdapter()],
  //   [network]
  // );

  return (
    <SessionProvider>
      <Provider store={store}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </Provider>
    </SessionProvider>
  );
}
