import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { InternshipCard } from "@/components/InternshipCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StudentProfile, Match } from "@/types/types";
import { mockInternships } from "@/data/mockData";
import { getTopMatches } from "@/utils/matchingAlgorithm";
import { TrendingUp, Award, MapPin, Target, AlertCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Matches = () => {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setProfile(parsedProfile);
      
      // Simulate AI processing
      setTimeout(() => {
        const topMatches = getTopMatches(parsedProfile, mockInternships, 10);
        setMatches(topMatches);
        setIsLoading(false);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (!profile) {
    return (
      <Layout>
        <Card className="max-w-2xl mx-auto mt-12 shadow-medium">
          <CardHeader className="text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <CardTitle>Complete Your Profile First</CardTitle>
            <CardDescription>
              You need to complete your profile to see personalized internship matches
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/profile">Complete Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Analyzing Your Profile</h2>
            <p className="text-muted-foreground">Our AI is finding the best matches for you...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const topMatch = matches[0];
  const topInternship = mockInternships.find(i => i.id === topMatch?.internshipId);

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-6 rounded-lg shadow-medium">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Your AI-Matched Internships</h1>
              <p className="text-primary-foreground/90">
                Powered by advanced matching algorithm considering skills, location, and affinity factors
              </p>
            </div>
          </div>
        </div>

        {/* Match Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Total Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{matches.length}</div>
              <p className="text-xs text-muted-foreground">Opportunities found</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                Top Match
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{topMatch?.score}%</div>
              <p className="text-xs text-muted-foreground">Match score</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-success" />
                High Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {matches.filter(m => m.score >= 70).length}
              </div>
              <p className="text-xs text-muted-foreground">Above 70% match</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Affinity Bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {topMatch ? `+${topMatch.affinityBonus}%` : "0%"}
              </div>
              <p className="text-xs text-muted-foreground">Priority boost</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Match Highlight */}
        {topMatch && topInternship && (
          <Card className="border-2 border-primary shadow-strong">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                <div>
                  <CardTitle className="text-xl">🎯 Best Match for You</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    This internship aligns perfectly with your profile
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <InternshipCard internship={topInternship} matchScore={topMatch.score} />
              
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold text-foreground">Match Analysis</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Skill Match</span>
                      <span className="font-medium text-foreground">{topMatch.skillMatch}%</span>
                    </div>
                    <Progress value={topMatch.skillMatch} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Location Match</span>
                      <span className="font-medium text-foreground">{topMatch.locationMatch}%</span>
                    </div>
                    <Progress value={topMatch.locationMatch} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Sector Match</span>
                      <span className="font-medium text-foreground">{topMatch.sectorMatch}%</span>
                    </div>
                    <Progress value={topMatch.sectorMatch} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Affinity Bonus</span>
                      <span className="font-medium text-accent">+{topMatch.affinityBonus}%</span>
                    </div>
                    <Progress value={topMatch.affinityBonus} className="h-2" />
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <h5 className="text-sm font-semibold text-foreground">Why This Match?</h5>
                  <ul className="space-y-1">
                    {topMatch.reasoning.map((reason, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Matches */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">All Recommended Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.slice(1).map(match => {
              const internship = mockInternships.find(i => i.id === match.internshipId);
              if (!internship) return null;
              return (
                <InternshipCard
                  key={match.internshipId}
                  internship={internship}
                  matchScore={match.score}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
