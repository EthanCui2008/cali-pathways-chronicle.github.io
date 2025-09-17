import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Import timeline images
import ucBerkeley1868 from "@/assets/uc-berkeley-1868.jpg";
import ucla1920s from "@/assets/ucla-1920s.jpg";
import ucsf1940s from "@/assets/ucsf-1940s.jpg";
import ucsd1960s from "@/assets/ucsd-1960s.jpg";
import ucmerced2005 from "@/assets/ucmerced-2005.jpg";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  campus?: string;
  category: "founding" | "expansion" | "milestone" | "reform";
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1868,
    title: "University of California Founded",
    description: "The University of California was established in Oakland, later moving to Berkeley.",
    campus: "Berkeley",
    category: "founding",
    image: ucBerkeley1868
  },
  {
    year: 1919,
    title: "UCLA Established",
    description: "University of California, Los Angeles was founded as the Southern Branch.",
    campus: "Los Angeles",
    category: "founding",
    image: ucla1920s
  },
  {
    year: 1944,
    title: "UCSF Becomes General Campus",
    description: "UC San Francisco transitions from medical school to full campus status.",
    campus: "San Francisco",
    category: "expansion",
    image: ucsf1940s
  },
  {
    year: 1965,
    title: "UC San Diego Founded",
    description: "Established as a new campus focusing on science and engineering.",
    campus: "San Diego",
    category: "founding",
    image: ucsd1960s
  },
  {
    year: 1965,
    title: "UC Irvine Founded",
    description: "Orange County receives its own UC campus.",
    campus: "Irvine",
    category: "founding"
  },
  {
    year: 1968,
    title: "UC Santa Barbara Joins System",
    description: "Former independent college becomes part of UC system.",
    campus: "Santa Barbara",
    category: "expansion"
  },
  {
    year: 1972,
    title: "UC Santa Cruz Founded",
    description: "Innovative campus with unique college system established.",
    campus: "Santa Cruz",
    category: "founding"
  },
  {
    year: 1988,
    title: "UC Riverside Achieves General Campus Status",
    description: "Transitions from agricultural research station to full campus.",
    campus: "Riverside",
    category: "expansion"
  },
  {
    year: 2005,
    title: "UC Merced Opens",
    description: "First new UC campus in the 21st century, serving the Central Valley.",
    campus: "Merced",
    category: "founding",
    image: ucmerced2005
  }
];

const categoryColors = {
  founding: "bg-primary text-primary-foreground",
  expansion: "bg-secondary text-secondary-foreground", 
  milestone: "bg-accent text-accent-foreground",
  reform: "bg-muted text-muted-foreground"
};

export const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-timeline-line"></div>
      
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className="relative flex items-start pl-16">
            <div className="absolute left-6 w-4 h-4 bg-timeline-dot rounded-full border-4 border-background shadow-lg"></div>
            
            <Card 
              className={cn(
                "flex-1 cursor-pointer transition-all duration-300 hover:shadow-lg",
                selectedEvent === index && "ring-2 ring-primary shadow-xl"
              )}
              onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary text-xl">{event.year}</CardTitle>
                  <Badge className={categoryColors[event.category]}>
                    {event.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                {event.campus && (
                  <p className="text-sm text-muted-foreground">UC {event.campus}</p>
                )}
              </CardHeader>
              
              {(selectedEvent === index || selectedEvent === null) && (
                <CardContent className="pt-0">
                  {event.image && (
                    <div className="mb-4">
                      <img 
                        src={event.image} 
                        alt={`${event.title} - ${event.campus ? `UC ${event.campus}` : 'UC System'}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  <p className="text-foreground">{event.description}</p>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};