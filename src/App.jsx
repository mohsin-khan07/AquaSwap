import { GlobalContextProvider } from "./contexts/GlobalContext";
import { AccountContextProvider } from "./contexts/AccountContext";
import { SwapContextProvider } from "./contexts/SwapContext";
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
        <SwapContextProvider>
          <Swap />
          <Button />
        </SwapContextProvider>
        <AccountContextProvider>
          <AccountDetails />
        </AccountContextProvider>
        <Footer />
      </GlobalContextProvider>
    </section>
  );
}

export default App;
