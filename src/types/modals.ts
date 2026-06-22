export interface CategoryData {
  id: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  accentColor: string;
  tagline: string;
  description: string;
  ageGroup: string;
  teamSize: string;
  techLevel: string;
  highlights: string[];
  rules: string[];
  prizes: string;
}

export interface DisciplineData {
  id: string;
  title: string;
  imageSrc: string;
  accentColor: string;
  tagline: string;
  description: string;
  format: string;
  duration: string;
  teamSize: string;
  difficulty: string;
  rules: string[];
  allowedTech: string[];
  prizes: string;
}
