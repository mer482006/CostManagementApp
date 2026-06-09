import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserForm.css";

export default function UserForm() {
  const [formData, setFormData] = useState({
    sgid: "",
    name: "",
    email: "",
    userRoles: [], 
  });

  const [status, setStatus] = useState({ loading: false, error: "" });

  const handleState = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!formData.sgid.trim()) return;

    setStatus({ loading: true, error: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 800)); 

      const mockDatabase = {
        "A7701570": { name: "Abishek T", email: "Abishek.T@saint-gobain.com", initialRole: "Global Admin" },
        "A1567102": { name: "Arthus Thomasset", email: "Arthus.Thomasset@saint-gobain.com", initialRole: "Global Admin" },
        "B7726571": { name: "BHARANIDHARAN L", email: "BHARANIDHARAN.L@saint-gobain.com", initialRole: "Global Admin" },
        "B0072387": { name: "Baranidharan M", email: "Baranidharan.M@saint-gobain.com", initialRole: "Project Manager" },
        "C7152266": { name: "Chandra J L", email: "Chandra.J.L@saint-gobain.com", initialRole: "Global Admin" },
        "D8118574": { name: "DHANYAN S", email: "DHANYAN.S@saint-gobain.com", initialRole: "Finance Manager, Global Admin, Reviewer, Project Manager, System Admin" },
        "D4281783": { name: "Dineshkannan K", email: "Dineshkannan.K@saint-gobain.com", initialRole: "Finance Manager, Global Admin, Reviewer, Project Manager, System Admin" },
        "F5850123": { name: "Fayaz Ahamed", email: "Fayaz.Ahamed@saint-gobain.com", initialRole: "Global Admin" },
        "J2742342": { name: "JayaMalini J", email: "JayaMalini.J@saint-gobain.com", initialRole: "Finance Manager, Global Admin, Reviewer" },
        "J8737258": { name: "Jerome FREOUR", email: "Jerome.Freour@saint-gobain.com", initialRole: "Reviewer" },
        "J8026778": { name: "John PRASATH", email: "John.Prasath@ext.saint-gobain.com", initialRole: "Project Manager" },
        "K6700404": { name: "KARTHIKEYAN K", email: "Karthikeyan.K3@saint-gobain.com", initialRole: "Reviewer" },
        "K8786861": { name: "KAVIYARASI P", email: "Kaviyarasi.P@saint-gobain.com", initialRole: "Global Admin" },
        "L6357210": { name: "Lakshmi K", email: "Lakshmi.K@saint-gobain.com", initialRole: "Finance Manager, Global Admin" },
        "L9413468": { name: "Lyndon SMITH", email: "Lyndon.Smith@saint-gobain.com", initialRole: "Global Admin" },
        "M7066107": { name: "MANOOJKUMAR R", email: "Manoojkumar.R@saint-gobain.com", initialRole: "Project Manager" },
        "M1740863": { name: "MOHAMMED UMAR B", email: "MohammedUmar.B@saint-gobain.com", initialRole: "Global Admin" },
        "M0478255": { name: "MUTHURAMAN M", email: "Muthuraman.M@saint-gobain.com", initialRole: "Global Admin" },
        "M6588614": { name: "Madhumitha V", email: "MadhuMitha.V@ext.saint-gobain.com", initialRole: "Global Admin" },
        "M7706018": { name: "Martin Rijay X", email: "MartinRijay.X@saint-gobain.com", initialRole: "Global Admin" },
        "M6148675": { name: "Mathankumar M", email: "Mathankumar.M@saint-gobain.com", initialRole: "Finance Manager" },
        "N0366451": { name: "Navin H", email: "Navin.H@ext.saint-gobain.com", initialRole: "Global Admin" },
        "N5632243": { name: "Niranjan J", email: "Niranjan.Jayaprakash@saint-gobain.com", initialRole: "Global Admin" },
        "P8306733": { name: "PRADEEP P", email: "Pradeep.P@saint-gobain.com", initialRole: "Global Admin, Project Manager" },
        "R5533774": { name: "Penchalapadu Ranganath .", email: "Ranganath.Penchalpadu@saint-gobain.com", initialRole: "Global Admin" },
        "S4464680": { name: "SABITHA M", email: "Sabitha.M@saint-gobain.com", initialRole: "Project Manager" },
        "S3510182": { name: "SANTHOSH J", email: "Santhosh.J@saint-gobain.com", initialRole: "Global Admin" },
        "S0851151": { name: "SHANKAR R", email: "Shankar.R@saint-gobain.com", initialRole: "Global Admin" },
        "S0854116": { name: "SOLOMON JEYARAJ P", email: "Solomon.Jeyaraj@saint-gobain.com", initialRole: "" },
        "S2226272": { name: "SRI HARAN S", email: "SriHaran.S@saint-gobain.com", initialRole: "" },
        "S8803478": { name: "SRINIVASAN T", email: "Srinivasan.T@saint-gobain.com", initialRole: "Global Admin" },
        "S8574150": { name: "SUGESHNA R", email: "Sugeshna.R@saint-gobain.com", initialRole: "System Admin" },
        "S2522176": { name: "Sruthi R", email: "Sruthi.R@saint-gobain.com", initialRole: "Global Admin" }
      };
      const userData = mockDatabase[formData.sgid.toUpperCase()];

      if (userData) {
        setFormData((prev) => ({
          ...prev,
          name: userData.name,
          email: userData.email,
          userRoles: userData.initialRole ? [userData.initialRole] : [],
        }));
      } else {
        setStatus({ loading: false, error: "User SGID not found." });
        setFormData((prev) => ({ ...prev, name: "", email: "", userRoles: [] }));
      }
    } catch (err) {
      setStatus({ loading: false, error: "Server error. Try again." });
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log("Role assigned successfully:", formData);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    setFormData((prev) => {
      const currentRoles = prev.userRoles || []; 
      
      const updatedRoles = checked
        ? [...currentRoles, value]
        : currentRoles.filter((role) => role !== value);
      
      return { 
        ...prev, 
        userRoles: updatedRoles 
      };
    });
  };

  return (
    <div className="container">
      <div className="top-bar">
        <div>
          <Link to=".." relative="path" className="back">❮ Back</Link>
          <h2 className="heading">Assign Roles</h2>
        </div>
      </div>
        <div className="box">
          <div className="form-layout-wrapper">
            {/* Search Tool Area */}
            <form onSubmit={handleSearch} className="search-bar-form">
              <div className="search-bar-container">
                <input
                  type="text"
                  name="sgid"
                  placeholder="Enter user SGID..."
                  value={formData.sgid}
                  onChange={handleState}
                  disabled={status.loading}
                  className="search-bar-input"
                  required
                />
                <button
                  type="submit"
                  className="search-bar-btn"
                  disabled={status.loading}
                >
                  {status.loading ? "..." : "Search"}
                </button>
              </div>
            </form>

            {/* Profile Data & Multi-Roles Panel */}
            {formData.name && (
              <div className="details-column">
                <form onSubmit={handleFinalSubmit}>
                  <div className="field-row">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleState}
                    />
                  </div>

                  <div className="field-row" style={{ marginTop: "15px" }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleState}
                    />
                  </div>

                  <div className="field-row" style={{ marginTop: "20px" }}>
                    <label style={{ fontWeight: "bold" }}>Roles</label>

                    <div className="checkbox-list">
                      {[
                        "Project Manager",
                        "Finance Manager",
                        "Global Admin",
                        "Reviewer",
                        "System Admin",
                        "Gypsum",
                        "Insulation",
                      ].map((role) => (
                        <label key={role} className="checkbox-item">
                          <input
                            type="checkbox"
                            value={role}
                            checked={(formData.userRoles || []).includes(role)}
                            onChange={handleCheckboxChange}
                          />
                          {role}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn assign-btn"
                    style={{ marginTop: "25px", backgroundColor: "#28a745" }}
                  >
                    Assign
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
