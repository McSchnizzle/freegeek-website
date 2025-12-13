export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            Free Geek
          </h1>
          <p className="text-lg md:text-xl text-gray-600">Portland, Oregon</p>
        </div>

        {/* Coming Soon Badge */}
        <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
          New Website Coming Soon
        </div>

        {/* Mission Statement */}
        <div className="max-w-2xl text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Sustainably reusing technology, enabling digital access, and
            providing education to create a community that empowers people to
            realize their potential.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 w-full max-w-4xl">
          <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-600">
              25
            </div>
            <div className="text-sm text-gray-600">Years of Impact</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-600">
              82M+
            </div>
            <div className="text-sm text-gray-600">Pounds E-Waste Diverted</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">
              75K+
            </div>
            <div className="text-sm text-gray-600">Devices Granted</div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">
              150K+
            </div>
            <div className="text-sm text-gray-600">Community Members Served</div>
          </div>
        </div>

        {/* Current Site Link */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://freegeek.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors text-center"
          >
            Visit Current Site
          </a>
          <a
            href="mailto:computerfriends@freegeek.org"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Location & Hours */}
        <div className="text-center text-gray-600">
          <p className="font-semibold">1731 SE 10th Avenue, Portland, OR 97214</p>
          <p>Wednesday - Saturday, 11 AM - 4 PM</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://instagram.com/freegeekmothership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-600 transition-colors"
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
            className="text-gray-500 hover:text-blue-600 transition-colors"
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
            className="text-gray-500 hover:text-gray-900 transition-colors"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Free Geek. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            501(c)(3) Nonprofit Organization | Founded April 22, 2000
          </p>
        </div>
      </footer>
    </main>
  );
}
