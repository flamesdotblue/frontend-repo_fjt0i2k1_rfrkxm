import { Home, Shield, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Seamless Listings',
    desc: 'Create beautiful property pages with photos, amenities, and pricing in minutes.'
  },
  {
    icon: Shield,
    title: 'Smart Verification',
    desc: 'Built‑in screening and secure payments keep owners and renters protected.'
  },
  {
    icon: Clock,
    title: 'Instant Bookings',
    desc: 'Real‑time availability and instant confirmations to reduce back‑and‑forth.'
  },
  {
    icon: Star,
    title: 'Transparent Pricing',
    desc: 'Clear fees and flexible terms. No surprises for you or your guests.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Everything you need to rent smarter</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">Designed for both owners and renters with a focus on speed, clarity, and trust.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
