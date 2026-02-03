import Image from "next/image";
import { Move, BatteryLow, Leaf } from 'lucide-react'; // Import icons

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVIGATION */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
  <div className="flex items-center gap-4">
    {/* LOGO IMAGE */}
    <Image 
      src="/logo.png" 
      alt="MoveWithSuryansh Logo" 
      width={55} 
      height={55} 
      className="object-contain"
      priority
    />
    
    {/* TEXT BRANDING MATCHING LOGO */}
    <div className="flex flex-col">
      <span className="font-playfair text-2xl font-bold text-brand-dark tracking-tight leading-none">
        MoveWithSuryansh
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-1 font-semibold">
        Workplace Wellness
      </span>
    </div>
  </div>

  <a href="mailto:movewithsuryansh@gmail.com" className="text-xs font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark/20 pb-1 hover:border-brand-dark transition-all">
    Inquire
  </a>
</nav>

      {/* HERO SECTION - THE HAZY WHITE VIBE */}
      <section className="py-20 px-6 text-center bg-[#F8F9F8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="uppercase tracking-[0.2em] text-sm text-slate-500 mb-6 font-semibold">
            Workplace Wellness
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl text-brand-dark mb-8 leading-tight italic">
  Movement & Recovery <br /> for Working Professionals
</h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Science-backed sessions designed to alleviate physical stiffness 
            and mental fatigue from long work hours.
          </p>
          <a href="#collaborate" className="inline-block bg-[#3E4A3E] text-white px-10 py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-700 transition">
            Book a Pilot Session
          </a>
        </div>
      </section>

      {/* THE CORE PILLARS */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
  {/* Column 1 */}
  <div className="text-center group">
    <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
      <Move className="text-slate-400 w-10 h-10 font-light" />
    </div>
    <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">Reset the Body</h3>
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      Gentle, effective movement sequences to relieve stiffness accumulated from desk work.
    </p>
  </div>

  {/* Column 2 */}
  <div className="text-center group">
    <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
      <BatteryLow className="text-slate-400 w-10 h-10 font-light" />
    </div>
    <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">Learn to Recover</h3>
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      Practical techniques to reduce nervous system stress and re-energize during the day.
    </p>
  </div>

  {/* Column 3 */}
  <div className="text-center group">
    <div className="w-24 h-24 bg-slate-50 rounded-full mb-8 mx-auto flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-white transition-colors">
      <Leaf className="text-slate-400 w-10 h-10 font-light" />
    </div>
    <h3 className="font-playfair text-2xl mb-4 italic text-slate-800">Do Less, Refresh More</h3>
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      No gym clothes. No heavy workouts. Just intentional relief for busy executives.
    </p>
  </div>
</section>

      {/* THE INITIATIVE DETAILS */}
      <section className="bg-[#F2F3F2] py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 shadow-sm border border-slate-100">
          <h2 className="font-playfair text-3xl mb-8 text-center text-slate-800">The Initiative</h2>
          <div className="space-y-8 max-w-2xl mx-auto text-slate-600 font-light text-lg">
            <p className="flex items-start">
              <span className="text-slate-400 mr-4">/</span>
              <span><strong>Designed for the Office:</strong> Our sessions happen in your boardrooms or workspaces. No logistics required.</span>
            </p>
            <p className="flex items-start">
              <span className="text-slate-400 mr-4">/</span>
              <span><strong>Science-Backed:</strong> We focus on mobility and recovery techniques proven to lower cortisol and increase focus.</span>
            </p>
            <p className="flex items-start">
              <span className="text-slate-400 mr-4">/</span>
              <span><strong>For All Levels:</strong> Whether you are an intern or the CEO, these movements are accessible to everyone.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="collaborate" className="py-24 px-6 text-center">
        <h2 className="uppercase tracking-[0.3em] text-xs text-slate-400 mb-6">Connect</h2>
        <p className="font-playfair text-3xl text-slate-800 mb-10 italic">Let’s move towards a better workday.</p>
        <div className="border border-slate-200 inline-block p-10 bg-[#FBFBFB]">
           <p className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">Free Pilot Sessions Open</p>
           <a href="mailto:movewithsuryansh@gmail.com" className="text-xl font-light text-slate-800 underline decoration-slate-300 underline-offset-8">
             movewithsuryansh@gmail.com
           </a>
           <p className="mt-6 text-xs text-slate-400">Limited slots available for Delhi / NCR Offices</p>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-slate-100">
        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
          © 2026 MoveWithSuryansh · Movement · Stress Recovery · Physical Wellness
        </p>
      </footer>
    </main>
  );
}