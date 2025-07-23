export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-20 pb-16 shadow-2xl lg:px-24 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-7xl sm:px-16 lg:flex lg:items-center lg:justify-between">
        {/* Background gradient circle */}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-50"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#gradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#4f46e5" />
              <stop offset={1} stopColor="#ec4899" />
            </radialGradient>
          </defs>
        </svg>

        {/* Left Text Content */}
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Rezyumoni oson yarating
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bir necha daqiqada professional CV tayyorlang. Hech qanday dizayn
            ko‘nikmasiz. To‘ldiring, ko‘ring va yuklab oling!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/builder"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 transition"
            >
              Boshlash
            </a>
            <a
              href="/templates"
              className="text-sm font-semibold text-white hover:text-gray-200 transition"
            >
              Shablonlarni ko‘rish <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative mt-12 lg:mt-0 lg:ml-12 h-80 lg:h-96">
          <img
            alt="App screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            className="absolute top-0 left-0 w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
