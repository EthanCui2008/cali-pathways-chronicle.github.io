import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([])

  useEffect(() => {
    fetch("/timeline-events.json")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Error loading timeline events:", error))
  }, [])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            University of California System History
          </h2>
          <p className="text-xl text-muted-foreground">
            From a small college in Oakland to a world-renowned research system
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                  
                  <div className="flex justify-center md:justify-end">
                    <div className="w-48 h-32 bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDE5MiAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik05NiA0OEMxMDUuOTQxIDQ4IDExNCA1Ni4wNTg5IDExNCA2NkMxMTQgNzUuOTQxMSAxMDUuOTQxIDg0IDk2IDg0Qzg2LjA1ODkgODQgNzggNzUuOTQxMSA3OCA2NkM3OCA1Ni4wNTg5IDg2LjA1ODkgNDggOTYgNDhaIiBmaWxsPSIjQ0JEMERFNSJ/Pgo8cGF0aCBkPSJNMzYgMTEySDE1NkwxMjYgNzJMOTYgOTBMNjYgNzJMMzYgMTEyWiIgZmlsbD0iI0NCRDE0RTUiLz4KPC9zdmc+";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}