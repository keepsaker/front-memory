import './reset.css';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from './components/NavBar';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>hello, world!</h1>
      <NavBar />
    </QueryClientProvider>
  );
};

export default App;
