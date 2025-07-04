import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  LinkedinIcon, 
  MailIcon, 
  DownloadIcon, 
  SettingsIcon, 
  ShieldIcon, 
  MonitorIcon,
  AwardIcon,
  BrainCircuitIcon,
  DatabaseIcon,
  GaugeIcon,
  ServerIcon,
  ZapIcon
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const technicalSkills = {
    "DCS Systems": [
      "Foxboro Archestra",
      "System Advisor",
      "Process Control",
      "HMI Development"
    ],
    "SIS Platforms": [
      "Triconex Tristation",
      "Safety Instrumented Systems",
      "Functional Safety",
      "Emergency Shutdown"
    ],
    "Maintenance Systems": [
      "Maximo CMMS",
      "Asset Management",
      "Preventive Maintenance",
      "Work Order Management"
    ],
    "Additional Tools": [
      "Bently Nevada",
      "Meridian",
      "SCADA Systems",
      "Alarm Management"
    ]
  };

  const projects = [
    {
      title: "DCS Upgrade Project",
      description: "Led comprehensive upgrade of legacy Foxboro DCS system, improving process control efficiency and reducing maintenance costs.",
      technologies: ["Foxboro Archestra", "System Advisor", "HMI"],
      contributions: "System design, testing, and commissioning"
    },
    {
      title: "ESD System Implementation",
      description: "Designed and implemented emergency shutdown systems for critical process units, ensuring SIL-3 safety integrity.",
      technologies: ["Triconex Tristation", "Safety Systems", "Functional Safety"],
      contributions: "Safety requirements analysis and system validation"
    },
    {
      title: "Alarm Rationalization Program",
      description: "Successfully reduced nuisance alarms by 75% through systematic alarm analysis and optimization.",
      technologies: ["DCS Systems", "Alarm Management", "Process Analysis"],
      contributions: "Alarm philosophy development and implementation"
    },
    {
      title: "CMMS Integration",
      description: "Integrated Maximo CMMS with existing control systems for enhanced asset management and maintenance planning.",
      technologies: ["Maximo CMMS", "Data Integration", "Asset Management"],
      contributions: "System integration and workflow optimization"
    }
  ];

  const certifications = [
    {
      title: "Certified Functional Safety Professional",
      issuer: "exida",
      year: "2022",
      icon: ShieldIcon
    },
    {
      title: "ISA/IEC 62443 Cybersecurity Fundamentals",
      issuer: "ISA",
      year: "2023",
      icon: ZapIcon
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mohamed Eissa
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-primary-glow">
            Senior Control Systems Engineer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience in DCS, SIS, and SCADA Systems | Functional Safety Professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://www.linkedin.com/in/mohamedeeissa', '_blank')}
            >
              <LinkedinIcon className="group-hover:scale-110 transition-transform" />
              Connect on LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About</h2>
            <Card className="shadow-tech">
              <CardContent className="p-8">
                <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                  Certified Functional Safety Professional with 10 years of hands-on experience across all phases of control systems lifecycle. Proven track record in alarm rationalization, managing system upgrades, and maintenance for industrial automation systems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Career Highlights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Senior Application Design Engineer at Schneider Electric (2023-Present)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Expert Customer Support Engineer at Schneider Electric (2023-2024)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Instrument & Control Engineer at Methanex Corporation (2015-2023)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Completed ISA/IEC 62443 Cybersecurity Fundamentals training</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Core Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {["DCS Systems", "SIS Platforms", "SCADA", "Functional Safety", "Alarm Management", "System Integration", "Asset Management", "Cybersecurity"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-tech-blue/10 text-tech-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(technicalSkills).map(([category, skills], index) => {
              const icons = [SettingsIcon, ShieldIcon, DatabaseIcon, GaugeIcon];
              const IconComponent = icons[index];
              
              return (
                <Card key={category} className="hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Experience Section */}
      <section id="projects" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Project Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} className="shadow-tech hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <BrainCircuitIcon className="w-5 h-5" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-tech-gray mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-tech-gray mb-1">Key Contributions:</h4>
                      <p className="text-sm text-muted-foreground">{project.contributions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certifications</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="shadow-tech hover:shadow-glow transition-all duration-300 flex-1">
                <CardHeader className="text-center">
                  <cert.icon className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  <CardDescription className="text-base">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Documents</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" className="group">
                <DownloadIcon className="group-hover:scale-110 transition-transform" />
                Employment Verification Letter
              </Button>
              <Button variant="professional" size="lg" className="group">
                <DownloadIcon className="group-hover:scale-110 transition-transform" />
                Full CV (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Contact</h2>
            <Card className="shadow-tech">
              <CardHeader>
                <CardTitle className="text-center text-primary">Get in Touch</CardTitle>
                <CardDescription className="text-center">
                  Interested in discussing control systems projects or opportunities? Let&apos;s connect.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project inquiry, consultation, etc." />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or how I can help..." 
                      rows={5}
                      required 
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="professional" size="lg" className="flex-1">
                      <MailIcon />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('mailto:mohamed.eissa@email.com', '_blank')}
                    >
                      Direct Email
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Mohamed Eissa</h3>
          <p className="text-primary-glow mb-6">Senior Control Systems Engineer</p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:text-primary-glow"
              onClick={() => window.open('https://www.linkedin.com/in/mohamedeeissa', '_blank')}
            >
              <LinkedinIcon />
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:text-primary-glow"
              onClick={() => window.open('mailto:mohamed.eissa@email.com', '_blank')}
            >
              <MailIcon />
              Email
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm text-white/70">
            <p>&copy; 2024 Mohamed Eissa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;