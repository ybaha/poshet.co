import Link from "next/link";
import { CONTACT_EMAIL, footerGroups } from "@/data/studio";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto w-full max-w-[1400px] rounded-[28px] border border-studio-line bg-white p-6 md:rounded-panel md:p-10 lg:p-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-xs md:col-span-1">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-studio-muted">
              An independent studio designing and building websites and apps.
              Based in Türkiye, working worldwide.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-studio-muted">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-studio-navy transition-colors hover:text-studio-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-studio-muted">
              Contact
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[15px] text-studio-navy transition-colors hover:text-studio-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-blue"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-studio-line pt-6 text-sm text-studio-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Poshet. All rights reserved.</p>
          <p>Made with care in Türkiye.</p>
        </div>
      </div>
    </footer>
  );
}
