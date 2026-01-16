import Link from "next/dist/client/link";
import LandingPageNavLink from "@/components/LandingPageNavLink";

export default function LoginPage() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-10 py-4 shadow-lg">
          <Link href="/" className="text-4xl font-medium">
            AgendAI
          </Link>

          <LandingPageNavLink href="/register">Register</LandingPageNavLink>
        </nav>
      </header>
      <main>
        <section className="py-10 my-10 flex flex-col items-center gap-5 border border-gray-300 rounded-lg p-8 max-w-md mx-auto shadow-sm">
          <h1 className="text-4xl font-bold">Log In</h1>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-2xl font-medium">
                Email
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
              <label htmlFor="password" className="text-2xl font-medium ">
                Password
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
              Log In
            </button>
          </form>

          <p className="flex flex-col items-center">
            Don&#39;t have an account? <br />
            <Link href="/register" className="text-blue-400 underline">
              Register
            </Link>
          </p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
