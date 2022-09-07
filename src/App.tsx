import Navbar from "components/navbar/Navbar";
import SidebarLayout from "components/sidebarLayout/SidebarLayout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <SidebarLayout />
    </QueryClientProvider>
  );
};

export default App;
