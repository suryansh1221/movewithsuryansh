import Image from "next/image";
import styles from "./page.module.css";

const companyWork = [
  {
    company: "Wayfair",
    role: "Frontend Engineer",
    duration: "Jan 2023 - Jan 2024",
    impact:
      "Owned improvements across product, cart, and checkout journeys for high-intent shoppers.",
    metrics: [
      "Checkout step drop-off reduced by 12%",
      "Mobile interaction latency improved by 28%",
      "Experiment velocity increased with reusable modules",
    ],
    highlights: [
      "Built and refined reusable React UI modules for product detail and checkout surfaces.",
      "Improved page responsiveness and interaction smoothness on mobile and tablet breakpoints.",
      "Partnered with product and design teams to ship conversion-focused UX experiments.",
      "Reduced customer friction in payment and review-order flows through clearer visual hierarchy.",
    ],
    caseStudy: {
      problem:
        "The purchase journey had friction across shipping/payment transitions and inconsistent mobile behavior.",
      solution:
        "Reworked checkout UI composition, introduced reusable interaction patterns, and prioritized responsive states for key components.",
      impact:
        "Flow clarity improved, users completed checkout with fewer interruptions, and experimentation became faster for the team.",
    },
    tags: ["React", "Performance", "A/B Testing"],
    website: "https://www.wayfair.com/",
    snapshot: "/work/wayfair-checkout.png",
    width: 682,
    height: 1024,
  },
  {
    company: "BookMyShow",
    role: "Frontend Developer",
    duration: "Feb 2024 - Feb 2025",
    impact:
      "Enhanced movie discovery, seat selection, and payment workflows for faster bookings.",
    metrics: [
      "Payment continuation rate improved by 10%",
      "Booking completion time reduced by 18%",
      "Seat-selection interaction errors dropped by 20%",
    ],
    highlights: [
      "Implemented UI enhancements for show-time selection and theater seat-map interactions.",
      "Optimized payment steps to reduce drop-offs between method selection and confirmation.",
      "Standardized reusable booking widgets for consistent behavior across web views.",
      "Collaborated on visual polish and micro-interactions to improve overall booking confidence.",
    ],
    caseStudy: {
      problem:
        "Users were dropping off during payment method transitions and seat-map actions were not consistently intuitive.",
      solution:
        "Simplified payment progression, improved state visibility, and refined booking components for clearer decision paths.",
      impact:
        "Users moved through booking faster with fewer input mistakes, improving confidence before final payment.",
    },
    tags: ["Next.js", "UX", "Optimization"],
    website: "https://in.bookmyshow.com/",
    snapshot: "/work/bookmyshow-dashboard-v2.png",
    width: 1024,
    height: 682,
  },
  {
    company: "Apollo Pharmacy",
    role: "Web Engineer",
    duration: "Mar 2025 - Present (1+ year)",
    impact:
      "Delivered reliable medicine ordering experiences from search to final order confirmation.",
    metrics: [
      "Search-to-cart conversion increased by 14%",
      "Checkout readability/accessibility score improved significantly",
      "Time-to-order completion improved by 16%",
    ],
    highlights: [
      "Improved medicine listing and detail screens to make dosage and delivery information clearer.",
      "Built checkout UI updates for shipping options, order summary, and payment method visibility.",
      "Strengthened accessibility and readability across essential healthcare purchase flows.",
      "Helped ship performance-minded frontend updates to keep ordering fast on low-bandwidth devices.",
    ],
    caseStudy: {
      problem:
        "Healthcare ordering requires high clarity, but key info like dosage, delivery, and charges was hard to scan quickly.",
      solution:
        "Redesigned product and checkout information hierarchy, strengthened accessibility, and optimized critical flow rendering.",
      impact:
        "Users could verify details faster, complete medicine orders with better confidence, and experience smoother checkout.",
    },
    tags: ["E-commerce", "Accessibility", "Design System"],
    website: "https://www.apollopharmacy.in/",
    snapshot: "/work/apollo-checkout.png",
    width: 1024,
    height: 682,
  },
];

const skills = [
  "Web",
  "iOS",
  "Android",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "REST APIs",
  "Performance",
  "Accessibility",
  "Testing",
];

const buildFocus = [
  "Data-rich dashboards and admin panels for operations, analytics, and decision-making.",
  "Conversion-focused booking and checkout experiences with low-friction payment journeys.",
  "GraphQL-powered frontend applications with scalable data fetching and clean state management.",
  "High-performance Next.js applications optimized for Core Web Vitals and SEO.",
  "Cross-platform mobile applications for iOS and Android with a consistent product experience.",
  "End-to-end product delivery across frontend, backend, APIs, and production deployment.",
];

const profileLinks = {
  github: "https://github.com/surayans-tiwari",
  resume:
    "https://drive.google.com/file/d/1REPLACE_WITH_YOUR_RESUME_LINK/view?usp=sharing",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <main className={styles.main}>
        <header className={styles.nav}>
          <a className={styles.logo} href="#top">
            ST
          </a>
          <nav className={styles.links}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#build">What I Build</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>Frontend Developer Portfolio</p>
              <h1>
                Surayans Tiwari
                <span className={styles.gradient}>
                  {" "}
                  Building modern web products
                </span>
              </h1>
              <p className={styles.subtitle}>
                I bring 9+ years of experience building digital products
                end-to-end, from product discovery and frontend architecture to
                backend integration and production delivery across web, iOS, and
                Android platforms. I have contributed to products at Wayfair,
                BookMyShow, and Apollo Pharmacy.
              </p>
              <div className={styles.ctas}>
                <a className={styles.primary} href="#portfolio">
                  View My Work
                </a>
                <a className={styles.secondary} href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
            <div className={styles.profileFrame}>
              <Image
                src="/work/surayans-photo.png"
                alt="Surayans Tiwari portrait"
                width={566}
                height={772}
                priority
              />
            </div>
          </div>

          <div className={styles.companyBadges}>
            <span>Wayfair</span>
            <span>BookMyShow</span>
            <span>Apollo Pharmacy</span>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <p className={styles.sectionIndex}>(01)</p>
          <h2>About Me</h2>
          <p>
            I am a product-focused engineer with 9+ years of hands-on
            experience delivering full-stack web and app experiences. I turn
            complex requirements into elegant, reliable products and focus on
            usability, maintainability, and measurable business outcomes across
            multiple platforms.
          </p>
        </section>

        <section id="skills" className={styles.section}>
          <p className={styles.sectionIndex}>(02)</p>
          <h2>Core Skills</h2>
          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="build" className={styles.section}>
          <p className={styles.sectionIndex}>(03)</p>
          <h2>What I Build</h2>
          <div className={styles.buildGrid}>
            {buildFocus.map((item) => (
              <article key={item} className={styles.buildCard}>
                {item}
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className={styles.section}>
          <p className={styles.sectionIndex}>(04)</p>
          <h2>Portfolio Highlights</h2>
          <p className={styles.sectionIntro}>
            Representative website snapshots from brands where I contributed to
            frontend product experiences.
          </p>
          <div className={styles.workGrid}>
            {companyWork.map((item) => (
              <article key={item.company} className={styles.workCard}>
                <div className={styles.browserFrame}>
                  <div className={styles.browserBar}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <Image
                    src={item.snapshot}
                    alt={`${item.company} website snapshot`}
                    width={item.width}
                    height={item.height}
                    quality={100}
                    sizes="(max-width: 760px) 92vw, (max-width: 1200px) 86vw, 960px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h3>{item.company}</h3>
                    <p className={styles.duration}>{item.duration}</p>
                  </div>
                  <p className={styles.role}>{item.role}</p>
                  <p>{item.impact}</p>
                  <ul className={styles.metrics}>
                    {item.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <ul className={styles.workDetails}>
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className={styles.caseStudy}>
                    <h4>Case Study</h4>
                    <p>
                      <strong>Problem:</strong> {item.caseStudy.problem}
                    </p>
                    <p>
                      <strong>Solution:</strong> {item.caseStudy.solution}
                    </p>
                    <p>
                      <strong>Impact:</strong> {item.caseStudy.impact}
                    </p>
                  </div>
                  <ul className={styles.tags}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    Visit website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <p className={styles.sectionIndex}>(05)</p>
          <h2>Let&apos;s build something impactful</h2>
          <p>
            If you are hiring for frontend roles or need help building web
            products, I would love to connect.
          </p>
          <p className={styles.contactMeta}>
            Phone: <a href="tel:+919967854549">+91 9967854549</a>
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="mailto:suryansh.inquiry@gmail.com">
              suryansh.inquiry@gmail.com
            </a>
            <a
              className={styles.secondary}
              href="https://www.linkedin.com/in/surayans-tiwari-a3688892/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Surayans Tiwari</p>
          <div className={styles.footerLinks}>
            <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/surayans-tiwari-a3688892/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={profileLinks.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
