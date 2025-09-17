import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const campusData = [
  {
    name: "UC Berkeley",
    founded: 1868,
    enrollment: "45,000+",
    specialties: ["Engineering", "Business", "Computer Science"],
    notable: "Flagship campus, most Nobel laureates"
  },
  {
    name: "UCLA", 
    founded: 1919,
    enrollment: "47,000+",
    specialties: ["Film", "Medicine", "Psychology"],
    notable: "Largest UC campus by enrollment"
  },
  {
    name: "UC San Diego",
    founded: 1960,
    enrollment: "38,000+", 
    specialties: ["Bioengineering", "Oceanography", "Medicine"],
    notable: "Leading research in life sciences"
  },
  {
    name: "UC San Francisco",
    founded: 1864,
    enrollment: "3,000+",
    specialties: ["Medicine", "Dentistry", "Pharmacy"],
    notable: "Graduate programs only, health sciences focus"
  },
  {
    name: "UC Santa Barbara",
    founded: 1909,
    enrollment: "26,000+",
    specialties: ["Physics", "Engineering", "Environmental Studies"],
    notable: "Beautiful coastal campus"
  },
  {
    name: "UC Irvine",
    founded: 1965,
    enrollment: "36,000+",
    specialties: ["Computer Science", "Medicine", "Business"],
    notable: "Planned campus design, strong in STEM"
  },
  {
    name: "UC Davis",
    founded: 1905,
    enrollment: "39,000+",
    specialties: ["Agriculture", "Veterinary Medicine", "Engineering"],
    notable: "Leading agricultural research"
  },
  {
    name: "UC Santa Cruz",
    founded: 1965,
    enrollment: "19,000+",
    specialties: ["Astronomy", "Marine Biology", "Psychology"],
    notable: "Unique college system, forest campus"
  },
  {
    name: "UC Riverside",
    founded: 1954,
    enrollment: "26,000+",
    specialties: ["Agriculture", "Engineering", "Medicine"],
    notable: "Most diverse UC campus"
  },
  {
    name: "UC Merced",
    founded: 2005,
    enrollment: "9,000+",
    specialties: ["Engineering", "Natural Sciences", "Social Sciences"],
    notable: "Newest campus, sustainable design"
  }
];

export const Information = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">UC System Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The University of California system consists of 10 campuses, serving over 280,000 students 
            and conducting world-class research across diverse fields.
          </p>
        </div>

        <div className="mb-12">
          <Card className="bg-gradient-hero text-white">
            <CardHeader>
              <CardTitle className="text-2xl">System Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">10</div>
                  <div className="text-sm opacity-90">Campuses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">280,000+</div>
                  <div className="text-sm opacity-90">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">70+</div>
                  <div className="text-sm opacity-90">Nobel Laureates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">$41B</div>
                  <div className="text-sm opacity-90">Annual Budget</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campusData.map((campus) => (
            <Card key={campus.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-primary">{campus.name}</CardTitle>
                  <Badge variant="secondary">Est. {campus.founded}</Badge>
                </div>
                <p className="text-muted-foreground">Enrollment: {campus.enrollment}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Key Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {campus.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Notable Feature:</h4>
                    <p className="text-sm text-muted-foreground">{campus.notable}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;