import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Send, Mail, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { ALL_SYSTEMS } from '../data/systemsData';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.name.trim() || !formState.email.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission to API / webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        projectType: 'Hospital Management & Clinical Operations',
        message: ''
      });
    }, 1200);
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
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Email Address</div>
                <div className="text-xs text-slate-600 font-mono mt-0.5">contact@codeoz.org</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#FF5A00] shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Direct Telephone</div>
                <div className="text-xs text-slate-600 font-mono mt-0.5">+880 1700-000000</div>
              </div>
            </div>

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

          <div className="bg-[#0B0F19] text-white p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>RAPID RESPONSE SLA</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every request receives a comprehensive technical scoping document with NDA protection and estimated sprint milestones.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Consultation Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for reaching out. A senior software architect has been assigned to your request and will contact you within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
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
                    <option value="Custom .NET Architecture">Custom .NET Architecture & Web API</option>
                    <option value="Cloud Migration">Legacy .NET to Cloud Modernization</option>
                    <option value="Mobile App & UI/UX">Mobile App Development & UI/UX</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Message & Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Describe your operational bottleneck or project goals..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Dispatching Request...</span>
                ) : (
                  <>
                    <span>Send Project Request</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
