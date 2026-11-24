import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Send, Mail, Phone, MapPin, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';
import { ALL_SYSTEMS } from '../data/systemsData';

// ✅ FIX #1: Real Formspree endpoint — replace YOUR_FORM_ID with actual Formspree form id
// Get one free at https://formspree.io — takes 2 minutes
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

// ✅ FIX #2: Real contact info
const CONTACT_EMAIL = 'contact@codeoz.org';
const CONTACT_PHONE = '+880 1700-000000'; // ← এখানে real number দাও
const WHATSAPP_NUMBER = '8801700000000';   // ← WhatsApp number (country code সহ, no +)

export function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedSolution = searchParams.get('solution') || 'Hospital Management & Clinical Operations';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: preselectedSolution,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (searchParams.get('solution')) {
      setFormState(prev => ({
        ...prev,
        projectType: searchParams.get('solution') || prev.projectType
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // ✅ FIX #10: message field also validated
    if (!formState.name.trim() || !formState.email.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    if (!formState.message.trim() || formState.message.trim().length < 10) {
      setErrorMessage('Please describe your project requirements (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ FIX #1: Real async form submission via Formspree
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone || 'Not provided',
          projectType: formState.projectType,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          projectType: 'Hospital Management & Clinical Operations',
          message: '',
        });
      } else {
        const data = await res.json();
        throw new Error(data?.errors?.[0]?.message || 'Submission failed. Please try again.');
      }
    } catch (err: unknown) {
      setIsSubmitting(false);
      const message = err instanceof Error ? err.message : 'Network error. Please try emailing us directly.';
      setErrorMessage(message);
    }
  };

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#FF5A00] uppercase bg-orange-100 px-3 py-1 rounded-full">
          LET'S BUILD
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-950">
          Have an idea? <span className="text-[#FF5A00]">Let's code it.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Share your business objectives and architectural requirements. Our senior technical team will formulate a roadmap within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Contacts */}
        <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF5A00] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Speak to our engineering leads
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We skip lengthy sales bureaucracy and connect you directly with principal engineers and solution architects.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-6">
            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-start gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm group-hover:bg-[#FF5A00] group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Email Address</div>
                <div className="text-xs text-slate-600 font-mono mt-0.5 group-hover:text-[#FF5A00] transition-colors">{CONTACT_EMAIL}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="flex items-start gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm group-hover:bg-[#FF5A00] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Direct Telephone</div>
                <div className="text-xs text-slate-600 font-mono mt-0.5 group-hover:text-[#FF5A00] transition-colors">{CONTACT_PHONE}</div>
              </div>
            </a>

            {/* WhatsApp — ✅ FIX #16 */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CodeOz%2C%20I%20have%20a%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">WhatsApp Chat</div>
                <div className="text-xs text-slate-600 font-mono mt-0.5 group-hover:text-green-600 transition-colors">Message us on WhatsApp</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Technology Studio</div>
                <div className="text-xs text-slate-600 mt-0.5">Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>

          {/* Response time badge */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900">Avg. Response Time:</span> Within 4 business hours.
              We review every project inquiry personally.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">Request Dispatched!</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-sm">
                  Your inquiry has been received. Our engineering leads will contact you within 4–24 hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl text-xs font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+880 1..."
                    value={formState.phone}
                    onChange={e => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Target Platform</label>
                  <select
                    value={formState.projectType}
                    onChange={e => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] bg-white transition-colors"
                  >
                    {ALL_SYSTEMS.map(sys => (
                      <option key={sys.id} value={sys.title}>{sys.title}</option>
                    ))}
                    <option value="Custom .NET Architecture">Custom .NET Architecture &amp; Web API</option>
                    <option value="Cloud Migration">Legacy .NET to Cloud Modernization</option>
                    <option value="Mobile App & UI/UX">Mobile App Development &amp; UI/UX</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              {/* ✅ FIX #10: Message required + min length hint */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">
                  Message &amp; Requirements *
                </label>
                <textarea
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Describe your operational bottleneck or project goals (min. 10 characters)..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] resize-none transition-colors"
                />
                <p className="text-[10px] text-slate-400 text-right">
                  {formState.message.length} / 10 min chars
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Dispatching Request...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Request</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                By submitting, you agree that CodeOz may contact you regarding your project inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
