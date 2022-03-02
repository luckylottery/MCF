import { WalletProvider } from "./context/WalletContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <WalletProvider>
      <AppRouter />
    </WalletProvider>
  );
}

export default App;
