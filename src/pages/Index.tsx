import { Link } from "react-router-dom";
import { Shield, MapPin, Wallet, Wifi, Utensils, Clock, ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/orbit.webp";
import roomSingle from "@/assets/2bed.jpeg";
import roomDouble from "@/assets/3bed.jpeg";
import roomTriple from "@/assets/4bed.jpeg";

const highlights = [
  {
    icon: Wallet,
    title: "Affordable Rent",
    description: "Budget-friendly pricing designed for students and working professionals",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "24/7 security with CCTV surveillance and secure entry systems",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Walking distance to colleges, offices, and public transport",
  },
];

const roomTypes = [
  // {
  //   name: "Single Room",
  //   price: "₹15,000",
  //   image: roomSingle,
  //   features: ["Private space", "Attached bathroom", "Study desk"],
  // },
  {
    name: "Double Sharing",
    // price: "",
    image: roomSingle,
    features: ["Comfortable Shared Accommodation", "Shared facilities", "Two Dedicated Study Desks"],
  },
  {
    name: "Triple Sharing",
    // price: "₹10,000",
    image: roomTriple,
    features: ["Comfortable Shared Accommodation", "Shared facilities", "Three Individual Study Desks"],
  },

   {
    name: "Four Sharing",
    // price: "₹7,000",
    image: roomTriple,
    features: ["Best value", "Shared facilities", "Four Dedicated Study Desks"],
  },
];

const testimonials = [
  {
    name: "Kaustubh Duse",
    role: "Engineering Student",
    text: "Harmony Living has been my home for 2 years now. The staff is friendly, food is great, and I feel completely safe here.",
    rating: 5,
  },
  {
    name: "Shobhit Gupta",
    role: "Working Professional",
    text: "Clean rooms, excellent Wi-Fi, and perfect location near my office. Highly recommended for professionals!",
    rating: 5,
  },
  {
    name: "Nihalmayi",
    role: "Student",
    text: "The quiet environment is perfect for my studies. I never worry during exam season.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Your Home Away From Home
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8">
              Safe, comfortable, and affordable PG accommodation for students and working professionals. Experience hassle-free living with all modern amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                <Link to="/rooms">View Rooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Harmony Living?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand what matters most to students and professionals. Here's what makes us stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Rooms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of room types to suit your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomTypes.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                    <div className="text-right">
                      {/* <p className="text-2xl font-bold text-primary">{room.price}</p> */}
                      <p className="text-xs text-muted-foreground"></p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/rooms">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Amenities */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <Wifi className="h-10 w-10 mx-auto mb-3" />
              <p className="font-medium">High-Speed Wi-Fi</p>
            </div>
            <div>
              <Utensils className="h-10 w-10 mx-auto mb-3" />
              <p className="font-medium">Homely Meals</p>
            </div>
            <div>
              <Shield className="h-10 w-10 mx-auto mb-3" />
              <p className="font-medium">24/7 Security</p>
            </div>
            <div>
              <Clock className="h-10 w-10 mx-auto mb-3" />
              <p className="font-medium">Power Backup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Residents Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our residents have to say about living at Harmony Living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
              Ready to Move In?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule a visit today and see why Harmony Living is the preferred choice for students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                <a href="tel:+919106161585 ">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
