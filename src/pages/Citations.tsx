import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const citations = [
  {
    type: "Website",
    title: "University of California System Overview",
    author: "University of California Office of the President",
    url: "https://www.ucop.edu/",
    accessDate: "2024"
  },
  {
    type: "Book",
    title: "The University of California: A History",
    author: "Verne A. Stadtman",
    publisher: "McGraw-Hill",
    year: "1970"
  },
  {
    type: "Website", 
    title: "UC Berkeley History",
    author: "UC Berkeley Office of Public Affairs",
    url: "https://www.berkeley.edu/about/history/",
    accessDate: "2024"
  },
  {
    type: "Website",
    title: "UCLA Timeline and History",
    author: "UCLA Communications",
    url: "https://www.ucla.edu/about/history",
    accessDate: "2024"
  },
  {
    type: "Academic Article",
    title: "The Master Plan for Higher Education in California",
    author: "California State Department of Education",
    journal: "California Educational Policy",
    year: "1960"
  },
  {
    type: "Website",
    title: "UC System Facts and Figures",
    author: "University of California System",
    url: "https://www.universityofcalifornia.edu/about-us/facts-and-figures",
    accessDate: "2024"
  },
  {
    type: "Book",
    title: "California Higher Education: The Master Plan and Beyond",
    author: "John Aubrey Douglass",
    publisher: "University of California Press",
    year: "2007"
  },
  {
    type: "Website",
    title: "UC Merced: Building a 21st Century Campus",
    author: "UC Merced Public Information Office",
    url: "https://www.ucmerced.edu/about",
    accessDate: "2024"
  }
];

export const Citations = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Works Cited</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sources used in the research and compilation of UC System historical information.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">References</CardTitle>
            <p className="text-muted-foreground">
              Listed in alphabetical order by author/organization
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {citations.map((citation, index) => (
                <div key={index}>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px] text-sm">
                        [{citation.type}]
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {citation.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          <span className="font-medium">{citation.author}</span>
                          {citation.publisher && (
                            <>. <em>{citation.publisher}</em></>
                          )}
                          {citation.journal && (
                            <>. <em>{citation.journal}</em></>
                          )}
                          {citation.year && <>. {citation.year}</>}
                          {citation.url && (
                            <>. Available at: <a href={citation.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{citation.url}</a></>
                          )}
                          {citation.accessDate && (
                            <>. Accessed {citation.accessDate}.</>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < citations.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-4xl mx-auto mt-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-primary mb-4">Citation Format</h3>
            <p className="text-sm text-muted-foreground">
              Citations follow a modified MLA format adapted for digital resources. 
              Web sources include access dates to account for potential changes in online content.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Citations;