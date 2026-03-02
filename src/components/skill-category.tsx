interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
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
