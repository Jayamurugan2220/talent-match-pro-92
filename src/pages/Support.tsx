import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, Mail, Phone, MessageSquare, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", category: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Support Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get help and support for your PM Internship Scheme journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Find answers to commonly asked questions
              </p>
              <Button variant="outline" size="sm">Browse FAQ</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team in real-time
              </p>
              <Button variant="outline" size="sm">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other students and mentors
              </p>
              <Button variant="outline" size="sm">Join Forum</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Support</h3>
                  <p className="text-sm text-muted-foreground">support@pminternship.gov.in</p>
                  <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">1800-XXX-XXXX (Toll Free)</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                  <p className="text-xs text-muted-foreground mt-1">Emergency support available 24/7</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Regional Support Centers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>North Zone: Delhi</div>
                  <div>South Zone: Bangalore</div>
                  <div>East Zone: Kolkata</div>
                  <div>West Zone: Mumbai</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Submit a Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="application">Application Problem</SelectItem>
                      <SelectItem value="matching">Matching Algorithm</SelectItem>
                      <SelectItem value="profile">Profile Management</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your issue in detail..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How does the AI matching work?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI algorithm analyzes your profile including skills, qualifications, location preferences, and sector interests to match you with the most suitable internship opportunities. The system also considers affirmative action requirements and past participation history.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Can I apply to multiple internships?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can apply to multiple internships. However, we recommend focusing on the top matches suggested by our AI to increase your chances of selection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What documents do I need?</h3>
              <p className="text-sm text-muted-foreground">
                You'll need academic transcripts, identity proof, category certificates (if applicable), and any relevant skill certifications. All documents can be uploaded during profile creation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">How long does the selection process take?</h3>
              <p className="text-sm text-muted-foreground">
                The AI matching is instant, but the final selection by organizations typically takes 7-14 days. You'll receive notifications at each stage of the process.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Support;