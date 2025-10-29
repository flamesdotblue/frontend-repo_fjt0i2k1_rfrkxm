export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-neutral-200/60 dark:border-neutral-800/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Rentify — All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="mailto:hello@rentify.app" className="hover:text-neutral-900 dark:hover:text-white">hello@rentify.app</a>
        </div>
      </div>
    </footer>
  );
}
