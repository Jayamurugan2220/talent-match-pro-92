export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string[];
  location: string;
  preferredLocations: string[];
  sectors: string[];
  district: string;
  category: "General" | "SC" | "ST" | "OBC" | "EWS";
  isRuralDistrict: boolean;
  isAspirationalDistrict: boolean;
  pastParticipation: boolean;
  cgpa?: number;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  sector: string;
  location: string;
  duration: string;
  stipend: string;
  description: string;
  requiredSkills: string[];
  capacity: number;
  filled: number;
  preferredQualifications?: string[];
  isRemote: boolean;
}

export interface Match {
  internshipId: string;
  score: number;
  skillMatch: number;
  locationMatch: number;
  sectorMatch: number;
  qualificationMatch: number;
  affinityBonus: number;
  reasoning: string[];
}
