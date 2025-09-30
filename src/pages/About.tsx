import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">About PM Internship Scheme</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering India's youth through AI-powered internship matching and industry exposure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>AI-Powered Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms ensure optimal candidate-opportunity pairing
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Inclusive Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Special focus on rural, aspirational districts and diverse backgrounds
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Real-time Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Instant matching and application processing for faster placements
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Industry Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Collaborations with leading companies across all sectors
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The PM Internship Scheme represents a transformative initiative to bridge the gap between academic learning and industry experience. Our AI-powered platform ensures that every student finds the most suitable internship opportunity, creating a more efficient and equitable placement process.
            </p>
            <p className="text-muted-foreground">
              By leveraging cutting-edge machine learning algorithms, we consider multiple factors including skills, qualifications, location preferences, sector interests, and affirmative action requirements to create optimal matches that benefit both students and employers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">For Students</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized profile creation</li>
                  <li>• AI-powered opportunity matching</li>
                  <li>• Real-time application tracking</li>
                  <li>• Skill-based recommendations</li>
                  <li>• Location-aware filtering</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">For Organizations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Access to diverse talent pool</li>
                  <li>• Automated candidate screening</li>
                  <li>• Compliance with affirmative action</li>
                  <li>• Streamlined selection process</li>
                  <li>• Analytics and reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Impact & Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Registered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Successful Placements</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;