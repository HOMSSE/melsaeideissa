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
  BrainCircuitIcon,
  DatabaseIcon,
  GaugeIcon,
  ZapIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon
} from "lucide-react";
import innovationAward from "@/assets/innovation-award.jpg";

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
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Warm & Inviting */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Innovation Award Winner 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in text-card">
            Mohamed Eissa
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Senior Control Systems Engineer
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-card/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming industrial automation with 10+ years of expertise in DCS, SIS, and SCADA Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow"
              onClick={() => window.open('https://www.linkedin.com/in/mohamedeeissa', '_blank')}
            >
              <LinkedinIcon className="group-hover:scale-110 transition-transform" />
              Connect on LinkedIn
              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-card/10 text-card border-card/20 hover:bg-card/20 backdrop-blur-sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-card/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-card/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Building the <span className="text-gradient">Future</span> of Industrial Automation
              </h2>
            </div>
            
            <Card className="shadow-soft border-0 bg-card">
              <CardContent className="p-8 md:p-10">
                <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                  Certified Functional Safety Professional with 10 years of hands-on experience across all phases of control systems lifecycle. Proven track record in alarm rationalization, managing system upgrades, and maintenance for industrial automation systems. Currently driving innovation at Advansys Intelligent Solutions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BrainCircuitIcon className="w-4 h-4 text-primary" />
                      </div>
                      Career Journey
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Senior Application Design Engineer at Advansys Intelligent Solutions (2024-Present)",
                        "Expert Customer Support Engineer at Schneider Electric (2023-2024)",
                        "Instrument & Control Engineer at Methanex Corporation (2015-2023)",
                        "ISA/IEC 62443 Cybersecurity Fundamentals Certified"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <ZapIcon className="w-4 h-4 text-accent" />
                      </div>
                      Core Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["DCS Systems", "SIS Platforms", "SCADA", "Functional Safety", "Alarm Management", "System Integration", "Asset Management", "Cybersecurity"].map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-gradient-warm border border-border/50 text-foreground font-medium"
                        >
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
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(technicalSkills).map(([category, skills], index) => {
              const icons = [SettingsIcon, ShieldIcon, DatabaseIcon, GaugeIcon];
              const IconComponent = icons[index];
              
              return (
                <Card 
                  key={category} 
                  className="group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 border-0 bg-card"
                >
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display text-foreground">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
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
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Project Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.title} 
                className="group shadow-soft hover:shadow-tech transition-all duration-500 border-0 bg-card overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <CardHeader>
                  <CardTitle className="text-xl font-display text-foreground flex items-center gap-2">
                    <BrainCircuitIcon className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Key Contributions</h4>
                      <p className="text-sm text-muted-foreground">{project.contributions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Recognition</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Certifications & Awards</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Featured Award */}
            <Card className="mb-8 shadow-glow border-0 bg-card overflow-hidden animate-pulse-glow">
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary-glow to-accent" />
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={innovationAward} 
                      alt="Innovation Award 2025 from Advansys Intelligent Solutions" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-primary mb-4">
                      <StarIcon className="w-6 h-6 fill-primary" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Featured Award</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-foreground mb-2">Innovation Award 2025</h3>
                    <p className="text-lg text-accent font-medium mb-4">Advansys Intelligent Solutions</p>
                    <p className="text-muted-foreground leading-relaxed">
                      "Celebrating your revolutionary ideas & innovative spirit" — Recognized for driving innovation and bringing transformative solutions to industrial automation challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Other Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.title} className="shadow-soft hover:shadow-tech transition-all duration-300 border-0 bg-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-display text-foreground">{cert.title}</CardTitle>
                      <CardDescription className="text-base">
                        {cert.issuer} • {cert.year}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Testimonials</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Recommendations</h2>
            </div>
            
            <Card className="shadow-soft border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-foreground">AA</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-display font-semibold text-foreground">Assem Abdou</h3>
                        <p className="text-sm text-muted-foreground">Electrical, Instrumentation & Control Systems Lead</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <LinkedinIcon className="w-4 h-4 text-accent" />
                        <span className="text-xs text-muted-foreground">September 23, 2023</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Assem managed Mohamed directly</p>
                    <blockquote className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                      "Mohamed was part of my I&C team. He was always a reliable team member, stepping in to provide support when needed. He is a very decent person and it's always been easy to work and deal with him."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Resources</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">Documents</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-primary hover:bg-primary-glow shadow-tech">
                <DownloadIcon className="group-hover:scale-110 transition-transform" />
                Employment Verification Letter
              </Button>
              <Button size="lg" variant="outline" className="group border-primary/30 hover:bg-primary/5">
                <DownloadIcon className="group-hover:scale-110 transition-transform" />
                Full CV (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Let's Connect</h2>
            </div>
            
            <Card className="shadow-soft border-0 bg-card">
              <CardHeader className="text-center">
                <CardDescription className="text-base text-muted-foreground">
                  Interested in discussing control systems projects or opportunities? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required className="bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" required className="bg-background" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project inquiry, consultation, etc." className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or how I can help..." 
                      rows={5}
                      required 
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary-glow shadow-tech">
                      <MailIcon />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="border-primary/30 hover:bg-primary/5"
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
      <footer className="bg-tech-dark text-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-bold mb-2">Mohamed Eissa</h3>
          <p className="text-primary mb-8">Senior Control Systems Engineer</p>
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-card/80 hover:text-primary hover:bg-card/5"
              onClick={() => window.open('https://www.linkedin.com/in/mohamedeeissa', '_blank')}
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-card/80 hover:text-primary hover:bg-card/5"
              onClick={() => window.open('mailto:mohamed.eissa@email.com', '_blank')}
            >
              <MailIcon className="w-5 h-5" />
              Email
            </Button>
          </div>
          <div className="pt-8 border-t border-card/10 text-sm text-card/50">
            <p>&copy; 2025 Mohamed Eissa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
