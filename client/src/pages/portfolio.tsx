import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { useSmoothScroll, useActiveSection } from '@/components/ui/smooth-scroll';
import logo from '../images/images.jpeg'; 
import logo1 from '../images/IIT-BHU_Logo.svg.png';
import suraj1 from '../images/suraj3.png';// adjust path as needed
import Resume from '../images/Suraj_Verma_Resume.pdf'; 


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useSmoothScroll();
  useActiveSection();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-inter antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3">
  <div className="w-10 h-10 rounded-lg overflow-hidden">
    <img 
      src={logo} 
      alt="IIT Logo or Your Photo" 
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <h1 className="text-xl font-bold text-slate-900">Suraj Verma</h1>
    <p className="text-xs text-slate-600">Software Engineer</p>
  </div>
</div>

            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Skills</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Projects</a>
              <a href="#experience" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Experience</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-slate-700"></i>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-200">
                <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="#skills" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">Skills</a>
                <a href="#projects" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">Projects</a>
                <a href="#experience" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">Experience</a>
                <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm <span className="text-blue-600">Suraj Verma</span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600">
                  <TypingAnimation 
                    texts={['Software Engineer', 'AI/ML Developer', 'Full Stack Developer']}
                    className="text-blue-600 font-medium"
                  />
                </div>
                <p className="text-lg text-slate-600 max-w-xl">
                  Solving real-world problems through code, data, and intelligent systems.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="#contact">
                    Get In Touch
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Button>
                <Button variant="outline" asChild>
                <a href={Resume} download="Suraj-Verma-Resume.pdf">
                    <i className="fas fa-download mr-2"></i>
                    Download Resume
                  </a>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">IIT BHU</div>
                  <div className="text-sm text-slate-600">Graduate</div>
                </div>
                
                <div className="text-center w-full max-w-xs mx-auto">
  <div className="text-2xl font-bold text-blue-700 whitespace-nowrap">
    Software & AI/ML 
  </div>
  <div className="text-sm text-slate-600 mt-1">
  Enthusiast
  </div>
</div>
</div>
</div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-[7px] border-white bg-white shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    > 
      <img 
        src={suraj1}
        alt="Suraj Verma"
        className="w-full h-full object-cover"
        
      />
    </div>
    
  </div>
</div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate about leveraging technology to solve complex problems and create meaningful impact.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">My Journey</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I am a B.Tech graduate in <strong>Chemical Engineering</strong> from <strong>IIT (BHU), Varanasi</strong>, 
                  one of India's premier technical institutions. Currently, I work as an   
                   <strong>Associate Software Engineer at Tudip Technologies</strong>, where I apply my 
                  technical skills to develop innovative solutions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  My interests span across <strong>AI/ML</strong>, <strong>Web Development</strong>, 
                  and <strong>Data Analytics</strong>. I believe in the power of technology to transform 
                  industries and improve lives, and I'm committed to continuous learning and growth 
                  in these rapidly evolving fields.
                </p>
              </div>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">Education</div>
                  <div className="text-slate-700">IIT (BHU) Varanasi</div>
                  <div className="text-sm text-slate-600">Chemical Engineering</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold">Current Role</div>
                  <div className="text-slate-700">Associate SWE</div>
                  <div className="text-sm text-slate-600">Tudip Technologies</div>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <i className="fas fa-graduation-cap text-3xl text-blue-600 mb-3"></i>
                    <div className="font-semibold text-slate-900">IIT Graduate</div>
                    <div className="text-sm text-slate-600">Premier Institution</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <i className="fas fa-brain text-3xl text-emerald-600 mb-3"></i>
                    <div className="font-semibold text-slate-900">AI/ML Focus</div>
                    <div className="text-sm text-slate-600">Future Tech</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <i className="fas fa-code text-3xl text-blue-600 mb-3"></i>
                    <div className="font-semibold text-slate-900">Full Stack</div>
                    <div className="text-sm text-slate-600">Web Development</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <i className="fas fa-chart-line text-3xl text-purple-600 mb-3"></i>
                    <div className="font-semibold text-slate-900">Data Analytics</div>
                    <div className="text-sm text-slate-600">Insights Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, intelligent applications.
            </p>
          </div>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <i className="fab fa-python text-3xl text-blue-600 mb-3"></i>
                <div className="font-semibold text-slate-900">Python</div>
                <div className="text-sm text-slate-600">ML & Backend</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <i className="fas fa-code text-3xl text-red-600 mb-3"></i>
                <div className="font-semibold text-slate-900">C++</div>
                <div className="text-sm text-slate-600">DSA & Performance</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <i className="fab fa-js-square text-3xl text-yellow-600 mb-3"></i>
                <div className="font-semibold text-slate-900">JavaScript</div>
                <div className="text-sm text-slate-600">Frontend & Backend</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-200">
                <i className="fas fa-database text-3xl text-green-600 mb-3"></i>
                <div className="font-semibold text-slate-900">SQL</div>
                <div className="text-sm text-slate-600">Database Management</div>
              </Card>
            </div>
          </div>
          
          {/* Technologies & Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Technologies & Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fab fa-react text-2xl text-blue-500 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">MERN Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Express.js</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-brain text-2xl text-purple-600 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">Machine Learning</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">NumPy</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chart-bar text-2xl text-green-600 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">Data Analytics</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Power BI</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Data Viz</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-palette text-2xl text-pink-600 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">HTML5</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-2xl text-orange-600 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">VS Code</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Jupyter</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-puzzle-piece text-2xl text-indigo-600 mr-3"></i>
                  <h4 className="font-semibold text-slate-900">Problem Solving</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">DSA</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Algorithms</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Codeforces</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my work in machine learning, web development, and data analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="project-card bg-slate-50 hover:shadow-xl transition-shadow duration-300 stagger-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-flask text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Ethanol Concentration Prediction</h3>
                <p className="text-slate-600 mb-4">
                  Machine learning model to predict ethanol concentration using chemical process parameters. 
                  Applied regression techniques and feature engineering for accurate predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Machine Learning</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Scikit-learn</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fab fa-github mr-2"></i>
                  <span>Chemical Engineering + ML</span>
                </div>
              </div>
            </Card>
            
            {/* Project 2 */}
            <Card className="project-card bg-slate-50 hover:shadow-xl transition-shadow duration-300 stagger-2">
              <div className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-newspaper text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Fake News Detection</h3>
                <p className="text-slate-600 mb-4">
                  NLP-powered system to identify fake news articles using advanced text processing 
                  and machine learning algorithms. Achieved high accuracy in news classification.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">NLP</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Text Mining</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fab fa-github mr-2"></i>
                  <span>Natural Language Processing</span>
                </div>
              </div>
            </Card>
            
            {/* Project 3 */}
            <Card className="project-card bg-slate-50 hover:shadow-xl transition-shadow duration-300 stagger-3">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-coffee text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Coffee Shop Dashboard</h3>
                <p className="text-slate-600 mb-4">
                  Interactive business intelligence dashboard for coffee shop analytics. 
                  Combines SQL database management with Power BI visualizations for insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">Power BI</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">SQL</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Analytics</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fas fa-chart-line mr-2"></i>
                  <span>Business Intelligence</span>
                </div>
              </div>
            </Card>
            
            {/* Project 4 */}
            <Card className="project-card bg-slate-50 hover:shadow-xl transition-shadow duration-300 stagger-4">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-memory text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">LRU Cache Chat List</h3>
                <p className="text-slate-600 mb-4">
                  Efficient chat list implementation using LRU (Least Recently Used) cache algorithm. 
                  Optimized for memory management and fast access patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">DSA</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">C++</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Algorithms</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fas fa-cogs mr-2"></i>
                  <span>Data Structures & Algorithms</span>
                </div>
              </div>
            </Card>
            
            {/* Project 5 */}
            <Card className="project-card bg-slate-50 hover:shadow-xl transition-shadow duration-300 stagger-5">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Lakshya Coaching Website</h3>
                <p className="text-slate-600 mb-4">
                  Responsive educational website built with React and TypeScript. Features modern UI/UX 
                  design, course management, and student portal functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Responsive</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <i className="fas fa-globe mr-2"></i>
                  <span>Full Stack Web Development</span>
                </div>
              </div>
            </Card>
            
            {/* More Projects Placeholder */}
            <Card className="project-card bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300 stagger-6">
              <div className="p-6 flex items-center justify-center text-center h-full">
                <div>
                  <i className="fas fa-plus-circle text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">More Projects</h3>
                  <p className="text-slate-600 mb-4">Exploring new technologies and building innovative solutions</p>
                  <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                    Let's Collaborate →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My journey in software development and technology innovation.
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {/* Current Role */}
            <div className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-slate-300"></div>
              
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">Associate Software Engineer</h3>
                    <p className="text-blue-600 font-medium">Tudip Technologies</p>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:mt-0">
                    <i className="fas fa-calendar mr-1"></i>
                    Current Position
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  Developing and maintaining software solutions using modern technologies. 
                  Collaborating with cross-functional teams to deliver high-quality applications 
                  and contributing to the full software development lifecycle.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Software Development</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Team Collaboration</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Full Stack</span>
                </div>
              </Card>
            </div>
            
            {/* Previous Role */}
            <div className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
              
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">Web Development Intern</h3>
                    <p className="text-emerald-600 font-medium">Webstack Academy</p>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:mt-0">
                    <i className="fas fa-calendar mr-1"></i>
                    Internship
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  Gained hands-on experience in web development, working on real-world projects 
                  and learning industry best practices. Built responsive websites and applications 
                  while developing strong foundations in modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Frontend</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Learning</span>
                </div>
              </Card>
            </div>
            
            {/* Certifications & Achievements */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Certifications */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="fas fa-certificate text-blue-600 mr-2"></i>
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">Geodata Processing using Python</div>
                      <div className="text-sm text-slate-600">ISRO (Indian Space Research Organisation)</div>
                    </div>
                    <i className="fas fa-satellite text-blue-600"></i>
                  </div>
                </div>
              </Card>
              
              {/* Achievements */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="fas fa-trophy text-yellow-600 mr-2"></i>
                  Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">5th Rank - Big Shot 2.0</div>
                      <div className="text-sm text-slate-600">IIT (BHU) Competition</div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-medium">5th</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">FFE Scholar</div>
                      <div className="text-sm text-slate-600">Academic Excellence</div>
                    </div>
                    <i className="fas fa-star text-yellow-600"></i>
                  </div>
                  <div className="flex items-center justify-between">
                    
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Leadership */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <i className="fas fa-users text-emerald-600 mr-2"></i>
                Positions of Responsibility
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">Marketing Executive, Design Core</div>
                  <div className="text-sm text-slate-600">Team Trident - IIT (BHU)</div>
                </div>
                
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Marketing</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Design</span>
                </div>
              </div>
             
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let's connect and explore opportunities to work together on exciting projects.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations in technology and AI/ML.
                  </p>
                </div>
                
                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <div className="text-slate-600">+91 7014752233</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-emerald-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">suraj992932@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Location</div>
                      <div className="text-slate-600">Kota, Rajasthan, India</div>
                    </div>
                  </div>
                </div>
                
               {/* Social Links */}
<div>
  <h4 className="font-medium text-slate-900 mb-4">Follow Me</h4>
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/in/suraj-verma-996815227"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    
    <a
      href="https://github.com/surajverma2"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
    >
      <i className="fab fa-github"></i>
    </a>

    <a
      href="mailto:suraj992932@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
    >
      <i className="fas fa-envelope"></i>
    </a>
  </div>
</div>

              </div>
              
              {/* Contact Form */}
              <Card className="bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project or idea..."
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <i className="fas fa-paper-plane ml-2"></i>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-slate-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src={logo1} 
            alt="IIT BHU Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl font-semibold">Suraj Verma</span>
      </div>

      <p className="text-slate-400 mb-6">
        Software Engineer | AI/ML Enthusiast | Problem Solver
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <a 
          href="https://www.linkedin.com/in/suraj-verma-996815227" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-200"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a 
          href="https://github.com/surajverma2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-200"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        
        <a 
          href="mailto:suraj992932@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-200"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>

      <div className="border-t border-slate-800 pt-8">
        <p className="text-slate-500 text-sm">
          © 2024 Suraj Verma. Built with passion for technology and innovation.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
