import LandingPageNavLink from "@/components/LandingPageNavLink";
import Link from "next/dist/client/link";

export default function RegisterPage() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-10 py-4 shadow-lg">
          <Link href="/" className="text-4xl font-medium">
            AgendAI
          </Link>

          <LandingPageNavLink href="/login">Log In</LandingPageNavLink>
        </nav>
      </header>
      <main>
        <section className="py-10 my-10 flex flex-col items-center gap-5 border border-gray-300 rounded-lg p-8 max-w-md mx-auto shadow-sm">
          <h1 className="text-4xl font-bold">Create an Account</h1>

          <p className="text-sm">
            Required fields indicated with{" "}
            <span className="text-red-600">*</span>
          </p>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-2xl font-medium">
                Email<span className="text-red-600">*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                className="text-lg border-2 rounded-sm border-gray-400 p-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-2xl font-medium ">
                First Name<span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="text-lg border-2 rounded-sm border-gray-400 p-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-2xl font-medium ">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                className="text-lg border-2 rounded-sm border-gray-400 p-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-2xl font-medium ">
                Password<span className="text-red-600">*</span>
              </label>

              <input
                type="password"
                id="password"
                name="password"
                required
                className="text-lg border-2 rounded-sm border-gray-400 p-1"
              />
            </div>

            <button
              type="submit"
              className="text-xl border w-fit self-center px-2 py-1 rounded-lg border-gray-500 bg-gray-500 text-white cursor-pointer hover:scale-110 transition duration-400"
            >
              Register
            </button>
          </form>

          <p className="flex flex-col items-center">
            Already have an account? <br />
            <Link href="/login" className="text-blue-400 underline">
              Log In
            </Link>
          </p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
