import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <header aria-label="Site Header" className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <div className="flex items-center cursor-pointer text-white hover:text-gray-300 transition-all">
                  <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />

                  <h1 className="text-xl ml-2 mr-2 text-green-800">
                    Proficiently
                  </h1>
                </div>
              </Link>

              <div className="hidden md:block">
                <nav aria-label="Site Nav">
                  <ul className="flex items-center gap-6 text-lg">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                      >
                        Features
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                      >
                        Testimonials
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="lg:flex sm:gap-4">
                  <Link
                    href={
                      sessionStatus === "authenticated"
                        ? "/account"
                        : "/auth/login"
                    }
                    className="rounded-md hover:bg-yellow-100 px-5 py-2.5 text-md font-medium hover:text-green-800 text-midnight"
                  >
                    {sessionStatus === "authenticated"
                      ? "Go to Dashboard"
                      : "Login"}
                  </Link>

                  <div className="hidden lg:flex">
                    <a
                      className="rounded-full bg-green-800 px-5 py-2.5 text-md font-medium text-white shadow hover:text-yellow-100"
                      href="/"
                    >
                      Get Started for Free
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="md:hidden" onClick={toggleMenu}>
                    {!showMenu ? (
                      <Bars3Icon className="w-8 h-8" />
                    ) : (
                      <XMarkIcon className="w-8 h-8" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="text-9xl text-center">
          <h1 className="mx-auto mb-12 max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl pt-32">
            <span className="relative whitespace-nowrap text-green-800">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-yellow-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Prepare</span>
            </span>{" "}
            for IB & Consulting Interviews on Demand
          </h1>
          <h3 className="text-2xl mb-6 text-gray-700">
            Proficiently is an all-in-one platform to land your dream offer!
          </h3>
        </div>

        <div className="flex items-center justify-center space-x-5">
          <Link href="/auth/login">
            <div className="px-10 py-3 text-center text-white bg-green-800 rounded-full shadow hover:bg-yellow-50 hover:text-green-800">
              Get Started
            </div>
          </Link>
          <a className="px-10 py-3 text-center text-green-800 rounded shadow hover:bg-yellow-50">
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
