import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationCardProps {
  institution: string;
  program: string;
  period: string;
  description: string;
}

export function EducationCard({
  institution,
  program,
  period,
  description
}: EducationCardProps) {
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
