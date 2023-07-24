import React from 'react';
import { UsersList } from '../UsersList/UsersList';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './App.scss';

function App() {
  return (
      <div className="app">
          <Header />
          <main>
              <UsersList />
          </main>
          <Footer />
      </div>
  );
}

export default App;
