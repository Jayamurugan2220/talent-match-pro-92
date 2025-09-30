import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { StudentProfile } from "@/types/types";
import { skills, sectors, locations } from "@/data/mockData";
import { X, Plus, Save, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState<StudentProfile>({
    id: "1",
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: [],
    location: "",
    preferredLocations: [],
    sectors: [],
    district: "",
    category: "General",
    isRuralDistrict: false,
    isAspirationalDistrict: false,
    pastParticipation: false,
  });

  const [skillInput, setSkillInput] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const addSkill = () => {
    if (selectedSkill && !profile.skills.includes(selectedSkill)) {
      setProfile({ ...profile, skills: [...profile.skills, selectedSkill] });
      setSelectedSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({ ...profile, skills: profile.skills.filter(s => s !== skill) });
  };

  const addSector = () => {
    if (selectedSector && !profile.sectors.includes(selectedSector)) {
      setProfile({ ...profile, sectors: [...profile.sectors, selectedSector] });
      setSelectedSector("");
    }
  };

  const removeSector = (sector: string) => {
    setProfile({ ...profile, sectors: profile.sectors.filter(s => s !== sector) });
  };

  const addLocation = () => {
    if (selectedLocation && !profile.preferredLocations.includes(selectedLocation)) {
      setProfile({ ...profile, preferredLocations: [...profile.preferredLocations, selectedLocation] });
      setSelectedLocation("");
    }
  };

  const removeLocation = (location: string) => {
    setProfile({ ...profile, preferredLocations: profile.preferredLocations.filter(l => l !== location) });
  };

  const handleSave = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    toast({
      title: "Profile Saved!",
      description: "Your profile has been saved successfully.",
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        <Card className="shadow-medium">
          <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-background/20 flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl">Student Profile</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Complete your profile for accurate internship matching
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Highest Education</Label>
                  <Input
                    id="education"
                    value={profile.education}
                    onChange={(e) => setProfile({ ...profile, education: e.target.value })}
                    placeholder="e.g., B.Tech Computer Science"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Skills</h3>
              <div className="flex gap-2">
                <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select skills" />
                  </SelectTrigger>
                  <SelectContent>
                    {skills.map(skill => (
                      <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={addSkill} size="icon" variant="default">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="gap-1">
                    {skill}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sector Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Sector Interests</h3>
              <div className="flex gap-2">
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select sectors" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map(sector => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={addSector} size="icon" variant="default">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.sectors.map(sector => (
                  <Badge key={sector} variant="secondary" className="gap-1">
                    {sector}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeSector(sector)} />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Location Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Location Preferences</h3>
              <div className="space-y-2">
                <Label htmlFor="currentLocation">Current Location</Label>
                <Select value={profile.location} onValueChange={(val) => setProfile({ ...profile, location: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Work Locations</Label>
                <div className="flex gap-2">
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Add preferred locations" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(loc => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={addLocation} size="icon" variant="default">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.preferredLocations.map(loc => (
                    <Badge key={loc} variant="secondary" className="gap-1">
                      {loc}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => removeLocation(loc)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    value={profile.district}
                    onChange={(e) => setProfile({ ...profile, district: e.target.value })}
                    placeholder="Enter your district"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={profile.category} onValueChange={(val: any) => setProfile({ ...profile, category: val })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="ST">ST</SelectItem>
                      <SelectItem value="OBC">OBC</SelectItem>
                      <SelectItem value="EWS">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rural"
                  checked={profile.isRuralDistrict}
                  onChange={(e) => setProfile({ ...profile, isRuralDistrict: e.target.checked })}
                  className="h-4 w-4 rounded border-input"
                />
                <Label htmlFor="rural" className="cursor-pointer">I am from a rural district</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="aspirational"
                  checked={profile.isAspirationalDistrict}
                  onChange={(e) => setProfile({ ...profile, isAspirationalDistrict: e.target.checked })}
                  className="h-4 w-4 rounded border-input"
                />
                <Label htmlFor="aspirational" className="cursor-pointer">I am from an aspirational district</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="past"
                  checked={profile.pastParticipation}
                  onChange={(e) => setProfile({ ...profile, pastParticipation: e.target.checked })}
                  className="h-4 w-4 rounded border-input"
                />
                <Label htmlFor="past" className="cursor-pointer">I have participated in this scheme before</Label>
              </div>
            </div>

            <Button onClick={handleSave} size="lg" variant="hero" className="w-full">
              <Save className="h-4 w-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
