import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Flame, 
  Sparkles, 
  Shirt, 
  Compass, 
  Activity, 
  ArrowRight, 
  Heart,
  Smile,
  Music 
} from 'lucide-react';

export default function App() {
  // Dual-target countdown timer targeting June 20, 2026 (Early Bird) & June 27, 2026 (Event)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEarlyBird, setIsEarlyBird] = useState(true);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const earlyBirdDate = new Date('2026-06-20T23:59:59');
      const eventDate = new Date('2026-06-27T15:00:00');
      
      let targetDate = earlyBirdDate;
      if (now > earlyBirdDate) {
        setIsEarlyBird(false);
        targetDate = eventDate;
      } else {
        setIsEarlyBird(true);
      }

      const difference = targetDate - now;
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      q: "How different is a Groove Socials session from a typical dance class?",
      a: "The facilitator will still be leading warm-ups, basic technique drills, a dance sequence and cool down. The difference - if your typical dance class is a classroom, then Groove Socials is a playground. For those who've been around. 😎"
    },
    {
      q: "How different is a Groove Socials session from a typical dance fitness class?",
      a: "The facilitator will still ensure that you have had a chance to sweat it out and get your heart rate up. The difference - the vibe. It's more like sweating it out in Butter Factory! But at a bedtime-friendly hour. 😎"
    },
    {
      q: "What else is different at a Groove Socials session?",
      a: "As an age-friendly Chapter Two initiative, the facilitator will hold space for you to reconnect with your bodies, your favourite music and your favourite people. We will dance without the pressure of trying to outdo ourselves or others. That said, be prepared to still be stretched creatively and physically!"
    },
    {
      q: "What do I wear?",
      a: "We want you to take this opportunity to dress up if you don't often have the chance or the motivation to do so. You deserve to be noticed! Bring your own flavour. Add colour and energy to the dancefloor with your outfits. Play different characters. This is on top of ensuring that you are able to move comfortably in the workshop."
    },
    {
      q: "How will I be stretched creatively and physically? (Dancers at different levels)",
      a: "An important element of the workshop is the room to add your own flavour and style. Suggested moves and variations at different difficulty levels will be offered to those who may need it. As a community, generous exchange of creative material and moral support is also highly encouraged."
    },
    {
      q: "What genre of dance?",
      a: "We will be borrowing mainly from Hip Hop and related styles, depending on who is facilitating. The sessions will be driven by the need to vibe out and have movement-based conversations around our favourite Hip Hop, R&B and Funk music (1970s to 2000s). For progression and coherence, we will retain some basic drills to repeat and build on for each session even as facilitators change."
    },
    {
      q: "Will there be socialising since it is called 'Groove Socials'?",
      a: "You can expect more interaction than is usual for dance or fitness classes. The facilitator will open a space for you to mess around with the groove-based moves and sequence you have learnt. You will be able to interact with others and with the space, using any range of motion that is comfortable for you."
    },
    {
      q: "I'm not sure I can do this.",
      a: "We strive for Chapter Two initiatives to be age-friendly and accessible. Many physical or mental barriers can be easily overcome with adjustments—from the facilitator, from the class, from yourselves. And you're on your way to having a good time. Do reach out if you have any concerns (e.g. post-surgery; any disability). If you already know how we can support you, tell us. If not, let's prepare together ahead of time."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden">
      
      {/* Premium Amethyst Sunset Grid Style */}
      <style>{`
        .retro-grid {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(168, 85, 247, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(168, 85, 247, 0.04) 1px, transparent 1px);
        }
      `}</style>

      {/* Dynamic Top Announcement Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-rose-600 to-amber-500 text-white text-center py-2.5 px-4 text-xs md:text-sm font-semibold tracking-wide flex justify-center items-center gap-2">
        <Flame className="w-4 h-4 animate-pulse text-amber-200" />
        <span>
          {isEarlyBird 
            ? `SPECIAL ACCESS: Save $5 on Grown-Up tickets by booking before 20 June 2026!` 
            : `Secure your space for Saturday 27 June 2026! Limited slots remaining.`}
        </span>
        <a href="#register" className="underline hover:text-amber-200 ml-1 transition font-bold">Sign Up →</a>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/75 border-b border-purple-500/10 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
              GROOVE SOCIALS
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-950/40 text-purple-300 border border-purple-500/20">
              by Chapter Two
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-purple-300 transition">Philosophy</a>
            <a href="#grooves" className="hover:text-purple-300 transition">The Grooves</a>
            <a href="#workshop" className="hover:text-purple-300 transition">Details</a>
            <a href="#pricing" className="hover:text-purple-300 transition">Pricing</a>
            <a href="#faqs" className="hover:text-purple-300 transition">FAQs</a>
          </nav>

          <a 
            href="[https://forms.gle/64SjR8x2icU3ijEM6](https://forms.gle/64SjR8x2icU3ijEM6)" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white text-xs md:text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 flex items-center gap-2"
          >
            <span>Book Tickets</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION WITH DYNAMIC COUNTDOWN */}
      <section className="relative pt-20 pb-24 px-4 overflow-hidden border-b border-purple-950/20 retro-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-purple-950/15 -z-10" />
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            FOR RETURNING DANCERS & BRAND NEW ENTHUSIASTS
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none mb-6">
            FINDING YOUR WAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300">
              BACK TO DANCE
            </span> 👞🕶
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            As we arrive at the later half of our lives, it's no longer about how well we can dance but <strong className="text-white font-semibold">how long we can keep dancing.</strong> Let’s play!
          </p>

          {/* Quick Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="text-lg md:text-xl font-bold text-purple-300">SAT 27 JUN</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">Date</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="text-lg md:text-xl font-bold text-rose-300">3:00 - 4:30 PM</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">Time (SGT)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="text-lg md:text-xl font-bold text-amber-300">BURLINGTON SQ</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">Venue (SG)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="text-lg md:text-xl font-bold text-emerald-300">$30 Early Bird</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">Price (U.P. $35)</div>
            </div>
          </div>

          {/* LIVE TIMER COMPONENT */}
          <div className="max-w-md mx-auto p-6 rounded-3xl bg-slate-900/80 border border-purple-500/15 shadow-2xl relative mb-12 backdrop-blur-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
              {isEarlyBird ? "EARLY BIRD DEADLINE CLOSES IN" : "WORKSHOP COUNTDOWN"}
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center mt-2">
              <div>
                <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Days</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Hours</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Mins</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold font-mono text-rose-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Secs</div>
              </div>
            </div>

            {isEarlyBird && (
              <p className="text-xs text-amber-200 mt-4 font-medium">
                ⏳ Register before <strong className="font-bold underline">20 Jun 2026</strong> to catch early bird spaces!
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="[https://forms.gle/64SjR8x2icU3ijEM6](https://forms.gle/64SjR8x2icU3ijEM6)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-95 text-white font-extrabold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3 text-lg"
            >
              <span>Instant RSVP via Google Form</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
              Introducing Chapter Two
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              A gentle space for us and our bodies so that we can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">stay groovy and connected</span> even as we age.
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
              We formed <strong className="text-white font-semibold">Chapter Two</strong> to warmly welcome you to embrace this stage in dance and life. Dance is the ultimate form of freedom, self-expression, and a fantastic way to reconnect to your body and others who share the same love.
            </p>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
              Whether you are an elder millennial who still has a dancer's heart, or completely new to dance hoping to find a warm, supportive community without performance pressure – this space is carved out specially for you.
            </p>

            <div className="pt-4 border-t border-purple-500/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="p-3 bg-purple-500/10 rounded-2xl h-fit border border-purple-500/20">
                  <Smile className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">No Judgment Zone</h4>
                  <p className="text-xs md:text-sm text-slate-400">Absolutely zero pressure to outperform anyone. Just pure exploration and connection.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-3 bg-rose-500/10 rounded-2xl h-fit border border-rose-500/20">
                  <Heart className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Age-Friendly Movement</h4>
                  <p className="text-xs md:text-sm text-slate-400">Easy-to-follow, healthy progression suited for different mobility ranges and surgical returns.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 rounded-3xl blur opacity-25" />
            
            <div className="relative p-8 rounded-3xl bg-slate-900/90 border border-white/5 space-y-6">
              <div className="text-4xl">👞👢🧳👜🕶️</div>
              
              <blockquote className="text-lg md:text-xl italic text-slate-200 font-light leading-relaxed">
                "We want to carve out that safe space... Bring your inner young dancer out - let them play!"
              </blockquote>

              <div className="border-t border-purple-500/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 via-rose-400 to-amber-300 flex items-center justify-center font-bold text-slate-950">
                  C2
                </div>
                <div>
                  <div className="font-bold text-white text-sm md:text-base">The Chapter Two Collective</div>
                  <div className="text-xs text-slate-400">Singapore Dance Visionaries</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HISTORIC GENRE SOUNDTRACK MAP */}
      <section id="grooves" className="py-24 bg-slate-900/30 border-y border-purple-950/20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
              Playful Sounds & Vibes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Sweat it out to the Golden Era of Grooves
            </h2>
            <p className="text-slate-300 font-light leading-relaxed">
              We borrow mainly from Hip Hop, R&B, and Funk spanning the **1970s to 2000s**. Our movement sessions focus on building physical groove vocabulary and connecting deeply to high-tempo, nostalgic beats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-900 border border-purple-500/10 rounded-2xl">
                <div className="text-purple-300 text-base font-bold mb-1">70s Funk</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">Locking rhythm bases and deep expressive soul bounces.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-purple-500/10 rounded-2xl">
                <div className="text-rose-300 text-base font-bold mb-1">90s R&B</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">Smooth, continuous flow control and body isolation vocabulary.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-purple-500/10 rounded-2xl">
                <div className="text-amber-300 text-base font-bold mb-1">00s Hip Hop</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">High-energy syncopated footwork drills and classic style bounces.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 bg-slate-900/60 border border-purple-500/15 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-4 left-4 flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-[10px] text-rose-400 font-mono font-bold uppercase tracking-widest">Active Soundtrack</span>
              </div>
              
              <div className="my-10 flex flex-col items-center justify-center space-y-4">
                <Music className="w-16 h-16 text-rose-400 animate-pulse" />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white">1970s - 2000s Mixtape</h4>
                  <p className="text-xs text-slate-400 mt-1">Carefully curated for physical progression & timeless vibe</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-purple-500/10 pt-4">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Basic Rhythm Drills</span>
                  <span className="text-purple-300 font-semibold">100% Retained</span>
                </div>
                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-rose-500 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CLASSROOM VS PLAYGROUND DIFFERENCES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            The Concept
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Classroom vs. Playground
          </h2>
          <p className="text-slate-400 mt-2 font-light">
            If your typical dance class is a traditional classroom, then Groove Socials is a playground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl">🏫</div>
              <h3 className="text-xl font-bold text-white mt-2">The Typical Class</h3>
              <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">
                Focused heavily on matching precise synchronization, learning rapid custom choreography blocks, and maintaining intense execution pressure.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 tracking-wider uppercase font-semibold">Classroom Framework</span>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-3xl border border-purple-500/20 space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            <div>
              <div className="text-2xl">🛝</div>
              <h3 className="text-xl font-bold text-rose-300 mt-2">Groove Socials Playground</h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">
                Focused entirely on holding a comfortable, creative space. We dance without the pressure of trying to outdo ourselves or others, retaining simple, repeating movement mechanics.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-300 tracking-wider font-semibold uppercase">Playground Vibe</span>
          </div>
        </div>
      </section>

      {/* WORKSHOP DETAILS */}
      <section id="workshop" className="py-24 bg-slate-900/30 border-y border-purple-950/20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              Secure Your Slot
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Workshop Particulars</h2>
            <p className="text-slate-400 mt-2 font-light">
              Clear your Saturday afternoon schedule. Ready to groove at your own pace!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Detail Card 1 */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 relative group hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute top-8 right-8 text-purple-400 opacity-20">
                <Calendar className="w-10 h-10" />
              </div>
              <div className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-4">When</div>
              <h3 className="text-2xl font-black mb-2 text-white">Sat 27 Jun 2026</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Mark your calendars. A 1.5 hour special session including a gentle physical warm-up, core hip-hop rhythm drills, and a creative, playful routine sequence.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5" />
                <span>3:00 PM – 4:30 PM SGT</span>
              </div>
            </div>

            {/* Detail Card 2 */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 relative group hover:border-rose-500/30 transition-all duration-300">
              <div className="absolute top-8 right-8 text-rose-400 opacity-20">
                <MapPin className="w-10 h-10" />
              </div>
              <div className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-4">Where</div>
              <h3 className="text-2xl font-black mb-2 text-white">Burlington Square</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Conveniently located in downtown Singapore, easily accessible via MRT (Bencoolen & Bugis stations). Studio room details will be emailed to you instantly upon signing up.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-rose-300 bg-rose-500/15 px-2.5 py-1 rounded-md">
                <Compass className="w-3.5 h-3.5" />
                <span>Downtown Core, Singapore</span>
              </div>
            </div>

            {/* Detail Card 3 */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 relative group hover:border-amber-400/30 transition-all duration-300">
              <div className="absolute top-8 right-8 text-amber-400 opacity-20">
                <Shirt className="w-10 h-10" />
              </div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-4">What to Wear</div>
              <h3 className="text-2xl font-black mb-2 text-white">Dress Up & Bring Flavor</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                No strict uniforms. Add color, energy, or dress up as your favorite character. Ensure you can move comfortably and confidently in the workshop!
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md">
                <Activity className="w-3.5 h-3.5" />
                <span>Comfortable & Stylized</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-bold uppercase tracking-wider">
            Transparent Rates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Ticket Information</h2>
          <p className="text-slate-400 mt-2 font-light">
            Simple, honest pricing to keep our Singapore dance community active and thriving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Grown-Ups */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/5 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            {isEarlyBird && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-rose-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Early Bird active
              </span>
            )}
            <div>
              <h4 className="text-lg font-bold text-white">Grown-Ups</h4>
              <p className="text-xs text-slate-400 mt-1">For returning dancers & adult enthusiasts</p>
              
              <div className="my-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-purple-400">${isEarlyBird ? 30 : 35}</span>
                <span className="text-xs text-slate-500 font-mono">/ slot</span>
                {isEarlyBird && (
                  <span className="text-xs text-slate-500 line-through ml-1">U.P. $35</span>
                )}
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-purple-500/10 pt-6">
                <li className="flex items-center gap-2">🟢 Full 1.5-Hour Facilitated Workshop</li>
                <li className="flex items-center gap-2">🟢 Core Hip Hop & Funk Drills</li>
                <li className="flex items-center gap-2">🟢 Generous Moral Support & Community Vibe</li>
              </ul>
            </div>
            
            <a 
              href="[https://forms.gle/64SjR8x2icU3ijEM6](https://forms.gle/64SjR8x2icU3ijEM6)"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-750 text-white text-center font-bold text-sm rounded-xl border border-white/10 transition block"
            >
              Sign Up via Form
            </a>
          </div>

          {/* Young Ones */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-purple-500/25 flex flex-col justify-between relative backdrop-blur-sm">
            <div>
              <h4 className="text-lg font-bold text-rose-400">Young Ones</h4>
              <p className="text-xs text-slate-400 mt-1">Multi-generational playground slots</p>
              
              <div className="my-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-rose-400">$12</span>
                <span className="text-xs text-slate-500 font-mono">/ slot</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-purple-500/10 pt-6">
                <li className="flex items-center gap-2">🟢 Accompanied child/youngster entry</li>
                <li className="flex items-center gap-2">🟢 Fully accessible physical movement options</li>
                <li className="flex items-center gap-2">🟢 Ideal family bonding activity</li>
              </ul>
            </div>

            <a 
              href="[https://forms.gle/64SjR8x2icU3ijEM6](https://forms.gle/64SjR8x2icU3ijEM6)"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-90 text-white text-center font-bold text-sm rounded-xl transition block shadow-lg shadow-purple-500/10"
            >
              Book Early Slots
            </a>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section id="faqs" className="py-24 bg-slate-900/30 border-t border-purple-500/10 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-bold uppercase tracking-wider">
              FAQ Handbook
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Frequently Asked Questions</h2>
            <p className="text-slate-400 mt-2 font-light">
              Clear visual information directly extracted from our original community guide boards.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-900/60 rounded-2xl border border-white/5 p-6 backdrop-blur-sm"
              >
                <h4 className="font-extrabold text-white text-base md:text-lg mb-3 flex items-start gap-2">
                  <span className="text-purple-400 font-mono">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light pl-6 border-l border-purple-500/20">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="register" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-purple-950/15 to-slate-950 border-t border-purple-500/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-4xl">🕺💃🕶️</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Embrace Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300">Chapter Two</span> in Dance!
          </h2>
          <p className="text-slate-300 font-light max-w-lg mx-auto">
            Bring your inner young dancer out and let them play. No judgments, no stress, just pure community and great music.
          </p>

          <div className="p-4 bg-slate-900/60 rounded-2xl border border-white/5 inline-block text-xs font-mono">
            📌 <span className="text-amber-300">Sat 27 Jun 2026, 3:00 - 4:30 PM SGT</span> @ Burlington Square, SG
          </div>

          <div>
            <a 
              href="[https://forms.gle/64SjR8x2icU3ijEM6](https://forms.gle/64SjR8x2icU3ijEM6)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-95 text-white text-lg font-black rounded-full shadow-2xl shadow-purple-500/20 inline-flex items-center gap-3 hover:scale-105 transition transform"
            >
              <span>RSVP on Google Forms</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-xs text-slate-500 mt-3">
              Only limited slots available for Burlington Square studio.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-white/5 py-12 px-4 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-3">
            <span className="font-extrabold text-white tracking-widest text-lg">GROOVE SOCIALS</span>
            <span className="text-xs bg-slate-900 px-2 py-0.5 rounded border border-purple-500/25">CHAPTER TWO</span>
          </div>
          <p className="text-slate-400 max-w-md mx-auto font-light">
            An age-friendly dance and movement collective in Singapore. Creating space to reconnect with bodies, favourite music, and favourite people.
          </p>
          <div className="text-xs pt-4 border-t border-white/5">
            © 2026 Groove Socials. Crafted for Singapore's dance tribe.
          </div>
        </div>
      </footer>

    </div>
  );
}
