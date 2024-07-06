export const HeroBanner = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto py-32 sm:py-48 lg:py-24 flex flex-row items-center justify-evenly">
        <div className="text-center" style={{ flex: '0.3' }}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Lord of All Memes Has Arrived!
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="w-56 rounded-md bg-gradient-to-b from-yellow-400 to-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div
          className="relative"
          style={{
            flex: '0.4',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            alt=""
            src="/revolving.png"
            className="animate-spin"
            style={{ width: '100%', height: 'auto' }}
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
      `}</style>
    </div>
  );
};
