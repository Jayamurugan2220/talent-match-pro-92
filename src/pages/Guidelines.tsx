import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertCircle, Users, FileText } from "lucide-react";

const Guidelines = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Guidelines & Policies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential information for students and organizations participating in the PM Internship Scheme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide for students to maximize their internship experience
              </p>
              <div className="space-y-2">
                <Badge variant="secondary">Eligibility Criteria</Badge>
                <Badge variant="secondary">Application Process</Badge>
                <Badge variant="secondary">Performance Guidelines</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>For Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Guidelines for partner organizations and mentors
              </p>
              <div className="space-y-2">
                <Badge variant="secondary">Partnership Requirements</Badge>
                <Badge variant="secondary">Mentorship Standards</Badge>
                <Badge variant="secondary">Evaluation Criteria</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Student Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="eligibility">
                <AccordionTrigger>Eligibility Criteria</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Academic Requirements</p>
                      <p className="text-sm text-muted-foreground">
                        Currently enrolled in a recognized higher education institution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Age Limit</p>
                      <p className="text-sm text-muted-foreground">
                        Between 18-28 years of age at the time of application
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Citizenship</p>
                      <p className="text-sm text-muted-foreground">
                        Indian citizen with valid identity documents
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="application">
                <AccordionTrigger>Application Process</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">1</div>
                      <span className="font-medium">Complete Profile Creation</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">
                      Fill in all required personal, academic, and professional details
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">2</div>
                      <span className="font-medium">AI Matching Process</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">
                      Our algorithm will analyze your profile and suggest suitable opportunities
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">3</div>
                      <span className="font-medium">Application Submission</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">
                      Submit applications for your preferred internship opportunities
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conduct">
                <AccordionTrigger>Code of Conduct</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Behavior</p>
                      <p className="text-sm text-muted-foreground">
                        Maintain professionalism in all interactions with mentors and colleagues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Punctuality & Commitment</p>
                      <p className="text-sm text-muted-foreground">
                        Regular attendance and dedication to assigned tasks and projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Confidentiality</p>
                      <p className="text-sm text-muted-foreground">
                        Respect organizational confidentiality and intellectual property
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Affirmative Action Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The PM Internship Scheme is committed to promoting diversity and inclusion through specific reservation policies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Geographical Representation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Priority to students from rural areas</li>
                  <li>• Special allocation for aspirational districts</li>
                  <li>• Regional balance across states</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Social Categories</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reserved quotas as per government norms</li>
                  <li>• Support for economically weaker sections</li>
                  <li>• Gender-balanced opportunities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Evaluation & Certification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              All internships will be evaluated based on standardized criteria to ensure quality and consistency:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="outline">Performance Assessment</Badge>
                <span className="text-sm text-muted-foreground">Regular evaluation by mentors</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">Project Deliverables</Badge>
                <span className="text-sm text-muted-foreground">Completion of assigned tasks and projects</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">Digital Certificate</Badge>
                <span className="text-sm text-muted-foreground">Official certification upon successful completion</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Guidelines;