import { useState } from 'react';
import './GetStarted.css';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send formData to your backend API or service
    console.log('Submitted data:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="get-started">
      <div className="form-card">
        {isSubmitted ? (
          <div className="success-state">
            <span className="success-badge">✓</span>
            <h2>Welcome aboard, {formData.name}!</h2>
            <p>
              We sent a confirmation link to <strong>{formData.email}</strong>.
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '' });
              }}
            >
              Submit another
            </button>
          </div>
        ) : (
          <>
            <div className="form-header">
              <h1>Let's go!</h1>
              <p>Make sure to fill out all the required fields.</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Bradesco Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@bradesco.com.br"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="manager">Senior Manager</label>
                <input
                  type="text"
                  id="manager"
                  name="manager"
                  placeholder="John Doe"
                  value={formData.manager}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Company</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="NTT DATA"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Tribo</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Special Products"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@ntt.com.br"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Phone Number</label>
                <input
                  type="tel"
                  id="email"
                  name="email"
                  placeholder=" +55 (99) 99999-9999"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">CPF</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="000.000.000-00"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Continue
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}