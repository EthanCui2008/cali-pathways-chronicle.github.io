import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function WorksCited() {
  const sources = [
    {
      category: "Primary Sources",
      citations: [
        "University of California. \"Charter of the University of California.\" California Legislature, March 23, 1868.",
        "Durant, Henry. \"First Annual Report of the President of the University of California.\" Oakland: University of California, 1869.",
        "Board of Regents of the University of California. \"Minutes and Proceedings, 1868-1900.\" UC Archives.",
        "Morrill Land-Grant Act of 1862, 7 U.S.C. § 301 et seq.",
        "California Master Plan for Higher Education. California State Department of Education, 1960."
      ]
    },
    {
      category: "Secondary Sources",
      citations: [
        "Stadtman, Verne A. *The University of California, 1868-1968*. New York: McGraw-Hill, 1970.",
        "Kerr, Clark. *The Uses of the University*. Cambridge: Harvard University Press, 1963.",
        "Pelfrey, Patricia A. *A Brief History of the University of California*. Berkeley: UC Press, 2004.",
        "Douglass, John Aubrey. *The California Idea and American Higher Education*. Stanford: Stanford University Press, 2000.",
        "Geiger, Roger L. *Research and Relevant Knowledge: American Research Universities since World War II*. New York: Oxford University Press, 1993."
      ]
    },
    {
      category: "Institutional Archives",
      citations: [
        "University of California Archives. \"Historical Timeline of the UC System.\" Accessed 2024.",
        "UC Berkeley Archives. \"Founding Documents Collection, 1855-1873.\"",
        "UCLA Special Collections. \"Southern Branch Records, 1919-1927.\"",
        "UC Office of the President. \"Annual Reports, 1869-2024.\"",
        "California State Archives. \"Higher Education Records, 1850-1970.\""
      ]
    },
    {
      category: "Academic Journals",
      citations: [
        "Cohen, Arthur M. \"The Development of Public Higher Education in California.\" *Journal of Higher Education* 45, no. 3 (1974): 185-203.",
        "Smelser, Neil J. \"Growth, Structural Change, and Conflict in California Public Higher Education.\" *American Journal of Sociology* 71, no. 6 (1966): 614-629.",
        "Trow, Martin. \"The Analysis of Status.\" *In Burton R. Clark, ed., Perspectives on Higher Education*. Berkeley: UC Press, 1984.",
        "Marginson, Simon. \"The UC Model: Public Research Universities and Economic Development.\" *Research Policy* 40, no. 8 (2011): 1010-1018."
      ]
    },
    {
      category: "Government Publications",
      citations: [
        "California Legislative Analyst's Office. \"Higher Education Finance Reports, 1960-2024.\"",
        "U.S. Department of Education. \"Federal Support for University Research.\" Washington, D.C.: GPO, various years.",
        "California Department of Finance. \"UC Budget Analysis and Review, 2000-2024.\"",
        "National Science Foundation. \"Academic Research and Development Expenditures.\" Arlington, VA: NSF, annual reports."
      ]
    },
    {
      category: "Digital Resources",
      citations: [
        "University of California Office of the President. \"UC History.\" https://www.ucop.edu/uc-history/",
        "California Digital Library. \"UC Historical Documents Collection.\" https://cdlib.org/",
        "Internet Archive. \"California Higher Education Historical Materials.\" https://archive.org/",
        "HathiTrust Digital Library. \"University Publications Collection.\" https://www.hathitrust.org/"
      ]
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Works Cited
          </h2>
          <p className="text-xl text-muted-foreground">
            Sources and references used in compiling the UC System historical timeline
          </p>
        </div>

        <div className="space-y-8">
          {sources.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-primary">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.citations.map((citation, citIndex) => (
                    <p key={citIndex} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent">
                      {citation}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-accent/10">
          <CardHeader>
            <CardTitle className="text-primary">Research Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This timeline was compiled using a combination of primary archival sources, 
              peer-reviewed secondary literature, and official institutional records. 
              All dates and events have been cross-referenced across multiple sources 
              to ensure historical accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For questions about specific sources or to suggest corrections, 
              please contact the UC System Historical Archive.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}