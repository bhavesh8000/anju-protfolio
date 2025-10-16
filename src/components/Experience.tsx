import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  const achievements = [
    "Wrote and executed manual test cases for e-commerce web app, covering over 95% of functional scenarios.",
    "Automated 120+ test cases using Selenium and TestNG, reducing regression effort by 40%.",
    "Reported and tracked defects using JIRA & Basecamp; collaborated effectively with developers for timely resolutions.",
    "Participated in Agile ceremonies (daily stand-ups, sprint planning)."
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Work Experience</h2>
            <p className="text-xl text-slate-600">
              5 Years 11 Months of Quality Assurance Excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">Software Assurance Engineer</h3>
                    <Badge className="bg-green-100 text-green-800">3+ Years in Testing</Badge>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Software Test Engineer with 3+ years of experience in manual and automated testing. 
                  Proficient in writing test cases, defect tracking, and using tools like Selenium, JIRA, 
                  and TestNG. Strong background in Agile and SDLC methodologies.
                </p>

                <h4 className="mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2MDU5MDEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Software Testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl">95%</p>
                <p className="text-sm">Test Coverage</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl">40%</p>
                <p className="text-sm">Efficiency Gain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
