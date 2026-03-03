import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface GitHubLink {
  url: string;
  label?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  githubLinks?: GitHubLink[];
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  githubLinks
}: ProjectCardProps) {
  const multipleRepos = (githubLinks?.length ?? 0) > 1;

  return (
    <Card className="bg-card text-card-foreground flex flex-col h-full">
      <CardHeader className="min-h-[6.5rem]">
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center gap-2">
            {githubLinks?.map(({ url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-primary/80"
                aria-label={label ? `View ${label} repository` : "View source code"}
              >
                <Github className="h-4 w-4" />
                {multipleRepos && label && (
                  <span className="text-xs font-normal">{label}</span>
                )}
              </a>
            ))}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-muted-foreground flex-1">{description}</p>
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
