import suietLogo from "./assets/suiet-logo.svg";
import "./App.css";
import {
  ConnectButton,
  useAccountBalance,
  useWallet,
  SuiChainId,
  ErrorCode,
  formatSUI,
  useSuiClient,
} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { Transaction } from "@mysten/sui/transactions";
import { useMemo } from "react";

// Define contract addresses for different Sui networks
const sampleNft = new Map([
  [
    "sui:devnet",
    "0xe146dbd6d33d7227700328a9421c58ed34546f998acdc42a1d05b4818b49faa2::nft::mint",
  ],
  [
    "sui:testnet",
    "0x5ea6aafe995ce6506f07335a40942024106a57f6311cb341239abf2c3ac7b82f::nft::mint",
  ],
  [
    "sui:mainnet",
    "0x5b45da03d42b064f5e051741b6fed3b29eb817c7923b83b92f37a1d2abf4fbab::nft::mint",
  ],
]);

function App() {
  const wallet = useWallet();
  const client = useSuiClient();
  const { balance } = useAccountBalance();

  // Memoized address for the NFT contract based on the connected network
  const nftContractAddr = useMemo(() => {
    if (!wallet.chain) return "";
    return sampleNft.get(wallet.chain.id) ?? "";
  }, [wallet]);

  // Utility function to convert Uint8Array to hexadecimal format
  function uint8arrayToHex(value) {
    if (!value) return "";
    return Buffer.from(value).toString("hex");
  }

  // Handle minting NFT
  async function handleSignAndExecuteTransaction(target, opts = {}) {
    if (!target) return;
    try {
      const tx = new Transaction();
      tx.moveCall({
        target,
        arguments: [
          tx.pure.string("Suiet NFT"),
          tx.pure.string("Suiet Sample NFT"),
          tx.pure.string(
            "https://xc6fbqjny4wfkgukliockypoutzhcqwjmlw2gigombpp2ynufaxa.arweave.net/uLxQwS3HLFUailocJWHupPJxQsli7aMgzmBe_WG0KC4"
          ),
        ],
      });

      if (!opts.isCustomExecution) {
        const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        });
        console.log("Transaction Success:", resData);
      } else {
        const resData = await wallet.signAndExecuteTransaction(
          {
            transaction: tx,
          },
          {
            execute: async ({ bytes, signature }) => {
              return await client.executeTransactionBlock({
                transactionBlock: bytes,
                signature: signature,
                options: {
                  showRawEffects: true,
                  showObjectChanges: true,
                },
              });
            },
          }
        );
        console.log("Transaction Success:", resData);
      }

      alert("Transaction succeeded (check console for details)");
    } catch (e) {
      console.error("Transaction Failed", e);
      alert("Transaction failed (check console for details)");
    }
  }

  // Handle signing a personal message
  async function handleSignMsg() {
    if (!wallet.account) return;
    try {
      const msg = "Hello world!";
      const msgBytes = new TextEncoder().encode(msg);
      const result = await wallet.signPersonalMessage({
        message: msgBytes,
      });
      const verifyResult = await wallet.verifySignedMessage(
        result,
        wallet.account.publicKey
      );
      console.log("Verification result:", verifyResult);
      if (!verifyResult) {
        alert("Message signed but verification failed");
      } else {
        alert("Message signed and verification succeeded!");
      }
    } catch (e) {
      console.error("Message Signing Failed", e);
      alert("Message signing failed (check console for details)");
    }
  }

  const chainName = (chainId) => {
    switch (chainId) {
      case SuiChainId.MAIN_NET:
        return "Mainnet";
      case SuiChainId.TEST_NET:
        return "Testnet";
      case SuiChainId.DEV_NET:
        return "Devnet";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/suiet/wallet-kit" target="_blank">
          <img src={suietLogo} className="logo" alt="Suiet logo" />
        </a>
      </div>
      <h1>Vite + Suiet Kit</h1>
      <div className="card">
        <ConnectButton
          onConnectError={(error) => {
            if (error.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
              console.warn(
                "User rejected the connection to " + error.details?.wallet
              );
            } else {
              console.warn("Unknown connection error:", error);
            }
          }}
        />
        {!wallet.connected ? (
          <p>Connect to Suiet wallet to proceed</p>
        ) : (
          <div>
            <div>
              <p>Current wallet: {wallet.adapter?.name}</p>
              <p>
                Wallet status:{" "}
                {wallet.connecting
                  ? "connecting"
                  : wallet.connected
                  ? "connected"
                  : "disconnected"}
              </p>
              <p>Wallet address: {wallet.account?.address}</p>
              <p>Current network: {wallet.chain?.name}</p>
              <p>
                Wallet balance:{" "}
                {formatSUI(balance ?? 0, { withAbbr: false })} SUI
              </p>
              <p>Wallet publicKey: {uint8arrayToHex(wallet.account?.publicKey)}</p>
            </div>
            <div className="btn-group" style={{ margin: "8px 0" }}>
              {nftContractAddr && (
                <button
                  onClick={() =>
                    handleSignAndExecuteTransaction(nftContractAddr, {
                      isCustomExecution: true,
                    })
                  }
                >
                  Mint {chainName(wallet.chain?.id)} NFT
                </button>
              )}
              <button onClick={handleSignMsg}>Sign Message</button>
            </div>
          </div>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and Suiet logos to learn more
      </p>
    </div>
  );
}

export default App;
