import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import BestHunters from 'pages/best-hunters/BestHunters';
import './App.module.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BestHunters />
            </div>
        </QueryClientProvider>
    );
}

export default App;
