import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Module3Page from "./pages/Module3Page";
import "./App.css";

const theme = {
  background: "#ffffff",
  text: "#000000",
  primary: "#1976d2",
  secondary: "#f50057",
};

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Navigation Header */}
        <nav
          style={{
            backgroundColor: theme.primary,
            padding: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "white", margin: 0 }}>ERP System</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                Home
              </Link>
              <Link
                to="/module3"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                Report Headers
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/module3" element={<Module3Page />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Home Page Component
const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <h1
        style={{ fontSize: "3rem", marginBottom: "1rem", color: theme.primary }}
      >
        Welcome to AI Analytics
      </h1>
      <p
        style={{ fontSize: "1.2rem", marginBottom: "3rem", color: theme.text }}
      >
        Experience the simplicity of a modern web platform with smart features
        tailored for you.
      </p>

      {/* Feature Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        <FeatureCard
          title="Report Headers Management"
          description="Manage school report headers with Module3 - configure school names, addresses, academic years, and sections."
          linkTo="/module3"
          buttonText="Manage Reports"
        />
        <FeatureCard
          title="Real-time Analytics"
          description="Real-time analytics and user engagement insights for better decision making."
        />
        <FeatureCard
          title="Customizable Preferences"
          description="Customizable user preferences and theming for personalized experience."
        />
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link
          to="/module3"
          style={{
            backgroundColor: theme.primary,
            color: "white",
            padding: "1rem 2rem",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Link>
        <a
          href="#learn-more"
          style={{
            backgroundColor: "transparent",
            color: theme.primary,
            padding: "1rem 2rem",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "1.1rem",
            border: `2px solid ${theme.primary}`,
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, linkTo, buttonText }) => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "left",
      }}
    >
      <h3 style={{ color: theme.primary, marginBottom: "1rem" }}>{title}</h3>
      <p
        style={{ color: theme.text, marginBottom: "1.5rem", lineHeight: "1.6" }}
      >
        {description}
      </p>
      {linkTo && buttonText && (
        <Link
          to={linkTo}
          style={{
            backgroundColor: theme.secondary,
            color: "white",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            display: "inline-block",
          }}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default App;
