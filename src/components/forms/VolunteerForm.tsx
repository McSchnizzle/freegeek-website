'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components';

interface VolunteerFormProps {
  interests: string[];
  translations: {
    name: string;
    email: string;
    interestsLabel: string;
    interestsNote: string;
    about: string;
    aboutPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export function VolunteerForm({ interests, translations: t }: VolunteerFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const selectedInterests = formData.getAll('interests');

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      interests: selectedInterests,
      about: formData.get('message'),
    };

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{t.success}</h3>
        <p className="text-green-700">We&apos;ll be in touch soon about volunteer opportunities!</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-green-600 hover:text-green-800 font-medium"
        >
          Submit another interest form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          <p className="font-medium">{t.error}</p>
          {errorMessage && <p className="text-sm mt-1">{errorMessage}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="volunteer-name" className="block text-sm font-semibold mb-2">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="volunteer-name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
            disabled={status === 'loading'}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="volunteer-email" className="block text-sm font-semibold mb-2">
            {t.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="volunteer-email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
            disabled={status === 'loading'}
            aria-required="true"
          />
        </div>
      </div>
      <div>
        <fieldset>
          <legend className="block text-sm font-semibold mb-2">
            {t.interestsLabel} <span className="text-gray-500">{t.interestsNote}</span>
          </legend>
          <div className="grid md:grid-cols-2 gap-3">
            {interests.map((interest, index) => (
              <label key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest.toLowerCase().replace(' ', '-')}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  disabled={status === 'loading'}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div>
        <label htmlFor="volunteer-message" className="block text-sm font-semibold mb-2">
          {t.about}
        </label>
        <textarea
          id="volunteer-message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          placeholder={t.aboutPlaceholder}
          disabled={status === 'loading'}
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

export default VolunteerForm;
