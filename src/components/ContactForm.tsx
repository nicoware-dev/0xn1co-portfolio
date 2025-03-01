'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading('Sending your message...');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.dismiss(loadingToast);
      toast.success('Message sent successfully! We will get back to you soon.', {
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.dismiss(loadingToast);
      toast.error(error instanceof Error ? error.message : 'Failed to send message', {
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter message subject"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            className="form-input"
            rows={4}
          />
        </div>

        <button type="submit" className="send-button" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Send message icon</title>
            <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
          </svg>
        </button>
      </form>

      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: var(--primary-90);
          font-size: 1.6rem;
        }

        .form-input {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(123, 74, 226, 0.2);
          border-radius: 8px;
          color: var(--primary-100);
          font-size: 1.6rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .send-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1.6rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .send-button:hover {
          transform: translateY(-2px);
        }

        .send-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.4rem;
          margin-top: 1rem;
        }

        .form-message.success {
          color: #10b981;
        }

        .form-message.error {
          color: #ef4444;
        }
      `}</style>
    </>
  );
} 