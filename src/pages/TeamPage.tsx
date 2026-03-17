
import { motion } from 'framer-motion';

import {
  Building,
  Users,
  Trophy,
  Rocket,
  Star
} from 'lucide-react';

const TeamPage = () => {


  const teamMembers = [
    {
      id: 1,
      name: 'Sugandha Sharma',
      position: 'Business Head',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/SUGANDHA.jpg'
    },
    {
      id: 2,
      name: 'Ritika Anand',
      position: 'Architect',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Ritika%20Anand%20.jpg'
    },
    {
      id: 3,
      name: 'Neha Singh',
      position: 'Senior Architect',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/IMG-20251018-WA0021.jpg'
    },
    {
      id: 4,
      name: 'Tejika Pahwa',
      position: 'Senior Interior Designer',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Tejika_copy_3024x4032.jpg'
    },
    {
      id: 5,
      name: 'Komal Sahoo',
      position: 'Interior Designer and 3D Visualiser',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/SAVE_20251018_115721.jpg'
    },
    {
      id: 6,
      name: 'Sanpreet Singh',
      position: '3D Expert',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Sanpreet%20Singh.jpg'
    },
    {
      id: 7,
      name: 'Ranjit Singh (Sajan)',
      position: 'Site Engineer',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Mr.%20Ranjeet%20Singh.jpg'
    },
    {
      id: 8,
      name: 'Ranjit Singh (Rana)',
      position: 'Site Engineer',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/IMG-20251018-WA0033.jpg',
    },
    {
      id: 9,
      name: 'Gurjeet Singh',
      position: 'Interior Designer (Intern)',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/SAVE_20251018_115710_copy_4312x5760.jpg'
    },
    {
      id: 10,
      name: 'Raman Preet Kaur',
      position: 'Accountant',
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Ramanpreet%20Kaur%20.jpg'
    }
  ];

  const careerMilestones = [
    {
      year: '2018',
      title: 'A Strong Start',
      description: 'She began her journey as a freelance architect, successfully completing a diverse portfolio that included 3 farmhouses and 56 residential projects.',
      icon: <Rocket className="w-6 h-6 text-luxury-gold" />
    },
    {
      year: '2022',
      title: 'Founding a Firm',
      description: 'Ar. Jasleen founded her own practice, Ajooni Jasleen. That same year, the firm secured a major client, the Chennai Maratha restaurant chain.',
      icon: <Building className="w-6 h-6 text-luxury-gold" />
    },
    {
      year: '2023',
      title: 'Project Success & Community Initiative',
      description: 'She led her team to deliver four restaurants for Chennai Maratha. Concurrently, she launched Shiddat 1.0, her flagship event for the creative community.',
      icon: <Users className="w-6 h-6 text-luxury-gold" />
    },
    {
      year: '2024',
      title: 'Scaling New Heights',
      description: 'Her firm embarked on its first township project, marking a significant expansion into large-scale development, while she hosted the second successful edition, Shiddat 2.0.',
      icon: <Trophy className="w-6 h-6 text-luxury-gold" />
    },
    {
      year: '2025',
      title: 'A Landmark Year',
      description: 'She celebrated a major career milestone, having led the delivery of 50 design projects. She also continued her commitment to the industry with Shiddat 3.0.',
      icon: <Star className="w-6 h-6 text-luxury-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-luxury-ivory overflow-x-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
            Meet Our Team
          </h1>
          <motion.p 
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Visionaries Behind Every Design.
          </motion.p>
        </motion.div>
      </section>

      {/* About Ar. Jasleen Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="font-cormorant text-4xl sm:text-4xl font-bold text-luxury-charcoal mb-6">About Ar. Jasleen</h2>
              <p className="font-poppins text-luxury-charcoal mb-6 leading-relaxed">
                Ar. Jasleen is a dynamic architect known for her design excellence and commitment to community building. Her career launched in 2018 with a successful freelance practice, where she delivered an impressive portfolio of 56 residences, 3 farmhouses, and other notable projects like Antlerwood and Saidpur. This strong foundation led her to establish her own firm, Ajooni Jasleen, in 2022.
              </p>
              <p className="font-poppins text-luxury-charcoal leading-relaxed">
                In addition to her architectural work, Ar. Jasleen is the founder of Shiddat, an annual initiative she started in 2023 to connect professionals across the architecture, construction, and art industries. Her career is a testament to a dual passion: creating exceptional spaces and fostering a collaborative professional environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Team/Jasleen_copy_2667x4000.jpg" 
                  alt="Ar. Jasleen - Principal Architect" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Subtle Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 opacity-70" />
                
                {/* Animated Name Appearance */}
                <motion.div
                  className="absolute bottom-4 left-4 text-white font-poppins text-2xl font-light drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <span>AR. JASLEEN</span>
                  <motion.div
                    className="h-px bg-white/70 mt-1"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Career Milestones Section */}
      <motion.section 
        className="py-20 bg-luxury-ivory"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-8 text-center">
            Career Milestones
          </h2>
          <p className="font-cormorant text-lg text-luxury-charcoal leading-relaxed text-center mb-12">
            Ar. Jasleen's career is marked by rapid growth and significant achievements in both design and community leadership.
          </p>
          
          <div className="space-y-8">
            {careerMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-cormorant text-white font-bold text-lg">{milestone.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    {milestone.icon}
                    <h3 className="font-cormorant text-xl font-bold text-luxury-charcoal ml-3">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="font-poppins text-luxury-charcoal/80 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Complete Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Subheading */}
          <div className="text-center mb-16">
            <p className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light max-w-4xl mx-auto">
              Meet the people who shape our spaces and bring our designs to life.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.filter((member: any) => !member.hidden).map((member, index) => (
              <motion.div
                key={member.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 shadow-lg transform transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:scale-[1.03]">
                  {/* Portrait Image */}
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-110"
                    loading="lazy"
                  />

                  {/* Soft Light Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/0 to-transparent transition-opacity duration-700 ease-out" />

                  {/* Bottom-left Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="transform transition-all duration-700 ease-out translate-y-0 group-hover:-translate-y-1">
                      {/* Name */}
                      <h3 className="font-cormorant text-xl font-semibold text-luxury-charcoal mb-1 drop-shadow-sm">
                        {member.name}
                      </h3>

                      {/* Position */}
                      <p className="font-cormorant text-base italic font-light text-luxury-charcoal/80 drop-shadow-sm">
                        {member.position}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Border Accent on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;