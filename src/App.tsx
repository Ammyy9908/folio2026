import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Star
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

const testimonials = [
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma1",
    rating: 5
  },
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma2",
    rating: 5
  },
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma3",
    rating: 5
  },
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma4",
    rating: 5
  },
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma5",
    rating: 5
  },
  {
    quote: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    author: "Gemma Nolen",
    company: "Google",
    image: "https://i.pravatar.cc/150?u=gemma6",
    rating: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a link or button
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button');
      setIsHovering(!!isLink);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 lg:cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden lg:flex items-center justify-center rounded-full mix-blend-multiply"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 5 : 1,
          backgroundColor: isHovering ? "rgba(254, 240, 138, 0.8)" : "transparent",
          border: isHovering ? "0px solid transparent" : "2px solid #10b981",
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300, 
          mass: 0.5,
          scale: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-emerald-500 rounded-full"
          animate={{ opacity: isHovering ? 0 : 1 }}
        />
      </motion.div>
      
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
            {["Work", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
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

      {/* Testimonial Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">Testimonial</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-zinc-50 rounded-lg flex flex-col justify-between"
              >
                <p className="text-zinc-900 font-semibold text-lg leading-relaxed mb-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-zinc-900 text-zinc-900" />
                      ))}
                    </div>
                    <h4 className="font-bold text-zinc-900">{testimonial.author}</h4>
                    <p className="text-zinc-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight text-zinc-900">Lets work together</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-12 max-w-lg">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com 
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
              <div className="flex gap-6 items-center">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src="https://cdn.simpleicons.org/discord/000000" alt="Discord" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src="https://cdn.simpleicons.org/facebook/000000" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src="https://cdn.simpleicons.org/dribbble/000000" alt="Dribbble" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src="https://cdn.simpleicons.org/instagram/000000" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <img src="https://cdn.simpleicons.org/behance/000000" alt="Behance" className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-start">
              <form className="space-y-4 max-w-md lg:ml-auto w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-6 py-4 bg-zinc-100 border-none focus:ring-1 focus:ring-zinc-400 transition-all outline-none text-zinc-900 placeholder:text-zinc-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 bg-zinc-100 border-none focus:ring-1 focus:ring-zinc-400 transition-all outline-none text-zinc-900 placeholder:text-zinc-500"
                />
                <div className="pt-4">
                  <button className="px-16 py-5 bg-[#2D2D2D] text-white font-bold text-lg hover:bg-zinc-900 transition-all">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
