import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Buttons from './custom_hook_1/Buttons';
import Cat from './custom_hook_2/Cat';


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchInterval: false,
        onError: (error) => {
          // Handle the error globally, e.g., log it or display a notification
          console.error('An error occurred:', error);
        },

      }
    }
  })


  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Buttons />
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
