import Layout from "./components/layout";
import { HomePage } from "./components/homePage";
import DetailsPage from "./components/detailsPage";


export const App = () => {
  return (
    <Layout>
      <DetailsPage/>
      {/* <HomePage /> */}
    </Layout>
  );
};
