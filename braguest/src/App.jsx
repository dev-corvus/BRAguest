import { useState } from 'react'
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Welcome to the App</h1>
        <p>The navbar is now live and fully responsive.</p>
      </main>
    </>
  );
}