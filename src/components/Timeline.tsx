import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  campus?: string;
  category: "founding" | "expansion" | "milestone" | "reform";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1868,
    title: "University of California Founded",
    description: "The University of California was established in Oakland, later moving to Berkeley.",
    campus: "Berkeley",
    category: "founding"
  },
  {
    year: 1919,
    title: "UCLA Established",
    description: "University of California, Los Angeles was founded as the Southern Branch.",
    campus: "Los Angeles",
    category: "founding"
  },
  {
    year: 1944,
    title: "UCSF Becomes General Campus",
    description: "UC San Francisco transitions from medical school to full campus status.",
    campus: "San Francisco",
    category: "expansion"
  },
  {
    year: 1965,
    title: "UC San Diego Founded",
    description: "Established as a new campus focusing on science and engineering.",
    campus: "San Diego",
    category: "founding"
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
    category: "founding"
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