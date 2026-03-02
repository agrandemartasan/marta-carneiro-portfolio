import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import profilePicture from "../../public/marta-profile.jpg";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 bg-background text-foreground">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <section
          id="hero"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <div className="w-32 h-32 sm:w-48 sm:h-48 mb-4 sm:mb-8 relative overflow-hidden rounded-full border-4 border-primary">
            <Image
              src={profilePicture}
              alt="Marta Carneiro"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 gradient-text">
            Marta Carneiro
          </h1>
          <p className="text-lg sm:text-xl mb-4 sm:mb-8 text-secondary-foreground">
            Web Developer | Anime Enthusiast | Gamer
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/agrandemartasan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/marta--carneiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:mlpscarneiro@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </section>

        <section id="about" className="mb-8 sm:mb-12 scroll-mt-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            About Me
          </h2>
          <Card className="bg-card text-card-foreground">
            <CardContent className="pt-6">
              <p className="mb-4">
                Hello! I'm Marta Carneiro, a web developer based in Barreiro
                with a unique background in customer service management and
                technology. With a year of valuable experience at Critical
                TechWorks, I've honed my skills in developing robust,
                user-friendly applications and contributing to projects.
              </p>
              <p className="mb-4">
                My journey into web development began after a successful career
                in customer service. This transition has allowed me to bring
                strong communication skills and a user-centric approach to my
                coding projects, creating a unique blend of technical expertise
                and interpersonal abilities.
              </p>
              <p className="mb-4">
                I'm proficient in JavaScript, TypeScript, and modern frameworks
                like React, Next.js and Angular 2. My backend experience
                includes Node.js, Express, Java, Quarkus, and Maven. I'm also
                experienced with CSS frameworks such as Tailwind CSS and
                Bootstrap, which allow me to create responsive and visually
                appealing user interfaces efficiently.
              </p>
              <p>
                When I'm not coding, you'll find me exploring virtual worlds
                through gaming, enjoying the latest anime series, or taking
                walks with my dog, Lola. I'm also a movie enthusiast and a
                vegetarian foodie. At home, I enjoy organizing, a skill that
                translates well into creating clean, structured code. My diverse
                interests keep me inspired and bring fresh perspectives to my
                work as a developer.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-8 sm:mb-12 scroll-mt-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Arquivo Sonoro Castro Marim"
              description="A digital platform that aims to preserve and share the soundscape of Castro Marim village located in the Algarve region of Portugal, and its surrounding natural areas. It features a collection of recorded sounds that is organized and indexed using a map with pins and a list of places, making it easy for users to explore and discover new sounds."
              tags={["Next.js", "Typescript", "Tailwind CSS"]}
              link="https://arquivosonorocastromarim.pt/"
            />
            <ProjectCard
              title="Woofr"
              description="An application that facilitates dog dating. Features include user authentication, profile customization, friend search by location, chat with friends, and responsive design."
              tags={[
                "React",
                "Express.js",
                "MongoDB",
                "Node.js",
                "Chakra UI",
                "Axios"
              ]}
              link="https://woo-fr.netlify.app/"
            />
            <ProjectCard
              title="Discover South Korea"
              description="A multilingual travel and e-commerce platform built from original Figma designs, developed through a complete UX/UI design process. Features three sections — Discovery, Plan, and Shop — with bilingual (PT/EN) support, responsive design, and product filtering."
              tags={["Next.js", "TypeScript", "Tailwind CSS", "next-intl"]}
              link="https://south-korea-tourism.vercel.app/"
              githubLink="https://github.com/agrandemartasan/south-korea-tourism"
            />
          </div>
        </section>

        <section id="skills" className="mb-8 sm:mb-12 scroll-mt-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            Skills
          </h2>
          <Card className="bg-card text-card-foreground">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SkillCategory
                  title="Frontend"
                  skills={[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Angular 2",
                    "Bootstrap",
                    "Tailwind CSS"
                  ]}
                />
                <SkillCategory
                  title="Backend"
                  skills={[
                    "Node.js",
                    "Express.js",
                    "Java",
                    "Quarkus",
                    "Maven",
                    "MongoDB",
                    "RESTful APIs"
                  ]}
                />
                <SkillCategory
                  title="Testing"
                  skills={["Behavior-Driven Development", "Unit Testing"]}
                />
                <SkillCategory
                  title="Tools & Others"
                  skills={["Git", "npm", "JIRA", "Figma", "Confluence"]}
                />
                <SkillCategory
                  title="Soft Skills"
                  skills={[
                    "Problem Solving",
                    "Team Collaboration",
                    "Agile Methodologies",
                    "Adaptability",
                    "Bilingual (Portuguese/English)"
                  ]}
                />
                <SkillCategory
                  title="Currently Learning"
                  skills={[
                    "Styled Components",
                    "Microservices",
                    "Cloud Technologies"
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="education" className="mb-8 sm:mb-12 scroll-mt-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            <EducationCard
              institution="Ironhack Portugal"
              program="Web Development Bootcamp"
              period="2022–2023"
              description="Intensive full-stack web development bootcamp covering JavaScript, React, Node.js, Express, and MongoDB, with a focus on building real-world applications through project-based learning."
            />
            <EducationCard
              institution="IEFP — Instituto do Emprego e Formação Profissional"
              program="UX/UI Design"
              period="2025–2026"
              description="Comprehensive UX/UI design course covering the full design process — from user research and wireframing to prototyping and visual design in Figma. The capstone project, Discover South Korea, was later developed into a fully functional multilingual web application."
            />
          </div>
        </section>

        <section id="contact" className="scroll-mt-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            Get in Touch
          </h2>
          <Card className="bg-card text-card-foreground">
            <CardContent className="pt-6">
              <p className="mb-4">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat about web development, anime, or gaming. Feel free
                to reach out!
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:mlpsc@gmail.com"
                  className="flex items-center space-x-2 text-[#8c7a5b] dark:text-[#d3c0a8] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>mlpscarneiro@gmail.com</span>
                </a>
                <a
                  href="https://github.com/agrandemartasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#8c7a5b] dark:text-[#d3c0a8] hover:underline"
                >
                  <Github className="h-4 w-4" />
                  <span>github.com/agrandemartasan</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/marta--carneiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#8c7a5b] dark:text-[#d3c0a8] hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>linkedin.com/in/marta--carneiro</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <ScrollToTopButton />
    </main>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  link,
  githubLink
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
}) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function EducationCard({
  institution,
  program,
  period,
  description
}: {
  institution: string;
  program: string;
  period: string;
  description: string;
}) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4">
          <div>
            <span className="block">{institution}</span>
            <span className="block text-base font-normal text-primary mt-1">
              {program}
            </span>
          </div>
          <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
