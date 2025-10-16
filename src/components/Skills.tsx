import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Database, TestTube, Wrench, Globe, Languages } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Python", "Django", "Computer Vision", "MySQL", "Java", "SQL"]
    },
    {
      icon: TestTube,
      title: "Testing",
      skills: ["Manual Testing", "Functional Testing", "Regression Testing", "UAT", "Smoke Testing", "API Testing"]
    },
    {
      icon: Wrench,
      title: "Automation & Tools",
      skills: ["Selenium WebDriver", "TestNG", "JIRA", "Basecamp", "Postman", "TestRail", "Jenkins", "Git"]
    },
    {
      icon: Globe,
      title: "Methodologies & Others",
      skills: ["Agile", "SDLC", "STLC", "Cloud Hosting"]
    },
    {
      icon: Languages,
      title: "Languages",
      skills: ["Hindi", "English"]
    }
  ];

  const coreSkills = [
    "Solution Optimization",
    "Application Design And Development",
    "Change Request Management",
    "Software Testing",
    "Training Management",
    "Reporting"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600">
              Comprehensive expertise across the testing lifecycle
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="border-slate-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
