import { Routes, Route } from "react-router";
import { HomePage } from "./components/homePage";
import { Login } from "./components/Login";
import { Layout } from "./components/layout";
import { AccountPage } from "./components/accountPage";
import { InvestmentPage } from "./components/investmentPage";
import { CreditPage } from "./components/creditPage";
import { ScrollToTop } from "./components/scrollToTop";
import { TransactionPage } from "./components/transactionPage";
import { LoanPage } from "./components/loanPage";
import { ServicePage } from "./components/servicePage";
export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/accounts" element={<AccountPage />} />
          <Route path="/investments" element={<InvestmentPage />} />
          <Route path="/credit-card" element={<CreditPage />} />
          <Route path="/loans" element={<LoanPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
