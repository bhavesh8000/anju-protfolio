import { Card } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "M.Sc. (Computer Science)",
      institution: "Maharshi Dayanand University, Rohtak",
      year: "2013",
      type: "Post-Graduation"
    },
    {
      degree: "B.Ed. (Computer-Assisted Education)",
      institution: "D. D. U Gorakhpur University",
      year: "2012",
      type: "Professional Degree"
    },
    {
      degree: "B.Sc. (Botany, Chemistry)",
      institution: "D. D. U Gorakhpur University",
      year: "1996",
      type: "Graduation"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Education</h2>
            <p className="text-xl text-slate-600">
              Strong academic foundation in computer science
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-600 mb-1">{edu.type}</p>
                    <h3 className="text-xl mb-2">{edu.degree}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-3">{edu.institution}</p>
                
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
