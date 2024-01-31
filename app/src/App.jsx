import { GlobalContextProvider } from "./contexts/GlobalContext";
import { AccountContextProvider } from "./contexts/AccountContext";
import { TokensContextProvider } from "./contexts/TokensContext";
import { AmountsContextProvider } from "./contexts/AmountsContext";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Swap from "./components/Swap";
import Button from "./components/Button";
import AccountDetails from "./components/AccountDetails";

function App() {
  return (
    <section>
      <GlobalContextProvider>
        <Logo />
        <TokensContextProvider>
          <AmountsContextProvider>
            <Swap />
            <Button />
          </AmountsContextProvider>
        </TokensContextProvider>
        <AccountContextProvider>
          <AccountDetails />
        </AccountContextProvider>
        <Footer />
      </GlobalContextProvider>
    </section>
  );
}

export default App;
