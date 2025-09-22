import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Governance() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            UC System Governance
          </h2>
          <p className="text-xl text-muted-foreground">
            Understanding the leadership and oversight structure of the University of California
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Board of Regents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UC Board of Regents is the governing body of the University of California system. 
                Established in 1868 with the university's founding charter, the Board provides oversight 
                and governance for all UC campuses, medical centers, and affiliated institutions.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Composition:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>18 appointed members (12-year terms)</li>
                <li>7 ex officio members including the Governor, Lieutenant Governor, and Assembly Speaker</li>
                <li>2 student regent representatives</li>
                <li>2 faculty representatives</li>
                <li>1 staff advisor</li>
                <li>1 alumni regent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UC President</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UC President serves as the chief executive officer of the entire University of California system, 
                overseeing all ten campuses and reporting directly to the Board of Regents.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>System-wide academic and administrative leadership</li>
                <li>Budget oversight and resource allocation</li>
                <li>Strategic planning and policy development</li>
                <li>Public representation of the UC system</li>
                <li>Coordination with state government and federal agencies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campus Chancellors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each UC campus is led by a Chancellor who serves as the chief executive officer 
                of that particular campus, reporting to the UC President.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Campus Leadership Structure:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Chancellor - Chief Executive Officer</li>
                <li>Provost/Executive Vice Chancellor - Chief Academic Officer</li>
                <li>Vice Chancellors - Various administrative divisions</li>
                <li>Academic Senate - Faculty governance body</li>
                <li>Student government - Student representation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Senate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Academic Senate is the faculty governance body that shares authority with 
                the administration in matters of academic policy, curriculum, and faculty personnel decisions.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Key Functions:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Curriculum approval and academic standards</li>
                <li>Faculty hiring, promotion, and tenure decisions</li>
                <li>Student admissions policies</li>
                <li>Degree requirements and conferral</li>
                <li>Academic freedom protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funding and Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UC system operates with a complex funding structure involving state appropriations, 
                tuition and fees, research grants, and other revenue sources.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Primary Revenue Sources:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>State general fund appropriation</li>
                <li>Student tuition and fees</li>
                <li>Federal and private research grants</li>
                <li>Medical center revenues</li>
                <li>Investment income and endowments</li>
                <li>Auxiliary enterprises (housing, dining, etc.)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}