import { motion } from 'framer-motion';
import { Ear, Scale, Sparkles, Home, Star, Target, Users, CheckCircle, Rocket, BookOpen, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStudioPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F6] overflow-x-hidden w-full selection:bg-[#9F835A] selection:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 sm:px-12 max-w-[1600px] mx-auto text-center lg:text-left relative isolate">
        <div className="absolute inset-0 -z-10 opacity-30 mask-radial-gradient">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#1C1C1A] leading-[1.1] mb-8">
              Where Design<br/><span className="text-[#9F835A] italic">Meets Intention.</span>
            </h1>
            <p className="font-jost text-lg sm:text-xl leading-[1.8] text-[#666663] max-w-2xl text-left">
              At Ajooni Jasleen Architects, we compose experiences, not just spaces. We believe good design tells your unique story, shaped by purpose, emotion, and place. It should feel right, breathe life, inspire, and truly belong.
            </p>
          </div>

          <div className="w-full lg:w-[55%] relative h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Studio/1758214998272%20(1).webp" 
              alt="Modern architectural studio interior" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Editorial Grid Sections */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-playfair text-4xl sm:text-5xl text-[#1C1C1A] mb-12">Our Philosophy</h2>
              <div className="space-y-10 focus-within:ring-0">
                <div className="group flex gap-6">
                  <div className="mt-1"><Ear className="w-8 h-8 text-[#9F835A] transition-transform duration-300 group-hover:scale-110" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Deep Listening</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">We listen to you, the site, and natural elements to reveal each project's unique soul.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Scale className="w-8 h-8 text-[#9F835A] transition-transform duration-300 group-hover:scale-110" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Balanced Process</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">Our approach blends intuition with precision, and creativity with context.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Sparkles className="w-8 h-8 text-[#9F835A] transition-transform duration-300 group-hover:scale-110" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Timeless Design</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">We craft modern expressions that transcend fleeting trends.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#1C1C1A] text-white p-12 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9F835A]/10 rounded-full blur-3xl" />
              <h2 className="font-playfair text-4xl sm:text-5xl text-white mb-12 relative z-10">What We Create</h2>
              <div className="space-y-10 relative z-10">
                <div className="group flex gap-6">
                  <div className="mt-1"><Home className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#9F835A] mb-2 uppercase tracking-wide">Diverse Projects</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-white/80">From private villas to commercial and hospitality spaces.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Star className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#9F835A] mb-2 uppercase tracking-wide">Core Pillars</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-white/80">Every design is founded on sustainability, craftsmanship, and emotion.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Target className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#9F835A] mb-2 uppercase tracking-wide">Purposeful Spaces</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-white/80">We design with restraint, allowing architecture to breathe and inspire.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full h-[1px] bg-[#EAEAEA] mb-32" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              className="bg-[#F8F8F6] p-12 sm:p-16 rounded-3xl border border-[#9F835A]/10 relative shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-playfair text-4xl sm:text-5xl text-[#1C1C1A] mb-12 relative z-10">How We Work</h2>
              <div className="space-y-10 relative z-10">
                <div className="group flex gap-6">
                  <div className="mt-1"><Users className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Collaborative Approach</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">Partnering with clients, craftsmen, and the environment.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><CheckCircle className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Aligned Vision</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">Great spaces emerge from shared understanding and goals.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Rocket className="w-8 h-8 text-[#9F835A]" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Precise Execution</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">We deliver with clarity, open communication, and meticulous precision.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="font-playfair text-4xl sm:text-5xl text-[#1C1C1A] mb-12">Our Core Belief</h2>
              <div className="space-y-10 focus-within:ring-0">
                <div className="group flex gap-6">
                  <div className="mt-1"><BookOpen className="w-8 h-8 text-[#9F835A] transition-transform duration-300 group-hover:scale-110" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Design as Meaning</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">We see design not as a product, but as a process of creating profound meaning.</p>
                  </div>
                </div>
                <div className="group flex gap-6">
                  <div className="mt-1"><Feather className="w-8 h-8 text-[#9F835A] transition-transform duration-300 group-hover:scale-110" /></div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C1A] mb-2 uppercase tracking-wide">Crafting Stories</h3>
                    <p className="font-jost text-[1.05rem] leading-[1.6] text-[#666663]">Each space is a unique story, meticulously crafted one at a time.</p>
                  </div>
                </div>
              </div>

              <div className="mt-14 inline-block bg-[#1C1C1A] hover:bg-[#9F835A] text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl cursor-pointer">
                <Link to="/#contact" className="block px-10 py-5 font-jost text-[0.8rem] uppercase tracking-[2px] font-medium">
                  Have a vision? Let's talk
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStudioPage;