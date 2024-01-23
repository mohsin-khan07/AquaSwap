import SwapCard from "./components/SwapCard";
import SwapDetails from "./components/SwapDetails";
import AccountDetails from "./components/AccountDetails";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import { AccountContextProvider } from "./contexts/AccountContext";

function App() {
  return (
    <section>
      <GlobalContextProvider>
        <Logo />
        <SwapCard />
        <SwapDetails />
        <AccountContextProvider>
          <AccountDetails />
        </AccountContextProvider>
        <Footer />
      </GlobalContextProvider>
    </section>
  );
}

export default App;
