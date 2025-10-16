import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Calendar, User } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Mobile",
      value: "+91-7860275756",
      href: "tel:+917860275756"
    },
    {
      icon: Mail,
      label: "Email",
      value: "anjusrivastava.cs@gmail.com",
      href: "mailto:anjusrivastava.cs@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gorakhpur, India",
      href: null
    }
  ];

  const personalDetails = [
    {
      icon: Briefcase,
      label: "Total Experience",
      value: "5 Years 11 Months"
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "August 09, 1978"
    },
    {
      icon: User,
      label: "Gender",
      value: "Female"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Get In Contact</h2>
            <p className="text-xl text-slate-600">
              Let's discuss how I can contribute to your team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">{contact.label}</p>
                        <p className="text-slate-900">{contact.value}</p>
                      </div>
                    </div>
                  );

                  return contact.href ? (
                    <a 
                      key={contact.label}
                      href={contact.href}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={contact.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:anjusrivastava.cs@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl mb-6">Personal Details</h3>
              <div className="space-y-6">
                {personalDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">{detail.label}</p>
                        <p className="text-slate-900">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="mb-3">Professional Summary</h4>
                  <p className="text-slate-600">
                    Dedicated Software Test Engineer with extensive experience in ensuring 
                    quality software delivery through comprehensive manual and automated testing approaches.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}
