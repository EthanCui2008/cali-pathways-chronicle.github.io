import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { Navigation } from "./components/Navigation"
import { Timeline } from "./components/Timeline"
import { Governance } from "./components/Governance"
import { WorksCited } from "./components/WorksCited"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
          <Navigation />
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/citations" element={<WorksCited />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App