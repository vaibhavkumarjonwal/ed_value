import { Clock, Users, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const rules = [
  {
    icon: Clock,
    title: "Entry Timings",
    items: [
      "Main gate closes at 11:00 PM on weekdays",
      "Weekend curfew extended to 11:30 PM",
      "Late entry requires prior permission from management",
      "Night-out requests must be submitted 24 hours in advance",
      "Emergency situations will be handled on a case-by-case basis",
    ],
  },
  {
    icon: Users,
    title: "Visitor Policy",
    items: [
      "Visitors allowed only in common areas during 10 AM - 7 PM",
      "Visitors must register at the reception desk",
      "No overnight guests permitted",
      "Family visits allowed with prior intimation",
      "Visitors must leave before 7 PM sharp",
    ],
  },
  {
    icon: Shield,
    title: "Security Rules",
    items: [
      "Carry your ID card at all times within premises",
      "Report any suspicious activity to security immediately",
      "Keep your room locked when not present",
      "Do not share room keys ",
      "CCTV surveillance in common areas for safety",
    ],
  },
  {
    icon: AlertTriangle,
    title: "General Conduct",
    items: [
      "Maintain silence in study areas and after 10 PM",
      "Respect fellow residents and staff",
      "No loud music or parties without permission",
      "Keep common areas clean after use",
      "Report maintenance issues promptly",
    ],
  },
];

const dosList = [
  "Pay rent on time by the 1st of each month",
  "Keep your room clean and organized",
  "Switch off lights and fans when not in use",
  "Inform management if you'll be away for extended periods",
  "Participate in community activities and events",
  "Report any damages or repairs needed",
  "Maintain cordial relationships with roommates",
];

const dontsList = [
  "Smoking and alcohol consumption on premises",
  "Illegal activities of any kind",
  "Cooking in rooms (use designated kitchen areas)",
  "Tampering with electrical fittings",
  "Subletting your room or bed",
  "Bringing pets without permission",
  "Making structural changes to rooms",
];

const Rules = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rules & Policies
            </h1>
            <p className="text-lg text-muted-foreground">
              Our guidelines ensure a safe, comfortable, and harmonious living environment for all residents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Rules */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {rule.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Do's & Don'ts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  Do's
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {dosList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-destructive/20">
              <CardHeader className="bg-destructive/5">
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-5 w-5" />
                  Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {dontsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
                Important Notice
              </h2>
              <p className="text-secondary-foreground/80 mb-4">
                Violation of any rules may result in warnings, penalties, or termination of accommodation depending on the severity. Management reserves the right to modify rules with prior notice.
              </p>
              <p className="text-secondary-foreground/80">
                For any clarifications or special requests, please contact the management. We're here to make your stay comfortable while maintaining a safe environment for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rules;
