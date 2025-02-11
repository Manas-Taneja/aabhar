'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-transparent sm:p-6 text-white">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/about" target="_blank">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                आbhar
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-300">
                Site links
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/">
                    <span className="text-gray-500 hover:underline">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/collections">
                    <span className="text-gray-500 hover:underline">
                      Collections
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-300 uppercase">
                Follow us
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="https://github.com" target="_blank">
                    <span className="text-gray-600 hover:underline">
                      Github
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.com" target="_blank">
                    <span className="text-gray-600 hover:underline">
                      Discord
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-300 uppercase">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <Link href="/privacy-policy">
                    <span className="text-gray-600 hover:underline">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions">
                    <span className="text-gray-600 hover:underline">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 <Link href="/">आbhar™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Replace with appropriate social media routes */}
            <Link href="https://facebook.com" target="_blank">
              <span className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
