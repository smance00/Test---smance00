import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { DEMO_MAIL } from "@/lib/utils";

type FooterVariant = "home" | "marketing";

export function SiteFooter({ variant = "home" }: { variant?: FooterVariant }) {
  const home = variant === "home";

  return (
    <footer
      className={
        home
          ? "mt-20 border-t border-border bg-surface-2 pt-16 md:mt-28 md:pt-20"
          : "border-t border-border bg-surface-2 pt-16 md:pt-20"
      }
    >
      <div
        className={
          home
            ? "container-app grid grid-cols-2 gap-x-10 gap-y-12 pb-12 md:grid-cols-4 md:pb-14"
            : "container-marketing grid grid-cols-2 gap-x-10 gap-y-12 pb-12 md:grid-cols-4 md:pb-14"
        }
      >
        <div>
          <h4
            className={
              home
                ? "font-display text-2xl font-semibold tracking-[-0.01em]"
                : "font-display text-lg font-bold tracking-[-0.01em]"
            }
          >
            Company
          </h4>
          <ul className={`mt-5 space-y-3 text-sm text-muted ${home ? "" : "mt-4"}`}>
            <li>
              <a className="transition hover:text-fg" href={DEMO_MAIL}>
                {home ? "Book a demo" : "Book a Consultation"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className={
              home
                ? "font-display text-2xl font-semibold tracking-[-0.01em]"
                : "font-display text-lg font-bold tracking-[-0.01em]"
            }
          >
            Explore
          </h4>
          <ul className={`space-y-3 text-sm text-muted ${home ? "mt-5" : "mt-4"}`}>
            <li>
              <a className="transition hover:text-fg" href="/#overview">
                Platform overview
              </a>
            </li>
            <li>
              <a className="transition hover:text-fg" href="/#integrations">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className={
              home
                ? "font-display text-2xl font-semibold tracking-[-0.01em]"
                : "font-display text-lg font-bold tracking-[-0.01em]"
            }
          >
            Product
          </h4>
          <ul className={`space-y-3 text-sm text-muted ${home ? "mt-5" : "mt-4"}`}>
            <li>
              <a className="transition hover:text-fg" href="/#learn">
                The model
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className={
              home
                ? "font-display text-2xl font-semibold tracking-[-0.01em]"
                : "font-display text-lg font-bold tracking-[-0.01em]"
            }
          >
            Resources
          </h4>
          <ul className={`space-y-3 text-sm text-muted ${home ? "mt-5" : "mt-4"}`}>
            <li>
              <a href="#" className="transition hover:text-fg">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-fg">
                Brand Assets
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-4 text-muted">
            <a href="#" aria-label="Twitter / X" className="transition hover:text-fg">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-fg">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-fg">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-fg">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {home ? (
        <div aria-hidden="true" className="container-app overflow-hidden pb-4 md:pb-6">
          <img
            alt=""
            src="/brand/wordmark-light.png"
            className="block h-auto w-full dark:hidden"
          />
          <img
            alt=""
            src="/brand/wordmark-dark.png"
            className="hidden h-auto w-full dark:block"
          />
        </div>
      ) : null}
    </footer>
  );
}
