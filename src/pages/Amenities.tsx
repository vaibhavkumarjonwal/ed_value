import { Wifi, Shield, Zap, Sparkles, Utensils, Droplets, Car, BookOpen, Tv, WashingMachine, Wind, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Unlimited high-speed internet access throughout the premises. Perfect for online classes, work from home, and streaming.",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance, secure entry system, and trained security personnel.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply with automatic generator backup.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Professional housekeeping services to keep common areas and rooms clean and hygienic.",
  },
  {
    icon: Utensils,
    title: "Mess / Food Facility",
    description: "Nutritious home-style meals prepared fresh daily. Veg and non-veg options available.",
  },
  {
    icon: Droplets,
    title: "Water Supply",
    description: "24/7 water availability.",
  },
  {
    icon: Car,
    title: "Parking Space",
    description: "Secure parking space for two-wheelers and limited car parking available on request.",
  },
  {
    icon: BookOpen,
    title: "Study Room",
    description: "Dedicated quiet study area with proper lighting and comfortable seating for focused study sessions.",
  },

  {
  icon: Calendar,
  title: "Flexible Stay Options",
  description: "Short-term and long-term stay options available as per individual requirements.",
  },

  {
    icon: WashingMachine,
    title: "Laundry Facility",
    description: "Laundry service also available with minimal charges.",
  },
  {
    icon: Wind,
    title: "Ventilated Rooms",
    description: "Well-ventilated rooms with windows ensuring natural light and fresh air circulation.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Regular community gatherings, movie nights, and celebrations to foster a sense of belonging.",
  },
];

const Amenities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Amenities
            </h1>
            <p className="text-lg text-muted-foreground">
              We provide everything you need for a comfortable and hassle-free stay. Focus on your goals while we take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
                        <p className="text-sm text-muted-foreground">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      {/* <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Everything Included</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Our all-inclusive packages mean you don't have to worry about hidden costs. Electricity, water, and maintenance are all covered in your monthly rent.
            </p>
          </div>
        </div>
      </section> */}

      {/* Additional Info */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Location Convenience</h3>
                <p className="text-muted-foreground">
                  Our PG is strategically located near major educational institutions, IT parks, and public transport hubs. Nearby you'll find grocery stores, pharmacies, restaurants, and ATMs within walking distance.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Flexible Entry Timings</h3>
                <p className="text-muted-foreground">
                  We understand that students and professionals have varying schedules. While we maintain security protocols, we offer reasonable entry timings that accommodate late-night study sessions or work shifts.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Responsive Management</h3>
                <p className="text-muted-foreground">
                  Our on-site management team is always available to address any concerns or maintenance requests promptly. We believe in open communication and quick resolution of issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Amenities;
