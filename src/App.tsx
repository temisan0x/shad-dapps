import { SidebarProvider } from "./components/ui/sidebar"; 
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skeleton } from "./components/ui/skeleton";
import AppSidebar from "./components/app-sidebar";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <SidebarProvider> 
        <div className="flex h-screen">
          <AppSidebar />
          <div className="flex-1 overflow-auto">
            <Suspense fallback={<Skeleton className="w-full h-screen" />}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;