import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin, 
  Briefcase,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithm considers skills, qualifications, location, and sector preferences"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Affirmative Action",
      description: "Priority consideration for candidates from rural and aspirational districts"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Smart Recommendations",
      description: "Get personalized internship suggestions based on your unique profile"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Exposure",
      description: "Access opportunities across top companies in various sectors"
    }
  ];

  const stats = [
    { label: "Total Internships", value: "1000+", icon: <Briefcase /> },
    { label: "Partner Companies", value: "500+", icon: <Building /> },
    { label: "Students Placed", value: "25K+", icon: <Users /> },
    { label: "Success Rate", value: "95%", icon: <TrendingUp /> }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Complete Your Profile",
      description: "Fill in your skills, qualifications, location preferences, and interests"
    },
    {
      step: "2",
      title: "AI Analyzes & Matches",
      description: "Our algorithm evaluates opportunities based on your profile and priorities"
    },
    {
      step: "3",
      title: "Review Matches",
      description: "Get personalized recommendations with detailed match scores and reasoning"
    },
    {
      step: "4",
      title: "Apply & Connect",
      description: "Apply to your top matches and begin your internship journey"
    }
  ];

  return (
    <Layout>
      <div className="space-y-16 animate-fade-in">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Students collaborating" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          <div className="relative px-8 py-16 md:py-24 text-primary-foreground">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-accent text-accent-foreground mb-4" variant="secondary">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                PM Internship Scheme
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Empowering India's youth through smart, AI-driven internship matching. 
                Connect with opportunities that match your skills, aspirations, and potential.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" asChild className="bg-accent hover:bg-accent-light">
                  <Link to="/profile">
                    Get Started
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/opportunities">
                    Browse Opportunities
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Platform?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology combined with government priorities to ensure fair and optimal matching
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-card p-8 md:p-12 rounded-2xl shadow-medium">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to find your ideal internship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Benefits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed to ensure equitable opportunities for all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Priority for rural and aspirational district candidates",
              "Representation across social categories (SC/ST/OBC/EWS)",
              "First-time applicant preference consideration",
              "Skills and qualification-based matching",
              "Location flexibility with remote options",
              "Industry capacity and demand alignment",
              "Transparent scoring and reasoning",
              "Real-time internship availability tracking"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card shadow-soft">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-primary text-primary-foreground p-12 rounded-2xl text-center shadow-strong">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Complete your profile and let our AI find the perfect internship matches for you
          </p>
          <Button variant="hero" size="lg" asChild className="bg-accent hover:bg-accent-light text-accent-foreground">
            <Link to="/profile">
              Complete Your Profile Now
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

// Icon component for Building
const Building = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default Index;
