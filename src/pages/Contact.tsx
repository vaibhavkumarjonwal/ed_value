import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long").regex(/^[0-9+\-\s]+$/, "Invalid phone number format"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(error => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Harmony Living PG accommodation.");
    window.open(`https://wa.me/919106161585?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Want to schedule a visit? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Block-E 316, Pramukh Anand Mall  Reliance Circle,<br />
                      Kudasan, Gandhinagar, Gujarat 382421
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919106161585 " className="hover:text-primary transition-colors">
                        +91 9106161585 
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+919909987961 " className="hover:text-primary transition-colors">
                        +91 9909987961 
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@harmonyliving.com" className="hover:text-primary transition-colors">
                        harmonylivingorbit@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-primary-foreground"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>

              {/* Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41489.034663095495!2d72.6067343880902!3d23.20130485056978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b004e4d01ef%3A0x37fa3b40220b7281!2sHarmony%20Living%20-%20Ed%20Value!5e0!3m2!1sen!2sin!4v1765767120629!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harmony Living Location"
                />
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements (room type, move-in date, etc.)"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </form>

                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    We typically respond within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
