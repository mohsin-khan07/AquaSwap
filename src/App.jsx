import SwapCard from "./components/SwapCard";
import SwapDetails from "./components/SwapDetails";
import AccountDetails from "./components/AccountDetails";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import { AccountContextProvider } from "./contexts/AccountContext";
import { SwapContextProvider } from "./contexts/SwapContext";
import WalletOverview from "./components/WalletOverview";

function App() {
  return (
    <section>
      <GlobalContextProvider>
        <AccountContextProvider>
          <Logo />
          <WalletOverview />
          <SwapContextProvider>
            <SwapCard />
            <SwapDetails />
          </SwapContextProvider>
          <AccountDetails />
          <Footer />
        </AccountContextProvider>
      </GlobalContextProvider>
    </section>
  );
}

export default App;
