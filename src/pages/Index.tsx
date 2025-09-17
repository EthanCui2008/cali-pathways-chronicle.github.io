import { Timeline } from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            University of California System Timeline
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore the rich history of the UC system from its founding in 1868 to the present day. 
            Click on any event to learn more about the milestones that shaped California's premier public university system.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Index;
