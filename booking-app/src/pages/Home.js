import React from 'react';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <main className="home">
      <header>
        <h1>Welcome to the Workshop Booking Platform</h1>
        <p>Book your session below:</p>
      </header>
      <section>
        <BookingForm />
      </section>
    </main>
  );
};

export default Home;
