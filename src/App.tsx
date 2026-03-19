import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers,
  ChevronRight,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work1/800/600"
  },
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work2/800/600"
  },
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work3/800/600"
  },
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work4/800/600"
  },
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work5/800/600"
  },
  {
    title: "Project title",
    subtitle: "UI, Art drection",
    image: "https://picsum.photos/seed/work6/800/600"
  }
];

const skills = [
  { name: "Frontend", icon: <Globe className="w-5 h-5" />, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { name: "Design", icon: <Palette className="w-5 h-5" />, items: ["Figma", "UI/UX", "Motion Design", "Adobe CC"] },
  { name: "Tools", icon: <Cpu className="w-5 h-5" />, items: ["Git", "Docker", "AWS", "Vercel"] }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight text-zinc-900"
          >
            Logo
          </motion.div>
          <div className="flex gap-10 text-[15px] font-medium text-zinc-600">
            {["About", "Work", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`} 
                className="hover:text-zinc-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-zinc-900 font-bold text-lg mb-4 block">
                Branding | Image making
              </span>
              <h1 className="text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
                Visual Designer
              </h1>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed max-w-md">
                This is a template Figma file, turned into code using Anima. 
                Learn more at AnimaApp.com
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2D2D2D] text-white px-12 py-5 text-lg font-bold transition-all"
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Right Image with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[400px] h-[500px]">
                {/* Main Image with Arch Shape */}
                <div className="w-full h-full rounded-t-full overflow-hidden bg-zinc-100 relative z-10">
                  <img 
                    src="https://picsum.photos/seed/designer/800/1000" 
                    alt="Visual Designer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Decorative Shapes */}
                {/* Red Quarter Circle Top Right */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6347] rounded-tr-full z-20" />
                
                {/* Teal Shape Bottom Left */}
                <div className="absolute bottom-10 -left-16 w-32 h-32 bg-[#009688] rounded-tl-[4rem] rounded-br-[4rem] z-20" />

                {/* Decorative Lines/Dots (Simplified) */}
                <div className="absolute top-10 -left-10 w-12 h-12 border-l border-t border-zinc-900 z-0" />
                <div className="absolute bottom-20 -right-10 w-16 h-px bg-zinc-900 z-0 flex items-center justify-between">
                  <div className="w-1 h-1 bg-zinc-900 rounded-full" />
                  <div className="w-1 h-1 bg-zinc-900 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <img src="https://cdn.simpleicons.org/google/000000" alt="Google" className="h-8 md:h-10" />
            <img src="https://cdn.simpleicons.org/nike/000000" alt="Nike" className="h-8 md:h-12" />
            <img src="https://cdn.simpleicons.org/samsung/000000" alt="Samsung" className="h-6 md:h-8" />
            <img src="https://cdn.simpleicons.org/apple/000000" alt="Apple" className="h-8 md:h-10" />
            <img src="https://cdn.simpleicons.org/adidas/000000" alt="Adidas" className="h-8 md:h-12" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Product Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-40 h-40 bg-[#F3B1A5] rounded-t-full mb-10 relative flex items-center justify-center">
                <div className="absolute w-12 h-12 border-r border-t border-zinc-900 -rotate-45" />
                <div className="absolute w-1 h-1 bg-zinc-900 rounded-full -translate-x-4 translate-y-4" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Design</h3>
              <p className="text-zinc-600 leading-relaxed max-w-[280px]">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
            </motion.div>

            {/* Visual Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-40 h-40 bg-[#FF6347] rounded-tr-full mb-10 relative flex items-center justify-center">
                <div className="absolute w-16 h-px bg-zinc-900 rotate-[-45deg]" />
                <div className="absolute w-1 h-1 bg-zinc-900 rounded-full -translate-x-4 translate-y-4" />
                <div className="absolute w-1 h-1 bg-zinc-900 -translate-y-12 translate-x-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visual Design</h3>
              <p className="text-zinc-600 leading-relaxed max-w-[280px]">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
            </motion.div>

            {/* Art Direction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-40 h-40 bg-[#009688] rounded-tl-full rounded-br-full mb-10 relative flex items-center justify-center">
                <div className="absolute w-16 h-px bg-zinc-900 rotate-[-45deg]" />
                <div className="absolute w-1 h-1 bg-zinc-900 rounded-full -translate-x-6 translate-y-6" />
                <div className="absolute w-1 h-1 bg-zinc-900 rotate-45 translate-x-4 -translate-y-4" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Art Direction</h3>
              <p className="text-zinc-600 leading-relaxed max-w-[280px]">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">Latest work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-zinc-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-zinc-500 text-sm">{project.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 relative group"
            >
              <img 
                src="https://picsum.photos/seed/profile/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 rounded-3xl" />
            </motion.div>
            <div>
              <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">About Me</span>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Passionate about bridging the gap between design and code.</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                With over 4 years of experience in the digital space, I've helped startups and 
                established companies build products that are not only beautiful but also 
                highly functional.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                I believe that great software is built at the intersection of empathy, 
                engineering, and aesthetics. My goal is to create tools that empower 
                users and solve real-world problems.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zinc-900">40+</div>
                  <div className="text-sm text-zinc-500">Projects Done</div>
                </div>
                <div className="w-px h-12 bg-zinc-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-zinc-900">15+</div>
                  <div className="text-sm text-zinc-500">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 block">Expertise</span>
            <h2 className="text-4xl font-bold tracking-tight">My Tech Stack</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-zinc-400 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Let's work together on your next project.</h2>
                <p className="text-emerald-100 text-lg mb-10">
                  I'm currently available for freelance work and full-time positions. 
                  Let's turn your idea into reality.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:hello@sandhya.dev" className="flex items-center gap-4 text-xl font-medium hover:text-emerald-200 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    hello@sandhya.dev
                  </a>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-zinc-900 shadow-2xl">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                  </div>
                  <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-700 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-zinc-500">
            © 2026 Sandhya. Built with React & Tailwind.
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
