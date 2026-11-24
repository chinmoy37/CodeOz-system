import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { CodeOzLogo } from './components/ui/CodeOzLogo';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';

// Code-splitting via React.lazy for optimized bundle delivery
const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const Services      = lazy(() => import('./pages/Services'));
const Solutions     = lazy(() => import('./pages/Solutions'));
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'));
const Contact       = lazy(() => import('./pages/Contact'));
const NotFound      = lazy(() => import('./pages/NotFound'));

// ✅ FIX #7: Error Boundary — catches runtime crashes in any child component
interface ErrorBoundaryState { hasError: boolean; error: Error | null }
class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-2xl">⚠️</div>
          <h2 className="text-xl font-bold text-slate-900">Something went wrong</h2>
          <p className="text-sm text-slate-500 max-w-sm">
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = '/'; }}
            className="px-6 py-2 rounded-xl text-sm font-bold text-white bg-[#FF5A00] hover:bg-[#FF701A] transition-colors"
          >
            Go back to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Sleek branded loading fallback during chunk loads
function PageLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-[#FF5A00] rounded-full animate-spin" />
      <div className="text-xs font-mono font-medium text-slate-500 tracking-wider">
        LOADING CODEOZ PLATFORM...
      </div>
    </div>
  );
}

// Re-export CodeOzLogo and system data for backwards compatibility
export { CodeOzLogo };
export { ALL_SYSTEMS, type SystemDetail } from './data/systemsData';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 selection:bg-[#FF5A00] selection:text-white antialiased flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">
          {/* ✅ ErrorBoundary wraps Suspense so crashes show a friendly screen */}
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/"              element={<Home />} />
                <Route path="/about"         element={<About />} />
                <Route path="/services"      element={<Services />} />
                <Route path="/solutions"     element={<Solutions />} />
                <Route path="/solutions/:id" element={<SolutionDetail />} />
                <Route path="/contact"       element={<Contact />} />
                {/* ✅ FIX #11: /not-found catches bad solution IDs via Navigate */}
                <Route path="/not-found"     element={<NotFound />} />
                <Route path="*"              element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        {/* ✅ FIX #16: Floating WhatsApp button on every page */}
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
