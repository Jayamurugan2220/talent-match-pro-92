import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, FileText, Upload, CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const Application = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const internshipId = searchParams.get('id');
  const [step, setStep] = useState(1);
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    availability: "",
    expectations: "",
    additionalInfo: "",
    documents: []
  });

  // Mock internship data - in real app, fetch based on internshipId
  const internship = {
    id: internshipId || "1",
    title: "Software Development Intern",
    company: "TechCorp India",
    location: "Bangalore, Karnataka",
    duration: "3 months",
    stipend: "₹25,000/month",
    sector: "Technology",
    requirements: ["React", "JavaScript", "Node.js"],
    description: "Work on cutting-edge web applications and learn from experienced developers."
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: "Application Submitted Successfully!",
        description: `Your application for ${internship.title} has been submitted. You'll hear back within 7-14 days.`,
      });
      // In real app, redirect to applications tracking page
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Cover Letter *
              </label>
              <Textarea
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                placeholder="Explain why you're interested in this internship and what makes you a good fit..."
                rows={6}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Minimum 100 words. Highlight your relevant skills and experience.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Availability *
              </label>
              <Select 
                value={applicationData.availability} 
                onValueChange={(value) => setApplicationData({ ...applicationData, availability: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="When can you start?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1-week">Within 1 week</SelectItem>
                  <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                What do you hope to achieve during this internship?
              </label>
              <Textarea
                value={applicationData.expectations}
                onChange={(e) => setApplicationData({ ...applicationData, expectations: e.target.value })}
                placeholder="Describe your learning goals and career objectives..."
                rows={4}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Additional Information
              </label>
              <Textarea
                value={applicationData.additionalInfo}
                onChange={(e) => setApplicationData({ ...applicationData, additionalInfo: e.target.value })}
                placeholder="Any additional information you'd like to share (projects, achievements, etc.)..."
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Upload Documents
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center space-y-4">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-sm font-medium text-foreground">Upload your resume and portfolio</p>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX. Max size: 5MB each
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Choose Files
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Recommended Documents:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Updated Resume/CV</li>
                <li>• Portfolio or work samples (if applicable)</li>
                <li>• Academic transcripts</li>
                <li>• Skill certificates</li>
                <li>• Letter of recommendation (optional)</li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Review Your Application</h2>
              <p className="text-muted-foreground">
                Please review your application details before submitting
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Cover Letter</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {applicationData.coverLetter.substring(0, 200)}...
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Availability</h4>
                  <p className="text-sm text-muted-foreground">{applicationData.availability}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Learning Goals</h4>
                  <p className="text-sm text-muted-foreground">
                    {applicationData.expectations || "Not specified"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Next Steps:</strong> After submission, the organization will review your application. 
                You'll receive an email notification about the status within 7-14 days. Check your dashboard 
                regularly for updates.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/opportunities">
              <ArrowLeft className="h-4 w-4" />
              Back to Opportunities
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">{internship.title}</CardTitle>
                <p className="text-muted-foreground">{internship.company}</p>
              </div>
              <Badge variant="secondary">{internship.sector}</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{internship.location}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-medium">{internship.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Stipend</p>
                <p className="text-sm font-medium">{internship.stipend}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Required Skills</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {internship.requirements.slice(0, 2).map(skill => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Application Form</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Step {step} of 3</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-2 h-2 rounded-full ${
                        s <= step ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}
              
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className={step === 1 ? "ml-auto" : ""}
                >
                  {step === 3 ? "Submit Application" : "Continue"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Application Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Tailor your cover letter to the specific internship and company</li>
              <li>• Highlight relevant skills and experiences that match the requirements</li>
              <li>• Be honest about your availability and commitment level</li>
              <li>• Upload a well-formatted resume with your latest achievements</li>
              <li>• Proofread your application before submitting</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Application;