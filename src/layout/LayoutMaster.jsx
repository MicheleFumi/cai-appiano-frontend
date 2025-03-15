import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

export default function LayoutMaster({ children }) {
  return (
    <>
      {/* Header (Navbar) */}
      <Header />

      {/* Main content che cambia a seconda delle rotte */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
