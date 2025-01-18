import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ObjectList from './components/ObjectList';
import SubjectList from './components/SubjectList';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Section */}
      <main>
        <ObjectList />
        <SubjectList />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;