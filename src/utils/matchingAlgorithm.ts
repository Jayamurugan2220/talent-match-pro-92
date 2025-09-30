import { StudentProfile, Internship, Match } from "@/types/types";

export const calculateMatch = (student: StudentProfile, internship: Internship): Match => {
  // Skill matching (40% weight)
  const studentSkillsLower = student.skills.map(s => s.toLowerCase());
  const requiredSkillsLower = internship.requiredSkills.map(s => s.toLowerCase());
  const matchingSkills = studentSkillsLower.filter(skill => 
    requiredSkillsLower.some(req => req.includes(skill) || skill.includes(req))
  );
  const skillMatch = (matchingSkills.length / requiredSkillsLower.length) * 100;

  // Location matching (20% weight)
  let locationMatch = 0;
  if (internship.isRemote) {
    locationMatch = 100;
  } else {
    const internshipLocation = internship.location.toLowerCase();
    const studentLocations = [student.location, ...student.preferredLocations].map(l => l.toLowerCase());
    locationMatch = studentLocations.some(loc => internshipLocation.includes(loc) || loc.includes(internshipLocation)) ? 100 : 30;
  }

  // Sector matching (20% weight)
  const sectorMatch = student.sectors.some(s => 
    s.toLowerCase() === internship.sector.toLowerCase()
  ) ? 100 : 40;

  // Qualification matching (10% weight)
  let qualificationMatch = 70;
  if (internship.preferredQualifications) {
    const educationLower = student.education.toLowerCase();
    const hasPreferredQual = internship.preferredQualifications.some(q => 
      educationLower.includes(q.toLowerCase()) || q.toLowerCase().includes(educationLower)
    );
    qualificationMatch = hasPreferredQual ? 100 : 60;
  }

  // Affinity bonus for underrepresented groups (10% weight)
  let affinityBonus = 0;
  
  // Rural district bonus
  if (student.isRuralDistrict) {
    affinityBonus += 30;
  }
  
  // Aspirational district bonus
  if (student.isAspirationalDistrict) {
    affinityBonus += 30;
  }
  
  // Social category consideration
  if (["SC", "ST", "OBC", "EWS"].includes(student.category)) {
    affinityBonus += 20;
  }
  
  // No past participation bonus
  if (!student.pastParticipation) {
    affinityBonus += 20;
  }

  // Cap affinity bonus at 100
  affinityBonus = Math.min(affinityBonus, 100);

  // Calculate weighted score
  const score = (
    skillMatch * 0.4 +
    locationMatch * 0.2 +
    sectorMatch * 0.2 +
    qualificationMatch * 0.1 +
    affinityBonus * 0.1
  );

  // Generate reasoning
  const reasoning: string[] = [];
  
  if (skillMatch >= 80) {
    reasoning.push(`Strong skill match: You possess ${matchingSkills.length} of ${requiredSkillsLower.length} required skills`);
  } else if (skillMatch >= 50) {
    reasoning.push(`Good skill match: ${Math.round(skillMatch)}% of required skills matched`);
  } else {
    reasoning.push(`Developing skills needed: Consider upskilling in ${requiredSkillsLower.slice(0, 2).join(", ")}`);
  }

  if (locationMatch === 100 && internship.isRemote) {
    reasoning.push("Remote opportunity - work from anywhere");
  } else if (locationMatch >= 80) {
    reasoning.push("Excellent location match with your preferences");
  }

  if (sectorMatch >= 80) {
    reasoning.push("Perfect sector alignment with your interests");
  }

  if (student.isAspirationalDistrict) {
    reasoning.push("Priority consideration for aspirational district candidate");
  }

  if (student.isRuralDistrict) {
    reasoning.push("Additional weightage for rural area representation");
  }

  if (!student.pastParticipation) {
    reasoning.push("First-time applicant priority");
  }

  // Capacity consideration
  const slotsAvailable = internship.capacity - internship.filled;
  if (slotsAvailable <= 3) {
    reasoning.push(`Limited slots: Only ${slotsAvailable} positions remaining`);
  }

  return {
    internshipId: internship.id,
    score: Math.round(score),
    skillMatch: Math.round(skillMatch),
    locationMatch: Math.round(locationMatch),
    sectorMatch: Math.round(sectorMatch),
    qualificationMatch: Math.round(qualificationMatch),
    affinityBonus: Math.round(affinityBonus),
    reasoning,
  };
};

export const getTopMatches = (student: StudentProfile, internships: Internship[], limit: number = 5): Match[] => {
  const matches = internships
    .map(internship => calculateMatch(student, internship))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  
  return matches;
};
