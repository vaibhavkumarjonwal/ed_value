import { CheckCircle, Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Heart,
    title: "Comfort First",
    description: "We prioritize your comfort and well-being in everything we do, from room design to daily services.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Your safety is our top concern with 24/7 security, CCTV surveillance, and secure access systems.",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Foster meaningful connections with like-minded individuals in our supportive community environment.",
  },
];

const milestones = [
  { number: "200+", label: "Happy Residents" },
  { number: "15+", label: "Years of Service" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "20+", label: "Rooms Available" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Harmony Living
            </h1>
            <p className="text-lg text-muted-foreground">
              Since 2021, we've been providing safe, comfortable, and affordable accommodation for students and working professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
<section className="py-16">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
        <p className="text-muted-foreground mb-4">
          Harmony Living was founded with a simple mission: to provide a home away
          from home for students and professionals who move to the city in pursuit
          of their dreams.
        </p>
        <p className="text-muted-foreground mb-4">
          We understand the challenges of finding safe, affordable, and comfortable
          accommodation in a new city. That’s why we’ve created a living space that
          combines the comfort of home with modern amenities.
        </p>
        <p className="text-muted-foreground">
          Over the years, we’ve hosted residents from some of India’s most reputed
          institutions and professionals working with leading organizations.
        </p>
      </div>

      {/* Right Content – Our Clients */}
      <div className="bg-primary/10 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">Our Clients</h3>

        <p className="text-muted-foreground mb-6">
          We proudly serve students and working professionals from prestigious
          universities, research institutions, and corporate organizations.
        </p>

        <ul className="space-y-3">
          {[
            "IIIT Vadodara (IIITV)",
            "NFSU, Gandhinagar",
            "RRU – Rashtriya Raksha University",
            "IACE – International Automobile Center of Excellence",
            "Vishva Umiya Foundation",
            "Gujarat Biotechnology University (GBU)",
            "NIFT, Gandhinagar",
            "DAIICT",
            "NIPER",
            "Deakin University",
            "Working professionals from TCS, Odoo, GIFT City & Hitachi",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Harmony Living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            {milestones.map((milestone, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{milestone.number}</p>
                <p className="text-sm md:text-base opacity-80">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet the Family</h2>
            <p className="text-muted-foreground mb-4">
              Harmony Living is run by a dedicated team who treats every resident like family. From our housekeeping staff to our security personnel, everyone is committed to making your stay comfortable and memorable.
            </p>
            <p className="text-muted-foreground">
              Our management team is always available to address any concerns and ensure that your experience at Harmony Living exceeds expectations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
