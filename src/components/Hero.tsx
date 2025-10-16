import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2NGgtNHptMCA2aDR2NGgtNHptLTYtNmg0djRoLTR6bTYgMGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400">Software Test Engineer</p>
              <h1 className="text-5xl md:text-6xl">
                Anju Srivastava
              </h1>
            </div>
            
            <p className="text-xl text-slate-300">
              5+ years of experience in manual and automated testing. 
              Proficient in Selenium, JIRA, and Agile methodologies, 
              ensuring quality software delivery.
            </p>
            
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91-7860275756</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>anjusrivastava.cs@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Gorakhpur, India</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743865319071-929ac8a27bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNDkxOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
