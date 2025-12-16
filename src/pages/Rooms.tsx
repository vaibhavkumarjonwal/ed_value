import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import roomSingle from "@/assets/4bed.jpeg";
import roomDouble from "@/assets/2bed.jpeg";
import roomTriple from "@/assets/3bed.jpeg";

const rooms = [
  {
    name: "Double Sharing",
    description: "Shared accommodation for two residents in one room",
    // price: "₹12,500",
    image: roomDouble,
    popular: true,
    amenities: [
      "Room shared by 2 residents",
      "Common attached bathroom",
      "Two individual study desks",
      "Two wardrobes / storage spaces",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Meals included (Optional)",
      // "Power backup",
    ],
  },
  {
    name: "Triple Sharing",
    description: "Comfortable shared living for three residents",
    // price: "₹10,000",
    image: roomTriple,
    popular: false,
    amenities: [
      "Room shared by 3 residents",
      "Common attached bathroom",
      "Three individual study desks",
      "Personal storage space",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Meals included (Optional)",
      // "Power backup",
    ],
  },
  {
    name: "Four Sharing",
    description: "Economical shared accommodation for four residents",
    // price: "₹8,500",
    image: roomSingle, // import this image
    popular: false,
    amenities: [
      "Room shared by 4 residents",
      "Common attached bathroom",
      "Four individual study desks",
      "Personal storage space",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Meals included (Optional)",
      // "Power backup",
    ],
  },
];



const addOns = [
  { name: "Meals (Veg)", price: "₹3,500/month", description: "Breakfast, Evening Snacks, Lunch & Dinner" },
  { name: "Meals (Non-Veg)", price: "₹4,000/month", description: "Breakfast, Lunch & Dinner with Non-Veg options" },
  { name: "Laundry Service", price: "₹500/month", description: "Weekly laundry service" },
  { name: "AC Room", price: "+₹2,000/month", description: "Air-conditioned room upgrade" },
];

const Rooms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooms & Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the perfect room type that fits your needs and budget. All rooms include basic amenities with optional add-ons.
            </p>
          </div>
        </div>
      </section>

      Room Cards
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className={`overflow-hidden relative ${room.popular ? 'ring-2 ring-primary' : ''}`}>
                {room.popular && (
                  <Badge className="absolute top-4 right-4 z-10">Most Popular</Badge>
                )}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">{room.name}</h3>
                      <p className="text-sm text-muted-foreground">{room.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    {/* <span className="text-4xl font-bold text-primary">{room.price}</span> */}
                    <span className="text-muted-foreground"></span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Optional Add-ons</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customize your stay with these additional services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{addon.price}</p>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Deposit Info */}
      <section className="py-16">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-secondary-foreground mb-6">
                Payment & Deposit Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-secondary-foreground/80">
                <div>
                  <h3 className="font-semibold text-secondary-foreground mb-2">Security Deposit</h3>
                  <p className="text-sm">
                    A refundable security deposit equal to 2 months' rent is required at the time of admission. This is fully refundable upon checkout, subject to terms and conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground mb-2">Monthly Payment</h3>
                  <p className="text-sm">
                    Rent is due on the 1st of every month. We accept UPI, bank transfer, and cash payments. Late payment may attract a nominal fee.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground mb-2">Notice Period</h3>
                  <p className="text-sm">
                    A minimum of 30 days notice is required for vacating the premises. This helps us plan and ensure smooth transitions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground mb-2">Flexible Plans</h3>
                  <p className="text-sm">
                    We offer both long-term and short-term stays. Contact us for special rates on annual bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
