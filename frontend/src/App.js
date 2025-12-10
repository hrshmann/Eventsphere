// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery'; // User gallery
import GalleryAdmin from './components/GalleryAdmin'; // Admin gallery
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import AdminEvents from './components/AdminEvents';
import AdminRegistrations from "./components/AdminRegistrations";
import ScrollToTop from './components/ScrollToTop';
import PrivateAdminRoute from './components/PrivateAdminRoute';
import ReportsDashboard from './components/ReportsDashboard';
import ResourceInventoryReport from './components/ResourceInventory';
import FeedbackRatingsReport from './components/FeedbackRatingsReport';
import RevenuePaymentsReport from './components/RevenuePaymentsReport';
import EventStatisticsReport from './components/EventStatisticsReport';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <div className="container">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Routes (Protected) */}
          <Route
            path="/admin"
            element={
              <PrivateAdminRoute>
                <AdminDashboard />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/events"
            element={
              <PrivateAdminRoute>
                <AdminEvents />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/registrations"
            element={
              <PrivateAdminRoute>
                <AdminRegistrations />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/gallery"
            element={
              <PrivateAdminRoute>
                <GalleryAdmin />
              </PrivateAdminRoute>
            }
          />

          {/* Reports Dashboard */}
          <Route
            path="/admin/reports"
            element={
              <PrivateAdminRoute>
                <ReportsDashboard />
              </PrivateAdminRoute>
            }
          />

          {/* Individual Report Pages */}
          <Route
            path="/admin/reports/resource-inventory"
            element={
              <PrivateAdminRoute>
                <ResourceInventoryReport />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/reports/feedback"
            element={
              <PrivateAdminRoute>
                <FeedbackRatingsReport />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/reports/revenue"
            element={
              <PrivateAdminRoute>
                <RevenuePaymentsReport />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/admin/reports/statistics"
            element={
              <PrivateAdminRoute>
                <EventStatisticsReport />
              </PrivateAdminRoute>
            }
          />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <p style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
                Page not found!
              </p>
            }
          />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
