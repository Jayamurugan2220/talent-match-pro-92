import { Internship } from "@/types/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Building2, Users, Wifi } from "lucide-react";

interface InternshipCardProps {
  internship: Internship;
  matchScore?: number;
  onApply?: () => void;
}

export const InternshipCard = ({ internship, matchScore, onApply }: InternshipCardProps) => {
  const slotsAvailable = internship.capacity - internship.filled;
  const fillPercentage = (internship.filled / internship.capacity) * 100;

  return (
    <Card className="hover:shadow-medium transition-all duration-300 animate-fade-in">
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl">{internship.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <Building2 className="h-4 w-4" />
              {internship.company}
            </CardDescription>
          </div>
          {matchScore && (
            <div className="flex flex-col items-end gap-1">
              <Badge variant={matchScore >= 80 ? "default" : matchScore >= 60 ? "secondary" : "outline"} className="text-sm">
                {matchScore}% Match
              </Badge>
              {internship.isRemote && (
                <Badge variant="outline" className="gap-1">
                  <Wifi className="h-3 w-3" />
                  Remote
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{internship.description}</p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-foreground">{internship.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-foreground">{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-foreground">{internship.stipend}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-foreground">{slotsAvailable} slots left</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground">Capacity</span>
            <span className="text-xs font-medium text-foreground">{internship.filled}/{internship.capacity}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all ${fillPercentage >= 90 ? 'bg-destructive' : fillPercentage >= 70 ? 'bg-accent' : 'bg-success'}`}
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-2">Required Skills:</p>
          <div className="flex flex-wrap gap-1">
            {internship.requiredSkills.map(skill => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Badge variant="secondary" className="w-full justify-center py-1">
          {internship.sector}
        </Badge>

        {onApply && (
          <Button 
            variant={matchScore && matchScore >= 70 ? "hero" : "default"} 
            className="w-full"
            onClick={onApply}
          >
            Apply Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
