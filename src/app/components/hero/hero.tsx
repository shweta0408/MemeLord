export const HeroBanner = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto py-16 sm:py-32 lg:py-24 flex flex-col sm:flex-row items-center justify-evenly">
        <div className="text-center sm:w-2/5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The Lord of All Memes Has Arrived!
          </h1>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="w-full sm:w-56 rounded-md bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div
          className="relative mt-10 sm:mt-0"
          style={{
            flex: '0.5',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            alt=""
            src="/revolving.png"
            className="animate-spin"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate3d(0, 0, 0, 0deg);
          }
          100% {
            transform: rotate3d(2, 5, 2, 3600deg);
          }
        }

        .animate-spin {
          animation: spin 60s linear infinite;
        }

        @media (min-width: 640px) {
          .sm\:py-32 {
            padding-top: 12rem; /* Adjust as needed */
          }
        }
      `}</style>
    </div>
  );
};
