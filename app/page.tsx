import Image from "next/image";
import { Move, BatteryLow, Leaf } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVIGATION */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="MoveWithSuryansh Logo"
            width={55}
            height={55}
            className="object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-playfair text-2xl font-bold text-brand-dark tracking-tight leading-none">
              MoveWithSuryansh
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-1 font-semibold">
              Workplace Wellness
            </span>
          </div>
        </div>

        <a
          href="mailto:movewithsuryansh@gmail.com"
          className="text-xs font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark/20 pb-1 hover:border-brand-dark transition-all"
        >
          Inquire
        </a>
      </nav>

      {/* HERO */}
      <section className="py-20 px-6 text-center bg-[#F8F9F8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="uppercase tracking-[0.2em] text-sm text-slate-500 mb-6 font-semibold">
            Workplace Wellness
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl text-brand-dark mb-8 leading-tight italic">
            Movement & Recovery <br /> for Working Professionals
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Science-backed movement sessions designed to relieve physical
            stiffness and restore daily energy.
          </p>
          <a
            href="#collaborate"
            className="inline-block bg-[#3E4A3E] text-white px-10 py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-700 transition"
          >
            Host a 30-Minute Pilot
          </a>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="text-center group">
          <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
            <Move className="text-slate-400 w-10 h-10" />
          </div>
          <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">
            Reset the Body
          </h3>
          <p className="text-slate-500 font-light leading-relaxed text-sm">
            Intentional movement to release stiffness accumulated from desk work.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
            <BatteryLow className="text-slate-400 w-10 h-10" />
          </div>
          <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">
            Recover During the Day
          </h3>
          <p className="text-slate-500 font-light leading-relaxed text-sm">
            Practical recovery practices that fit seamlessly into work hours.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
            <Leaf className="text-slate-400 w-10 h-10" />
          </div>
          <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">
            Minimal Effort, Real Relief
          </h3>
          <p className="text-slate-500 font-light leading-relaxed text-sm">
            No gym clothes. No intensity. Just relief for busy professionals.
          </p>
        </div>
      </section>

      {/* FORMAT (NO BREAKDOWN) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="uppercase tracking-[0.25em] text-xs text-slate-400 mb-4">
            The Format
          </h2>
          <h3 className="font-playfair text-4xl text-slate-800 italic mb-10">
            A 30-Minute Movement Reset
          </h3>
          <p className="text-slate-600 font-light text-lg leading-relaxed max-w-2xl mx-auto">
            Designed to fit seamlessly into the workday — offering movement
            without disruption, instruction overload, or performance pressure.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-slate-500">
            <span>No mats</span>
            <span>•</span>
            <span>No change of clothes</span>
            <span>•</span>
            <span>No fitness level required</span>
            <span>•</span>
            <span>In-office or online</span>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 px-6 bg-[#F8F9F8]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="uppercase tracking-[0.25em] text-xs text-slate-400 mb-4">
            Designed For
          </h2>
          <h3 className="font-playfair text-4xl text-slate-800 italic">
            Modern Work Environments
          </h3>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 text-slate-600 font-light">
          <p>• Corporate teams with long screen hours</p>
          <p>• Startups operating under high pressure</p>
          <p>• Founders and leadership teams</p>
          <p>• Coworking communities and shared offices</p>
        </div>
      </section>

      {/* INITIATIVE */}
      <section className="bg-[#F2F3F2] py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 shadow-sm border border-slate-100">
          <h2 className="font-playfair text-3xl mb-8 text-center text-slate-800">
            The Initiative
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto text-slate-600 font-light text-lg">
            <p>
              <strong>Designed for the Office:</strong> Sessions happen in
              boardrooms or workspaces. No logistics required.
            </p>
            <p>
              <strong>Science-Backed:</strong> Focused on mobility and recovery
              techniques that support sustained focus.
            </p>
            <p>
              <strong>Accessible:</strong> Suitable for all roles and seniority
              levels.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="collaborate" className="py-24 px-6 text-center">
        <h2 className="uppercase tracking-[0.3em] text-xs text-slate-400 mb-6">
          Connect
        </h2>
        <p className="font-playfair text-3xl text-slate-800 mb-10 italic">
          Let’s move towards a better workday.
        </p>
        <div className="border border-slate-200 inline-block p-10 bg-[#FBFBFB]">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">
            Free Pilot Sessions Open
          </p>
          <a
            href="mailto:movewithsuryansh@gmail.com"
            className="text-xl font-light text-slate-800 underline decoration-slate-300 underline-offset-8"
          >
            movewithsuryansh@gmail.com
          </a>
          <p className="mt-6 text-xs text-slate-400">
            Limited slots available for Delhi / NCR offices
          </p>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-slate-100">
        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
          © 2026 MoveWithSuryansh · Movement · Physical Recovery · Workplace
          Wellness
        </p>
      </footer>
    </main>
  );
}
