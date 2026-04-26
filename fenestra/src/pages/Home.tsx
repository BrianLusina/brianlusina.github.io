import { useEffect, useState } from "react";

/**
 * Fenestra Landing Page - Organic Modernism Design
 * 
 * Design Philosophy:
 * - Deep forest green primary with warm taupe accents
 * - Serif headlines (Playfair Display) + refined sans-serif body (Lato)
 * - Organic curved shapes and flowing layouts
 * - Soft shadows and gentle animations
 * - Cultivated minimalism with botanical accents
 * 
 * Mobile Design: 2x2 button grid with larger, more prominent buttons
 * Desktop Design: Horizontal button row
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "THOUGHTS", href: "#thoughts" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Organic Background with Generated Image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663102450075/7SREoju3hwqyVmKDm9Urui/fenestra_hero_bg-k6tZP79HoZonzQxAsbENAH.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 drop-shadow-lg">
            FENESTRA
          </h1>

          {/* Decorative Leaf Divider - SVG Line with Leaf */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 w-full">
            <div className="h-px flex-1 max-w-[40px] sm:max-w-[60px] bg-primary-foreground/50" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary-foreground leaf-accent flex-shrink-0"
            >
              <path d="M12 2c0 0-8 6-8 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-6-8-12-8-12z" />
              <path d="M12 6c0 0-4 3-4 8c0 2.2 1.8 4 4 4s4-1.8 4-4c0-5-4-8-4-8z" />
            </svg>
            <div className="h-px flex-1 max-w-[40px] sm:max-w-[60px] bg-primary-foreground/50" />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground font-light mb-1 sm:mb-2 drop-shadow-md">
            Cultivating a creative life,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground font-light mb-6 sm:mb-8 drop-shadow-md">
            rooted in natural design.
          </p>

          {/* Bottom Divider */}
          <div className="h-px w-16 sm:w-24 mx-auto bg-primary-foreground/50 mb-8 sm:mb-12" />

          {/* Navigation Buttons - 2x2 Grid on Mobile, Horizontal on Desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-wrap md:gap-4 md:justify-center w-full md:w-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="btn-organic-mobile md:btn-organic text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Hidden on Mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-primary-foreground/60 text-sm">↓ Scroll to explore</div>
        </div>
      </section>

      {/* Organic Divider */}
      <div className="divider-organic">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663102450075/7SREoju3hwqyVmKDm9Urui/fenestra_divider_top-m7tyseCmz4SwhKcdDCWMd3.webp"
          alt="organic divider"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Work Section */}
      <section id="work" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="container fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-4 sm:mb-6">Work</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-12">
            Explore a curated collection of creative projects that blend natural design
            principles with contemporary aesthetics. Each piece tells a story of thoughtful
            craftsmanship and intentional design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl text-primary/30">Project {item}</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-primary mb-2">Project Title {item}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    A brief description of this creative work and its impact.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-32 bg-primary/5">
        <div className="container fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-4 sm:mb-6">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl">
            <div>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Fenestra is a creative studio dedicated to cultivating thoughtful design
                that celebrates natural forms and organic beauty. We believe in the power
                of intentional design to transform spaces and inspire creativity.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Our approach combines contemporary design principles with botanical inspiration,
                creating work that feels both modern and rooted in nature.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl sm:text-6xl">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section id="thoughts" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="container fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-4 sm:mb-6">Thoughts</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-12">
            Reflections on design, creativity, and the intersection of nature and modern aesthetics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-card p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl text-primary mb-3">Thought {item}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  A thoughtful reflection on design principles and creative practice.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-medium text-sm sm:text-base">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-32 bg-primary/5">
        <div className="container text-center fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Have a project in mind? We'd love to hear from you. Let's create something
            beautiful together.
          </p>
          <a
            href="mailto:hello@fenestra.design"
            className="btn-organic inline-block"
          >
            Send us an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fenestra</h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">
                Cultivating a creative life, rooted in natural design.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/60">
            <p>&copy; 2026 Fenestra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
