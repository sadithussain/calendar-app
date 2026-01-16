import LandingPageNavLink from "@/components/LandingPageNavLink";
import Link from "next/dist/client/link";

export default function LandingPage() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-10 py-4 shadow-lg">
          <Link href="/" className="text-4xl font-medium">
            AgendAI
          </Link>
          <ul className="flex gap-x-6">
            <li>
              <LandingPageNavLink href="/login">Log In</LandingPageNavLink>
            </li>
            <li>
              <LandingPageNavLink href="/register">Register</LandingPageNavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="py-20">
        <section className="flex flex-col items-center gap-20">
          <h2 className="text-8xl font-bold text-center">
            Streamline Your Schedule <br />
            Using AI
          </h2>

          <Link
            href="/register"
            className="text-3xl hover:text-blue-400 transition duration-400 relative inline after:absolute after:origin-left after:h-0.75 after:w-0 after:left-0 after:-bottom-1 after:transform after:duration-400 after:bg-blue-400 hover:after:w-full"
          >
            Get Started
          </Link>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
