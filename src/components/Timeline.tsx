import { useState, useEffect } from "react";
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

// Image mapping for local imports
const imageMap: Record<string, string> = {
  "/src/assets/uc-berkeley-1868.jpg": ucBerkeley1868,
  "/src/assets/ucla-1920s.jpg": ucla1920s,
  "/src/assets/ucsf-1940s.jpg": ucsf1940s,
  "/src/assets/ucsd-1960s.jpg": ucsd1960s,
  "/src/assets/ucmerced-2005.jpg": ucmerced2005,
};

const categoryColors = {
  founding: "bg-primary text-primary-foreground",
  expansion: "bg-secondary text-secondary-foreground", 
  milestone: "bg-accent text-accent-foreground",
  reform: "bg-muted text-muted-foreground"
};

export const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        const response = await fetch('/timeline-events.json');
        const events = await response.json();
        setTimelineEvents(events);
      } catch (error) {
        console.error('Failed to fetch timeline events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-muted-foreground">Loading timeline...</div>
      </div>
    );
  }

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
                        src={imageMap[event.image] || event.image} 
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