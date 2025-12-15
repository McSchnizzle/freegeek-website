'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components';

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    subject: string;
    selectTopic: string;
    topics: {
      digitalInclusion: string;
      donation: string;
      business: string;
      volunteering: string;
      shop: string;
      fundraising: string;
      press: string;
      hr: string;
      other: string;
    };
    message: string;
    submit: string;
    sending: string;
    success: string;
    successDescription: string;
    sendAnother: string;
    error: string;
    failedToSend: string;
    genericError: string;
  };
}

export function ContactForm({ translations: t }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      website: formData.get('website'), // Honeypot field
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.failedToSend);
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : t.genericError);
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{t.success}</h3>
        <p className="text-green-700">{t.successDescription}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-green-600 hover:text-green-800 font-medium"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam protection - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700" role="alert" aria-live="assertive">
          <p className="font-medium">{t.error}</p>
          {errorMessage && <p className="text-sm mt-1">{errorMessage}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
            disabled={status === 'loading'}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            {t.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
            disabled={status === 'loading'}
            aria-required="true"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          {t.subject} <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          required
          disabled={status === 'loading'}
          aria-required="true"
        >
          <option value="">{t.selectTopic}</option>
          <option value="digital-inclusion">{t.topics.digitalInclusion}</option>
          <option value="donation">{t.topics.donation}</option>
          <option value="business">{t.topics.business}</option>
          <option value="volunteering">{t.topics.volunteering}</option>
          <option value="shop">{t.topics.shop}</option>
          <option value="fundraising">{t.topics.fundraising}</option>
          <option value="press">{t.topics.press}</option>
          <option value="hr">{t.topics.hr}</option>
          <option value="other">{t.topics.other}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          {t.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          required
          disabled={status === 'loading'}
          aria-required="true"
        />
      </div>
      <div className="text-center">
        <Button type="submit" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {t.sending}
            </span>
          ) : t.submit}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
