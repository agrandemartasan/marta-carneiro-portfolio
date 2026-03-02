import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  link
}: ExperienceCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span>{company}</span>
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
            <span className="block text-base font-normal text-primary mt-1">
              {role}
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
