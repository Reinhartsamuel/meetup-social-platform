export default function Home() {
  return (
    <>
      <section className='bg-white dark:bg-gray-900'>
        <div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
              Trade Crypto With Algotrade byScript <br />
              products & brands.
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              First algorithmic trading marketplace in Indonesia{' '}
              <a href='https://tailwindcss.com' className='hover:underline'>
                Tailwind CSS
              </a>{' '}
              and based on the components from the{' '}
              <a
                href='https://flowbite.com/docs/getting-started/introduction/'
                className='hover:underline'
              >
                Flowbite Library
              </a>{' '}
              and the{' '}
              <a
                href='https://flowbite.com/blocks/'
                className='hover:underline'
              >
                Blocks System
              </a>
              .
            </p>
            <div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
              <a
                href='https://github.com/themesberg/landwind'
                className='inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                <svg
                  className='w-4 h-4 mr-2 text-gray-500 dark:text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 496 512'
                >
                  <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                </svg>{' '}
                View on GitHub
              </a>
              <a
                href='https://www.figma.com/community/file/1125744163617429490'
                className='inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Get Figma file
              </a>
            </div>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
            <img src='./images/hero.png' alt='hero image' />
          </div>
        </div>
      </section>
      <section className='bg-white dark:bg-gray-900'>
        <div className='items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
          <div className='col-span-2 mb-8'>
            <p className='text-lg font-medium text-purple-600 dark:text-purple-500'>
              Trusted Worldwide
            </p>
            <h2 className='mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white'>
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className='pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700'>
              <div>
                <a
                  href='#'
                  className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'
                >
                  Explore Legality Guide
                  <svg
                    className='w-5 h-5 ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'
                >
                  Visit the Trust Center
                  <svg
                    className='w-5 h-5 ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
            <div>
              <svg
                className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <h3 className='mb-2 text-2xl font-bold dark:text-white'>
                99.99% uptime
              </h3>
              <p className='font-light text-gray-500 dark:text-gray-400'>
                For Landwind, with zero maintenance downtime
              </p>
            </div>
            <div>
              <svg
                className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
              </svg>
              <h3 className='mb-2 text-2xl font-bold dark:text-white'>
                600M+ Users
              </h3>
              <p className='font-light text-gray-500 dark:text-gray-400'>
                Trusted by over 600 milion users around the world
              </p>
            </div>
            <div>
              <svg
                className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <h3 className='mb-2 text-2xl font-bold dark:text-white'>
                100+ countries
              </h3>
              <p className='font-light text-gray-500 dark:text-gray-400'>
                Have used Landwind to create functional websites
              </p>
            </div>
            <div>
              <svg
                className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
              </svg>
              <h3 className='mb-2 text-2xl font-bold dark:text-white'>
                5+ Million
              </h3>
              <p className='font-light text-gray-500 dark:text-gray-400'>
                Transactions per day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
