import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.date) formErrors.date = "Date is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Booking Successful!");
      setFormData({ name: '', email: '', date: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="booking-form">
      <h2 id="booking-form">Book Your Session</h2>
      <label htmlFor="name">
        Name:
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={!!errors.name}
        aria-describedby="name-error"
      />
      {errors.name && <span id="name-error" className="error" role="alert">{errors.name}</span>}
      
      <label htmlFor="email">
        Email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={!!errors.email}
        aria-describedby="email-error"
      />
      {errors.email && <span id="email-error" className="error" role="alert">{errors.email}</span>}
      
      <label htmlFor="date">
        Date:
      </label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={!!errors.date}
        aria-describedby="date-error"
      />
      {errors.date && <span id="date-error" className="error" role="alert">{errors.date}</span>}
      
      <button type="submit" aria-label="Submit booking form">Submit</button>
    </form>
  );
};

export default BookingForm;
