export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Logo/Brand */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2">
            FREE GEEK
          </h1>
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
            Portland, Oregon
          </p>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl text-center mb-10">
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Your old tech.
            <br />
            <span className="text-cyan-400">Someone&apos;s new future.</span>
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            We turn e-waste into opportunity. For 25 years, we&apos;ve been
            keeping tech out of landfills and putting it into the hands of
            people who need it most.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="bg-cyan-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-12 shadow-lg shadow-cyan-500/30 uppercase tracking-wide">
          New Website Coming Soon
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 w-full max-w-4xl">
          <div className="text-center p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
            <div className="text-3xl md:text-4xl font-black text-cyan-400">
              82M+
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Pounds of e-waste saved from landfills
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
            <div className="text-3xl md:text-4xl font-black text-fuchsia-400">
              75K+
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Devices given to people in need
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
            <div className="text-3xl md:text-4xl font-black text-amber-400">
              150K+
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Community members connected
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
            <div className="text-3xl md:text-4xl font-black text-emerald-400">
              25
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Years bridging the digital divide
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://freegeek.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 text-center"
          >
            Visit Current Site
          </a>
          <a
            href="https://freegeek.org/donatetech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all hover:scale-105 text-center"
          >
            Donate Your Tech
          </a>
        </div>

        {/* Location & Hours */}
        <div className="text-center text-slate-400">
          <p className="font-semibold text-white">
            1731 SE 10th Avenue, Portland, OR 97214
          </p>
          <p>Wed - Sat, 11 AM - 4 PM</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://instagram.com/freegeekmothership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/free-geek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/FreeGeekPDX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Two crises. One solution.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-slate-50 rounded-2xl">
              <div className="text-5xl font-black text-red-500 mb-4">70%</div>
              <p className="text-slate-700">
                E-waste is just 2% of America&apos;s trash—but{" "}
                <strong>70% of its toxic waste</strong>. Most of it ends up in
                landfills, leaching poison into our soil and water.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
              <div className="text-5xl font-black text-red-500 mb-4">1 in 5</div>
              <p className="text-slate-700">
                American households don&apos;t have a computer.{" "}
                <strong>No computer means no job applications</strong>, no
                homework, no telehealth, no connection.
              </p>
            </div>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We take the devices companies and families no longer need, refurbish
            them, and give them to people who do. It&apos;s not charity—it&apos;s
            common sense.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Here&apos;s how it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">You donate</h3>
              <p className="text-slate-400">
                Drop off your old laptops, desktops, phones—anything with a
                plug. We wipe your data securely.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">We refurbish</h3>
              <p className="text-slate-400">
                Our team rebuilds what can be saved. What can&apos;t gets
                responsibly recycled—zero landfill.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">They thrive</h3>
              <p className="text-slate-400">
                A student gets a laptop for school. A job seeker sends their
                first resume. A grandma video-calls her family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Got old tech collecting dust?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            That laptop in your closet could change someone&apos;s life. Drop it
            off, and we&apos;ll handle the rest.
          </p>
          <a
            href="https://freegeek.org/donatetech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Visit Us</h3>
              <p className="text-slate-400">
                1731 SE 10th Avenue
                <br />
                Portland, OR 97214
              </p>
              <p className="text-slate-400 mt-2">Wed - Sat, 11 AM - 4 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <a
                href="mailto:computerfriends@freegeek.org"
                className="text-cyan-400 hover:text-cyan-300"
              >
                computerfriends@freegeek.org
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/freegeekmothership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/free-geek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Free Geek. 501(c)(3) Nonprofit.
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Turning e-waste into opportunity since April 22, 2000.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
