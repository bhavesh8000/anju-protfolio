import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">Anju Srivastava</h3>
              <p className="text-slate-400">
                Software Test Engineer specializing in manual and automated testing 
                with a passion for quality assurance.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Education
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+917860275756" className="hover:text-white transition-colors">
                    +91-7860275756
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:anjusrivastava.cs@gmail.com" className="hover:text-white transition-colors">
                    anjusrivastava.cs@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gorakhpur, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Anju Srivastava. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
