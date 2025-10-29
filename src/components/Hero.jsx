import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 backdrop-blur">
            New • Modern rental platform
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Modern rentals made effortless
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            List properties, manage bookings, and find your next home — all in one sleek, secure, and lightning-fast experience.
          </p>
          <div id="get-started" className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              List your property
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800/70 px-6 py-3 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
            >
              Find a home
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Trusted by owners and renters across the city
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[78vh]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10 dark:from-neutral-950/40 dark:to-neutral-950/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
