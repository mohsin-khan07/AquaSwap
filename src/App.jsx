import SwapCard from "./components/SwapCard";
import AccountDetails from "./components/AccountDetails";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import { AccountContextProvider } from "./contexts/AccountContext";
import { SwapContextProvider } from "./contexts/SwapContext";
import Button from "./components/Button";

function App() {
  return (
    <section>
      <GlobalContextProvider>
        <Logo />
        <SwapContextProvider>
          <SwapCard />
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
