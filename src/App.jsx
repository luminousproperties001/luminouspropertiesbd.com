import { BrowserRouter, Routes, Route } from "react-router-dom";


// Website Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";



// Public Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";
import Booking from "./pages/Booking";



// Admin Pages
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Projects from "./admin/pages/Projects";
import AddProject from "./admin/pages/AddProject";
import EditProject from "./admin/pages/EditProject";
import Bookings from "./admin/pages/Bookings";
import Messages from "./admin/pages/Messages";
import Customers from "./admin/pages/Customers";
import Gallery from "./admin/pages/Gallery";
import Settings from "./admin/pages/Settings";



import AdminLayout from "./admin/layouts/AdminLayout";


// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";





function WebsiteLayout({ children }) {

  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <CallButton />

      <WhatsAppButton />
    </>
  );

}





export default function App(){


return (

<BrowserRouter>

<Routes>



{/* ================= PUBLIC WEBSITE ================= */}



<Route

path="/"

element={
<WebsiteLayout>
<Home />
</WebsiteLayout>
}

/>



<Route

path="/about"

element={
<WebsiteLayout>
<AboutPage />
</WebsiteLayout>
}

/>



<Route

path="/projects"

element={
<WebsiteLayout>
<ProjectsPage />
</WebsiteLayout>
}

/>



<Route

path="/projects/:id"

element={
<WebsiteLayout>
<ProjectDetails />
</WebsiteLayout>
}

/>



<Route

path="/gallery"

element={
<WebsiteLayout>
<GalleryPage />
</WebsiteLayout>
}

/>



<Route

path="/contact"

element={
<WebsiteLayout>
<ContactPage />
</WebsiteLayout>
}

/>



<Route

path="/booking"

element={
<WebsiteLayout>
<Booking />
</WebsiteLayout>
}

/>





{/* ================= LOGIN ================= */}



<Route

path="/login"

element={<Login />}

/>







{/* ================= ADMIN PANEL ================= */}



<Route element={<ProtectedRoute />}>



<Route

path="/dashboard"

element={<AdminLayout />}

>



{/* Dashboard */}

<Route

index

element={<Dashboard />}

/>





{/* Projects */}


<Route

path="projects"

element={<Projects />}

/>



<Route

path="projects/add"

element={<AddProject />}

/>



<Route

path="projects/edit/:id"

element={<EditProject />}

/>





{/* Bookings */}


<Route

path="bookings"

element={<Bookings />}

/>





{/* Messages */}


<Route

path="messages"

element={<Messages />}

/>





{/* Customers */}


<Route

path="customers"

element={<Customers />}

/>





{/* Gallery */}

<Route

path="gallery"

element={<Gallery />}

/>





{/* Settings */}

<Route

path="settings"

element={<Settings />}

/>



</Route>


</Route>









{/* ================= 404 PAGE ================= */}



<Route

path="*"

element={

<WebsiteLayout>


<div className="
flex 
flex-col 
items-center 
justify-center 
min-h-[70vh] 
text-center
">


<h1 className="
text-7xl 
font-bold 
text-green-700
">

404

</h1>



<p className="
mt-4 
text-xl 
text-gray-600
">

Oops! Page Not Found

</p>



<p className="
mt-2 
text-gray-500
">

The page you are looking for doesn't exist.

</p>



</div>


</WebsiteLayout>

}

/>



</Routes>


</BrowserRouter>

);

}