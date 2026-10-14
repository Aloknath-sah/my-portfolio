import { useState } from 'react';
import emailjs from 'emailjs-com';
import { RevealOnScroll } from '../RevealOnScroll';

export const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage('The contact form is not configured yet. Please email me directly instead.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      form.reset();
      setStatus('success');
      setStatusMessage('Thanks for reaching out. Your message has been sent.');
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong while sending your message. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="section-space scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Get in touch</p>
              <h2 className="section-title">Let's build something <span className="text-gradient">meaningful.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">For frontend architecture, performance engineering, product UI, or just a thoughtful conversation—feel free to reach out.</p>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <RevealOnScroll>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0a0e17] p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-400">The easiest way to reach me is email. You can also explore my code and professional background through the links below.</p>
              <a href="mailto:aloknathsbp88@gmail.com" className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.045]">
                <span className="min-w-0"><span className="block text-xs text-slate-500">Email</span><span className="mt-1 block break-all text-sm font-medium text-white">aloknathsbp88@gmail.com</span></span>
                <span aria-hidden="true" className="text-cyan-200">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/aloknath-sah/" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.045]">
                <span><span className="block text-xs text-slate-500">Professional profile</span><span className="mt-1 block text-sm font-medium text-white">LinkedIn</span></span><span aria-hidden="true" className="text-cyan-200">↗</span>
              </a>
              <a href="https://github.com/Aloknath-sah" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.045]">
                <span><span className="block text-xs text-slate-500">Code & experiments</span><span className="mt-1 block text-sm font-medium text-white">GitHub</span></span><span aria-hidden="true" className="text-cyan-200">↗</span>
              </a>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Bengaluru, India · Frontend engineering</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-[#0a0e17] p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">Send a message</h3>
                <p className="mt-1 text-sm text-slate-500">I’ll get back to you as soon as I can.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-medium text-slate-400">Your name
                  <input name="name" type="text" autoComplete="name" required className="form-input mt-2" placeholder="Jane Doe" />
                </label>
                <label className="block text-xs font-medium text-slate-400">Your email
                  <input name="email" type="email" autoComplete="email" required className="form-input mt-2" placeholder="jane@company.com" />
                </label>
              </div>
              <label className="mt-4 block text-xs font-medium text-slate-400">Message
                <textarea name="message" rows={5} required className="form-input mt-2 resize-y" placeholder="A little context about your message..." />
              </label>

              {statusMessage && (
                <p role={status === 'error' ? 'alert' : 'status'} className={`mt-4 rounded-lg border px-3 py-2.5 text-sm ${status === 'error' ? 'border-rose-300/20 bg-rose-300/[0.06] text-rose-200' : 'border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200'}`}>
                  {statusMessage}
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="primary-button mt-5 inline-flex w-full items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-60">
                {status === 'sending' ? 'Sending message…' : status === 'success' ? 'Send another message' : 'Send message'} <span aria-hidden="true">↗</span>
              </button>
              <p className="mt-3 text-xs leading-5 text-slate-600">This form uses the existing EmailJS integration. Configure `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY` in your local/hosting environment.</p>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
