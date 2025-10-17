import "./index.css";

export { ExternalWallets } from "@/components/ExternalWallets";
export { WalletProvider } from "@/components/WalletProvider";

export { useChainConnector } from "@/hooks/useChainConnector";
export { useWalletConnect } from "@/hooks/useWalletConnect";
export { useWidgetState } from "@/hooks/useWidgetState";
export { useAppKitBridge } from "@/hooks/useAppKitBridge";
export { useAppKitOpenListener } from "@/hooks/useAppKitOpenListener";

export { type ChainConfigArr } from "@/context/Chain.context";
export { useInscriptionProvider } from "@/context/Inscriptions.context";
export * from "@/context/State.context";

export { createExternalWallet } from "@/core";
export * from "@/core/types";
export { type ETHTypedData } from "@/core/wallets/eth/appkit/types";

// Export AppKit shared config helpers
export { setSharedWagmiConfig, getSharedWagmiConfig, hasSharedWagmiConfig } from "@/core/wallets/eth/appkit/sharedConfig";

// Export AppKit modal utilities
export {
    initializeAppKitModal,
    getAppKitModal,
    getAppKitWagmiConfig,
    hasAppKitModal,
    openAppKitModal,
    closeAppKitModal,
} from "@/core/wallets/eth/appkit/appKitModal";
