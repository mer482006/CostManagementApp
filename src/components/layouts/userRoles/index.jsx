import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function UserRoles(){
  return (
  <div className="container">
      <div className="box">
        <h2 className="heading">Users</h2>
        <button className="btn"><Link to="add-user">Add User</Link></button>
      </div>
      <div className="tab">
        <table className="uTable">
          <tr className="tableHeader">
            <th>SG ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Roles</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>A7701570</td>
            <td>Abishek T</td>
            <td>Abishek.T@ext.saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>A1567102</td>
            <td>Arthus Thomasset</td>
            <td>arthus.thomasset@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>B7726571</td>
            <td>BHARANIDHARAN L</td>
            <td>Bharanidharan.L@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>B0072387</td>
            <td>Baranidharan M</td>
            <td>Baranidharan.M@ext.saint-gobain.com</td>
            <td>Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>C7152266</td>
            <td>Chandra J L</td>
            <td>Chandra.JL@saint-gobain.com</td>
            <td>Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>D8118574 </td>
            <td>DHANYAN S </td>
            <td>Dhanyan.S@saint-gobain.com </td>
            <td>
              Finance Manager, Global Admin, Reviewer, Project Manager, System
              Admin
            </td>
            <td>👁</td>
          </tr>
          <tr>
            <td>D4281783</td>
            <td>Dineshkannan K</td>
            <td>Dineshkannan.K@saint-gobain.com</td>
            <td>
              Finance Manager, Global Admin, Reviewer, Project Manager, System
              Admin
            </td>
            <td>👁</td>
          </tr>
          <tr>
            <td>F5850123</td>
            <td>Francis Maria Jacko I</td>
            <td>FrancisMaria.Jacko@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>J2742342</td>
            <td>Jayamalini J</td>
            <td>Jayamalini.J@saint-gobain.com</td>
            <td>Finance Manager, Global Admin, Reviewer</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>J8737258</td>
            <td>Jerome FREOUR</td>
            <td>Jerome.Freour@saint-gobain.com</td>
            <td>Reviewer</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>J8026778</td>
            <td>John PRASATH</td>
            <td>John.Prasath@ext.saint-gobain.com</td>
            <td>Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>K6700404</td>
            <td>KARTHIKEYAN K</td>
            <td>Karthikeyan.K3@saint-gobain.com</td>
            <td>Reviewer</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>K8786861</td>
            <td>KAVIYARASI P</td>
            <td>Kaviyarasi.P@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>L6357210</td>
            <td>Lakshmi K</td>
            <td>Lakshmi.K@saint-gobain.com</td>
            <td>Finance Manager, Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>L9413468</td>
            <td>Lyndon SMITH</td>
            <td>Lyndon.Smith@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M7066107</td>
            <td>MANOOJKUMAR R</td>
            <td>Manoojkumar.R@saint-gobain.com</td>
            <td>Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M1740863</td>
            <td>MOHAMMED UMAR B</td>
            <td>MohammedUmar.B@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M0478255</td>
            <td>MUTHURAMAN M</td>
            <td>Muthuraman.M@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M6588614</td>
            <td>Madhumitha V</td>
            <td>MadhuMitha.V@ext.saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M7706018</td>
            <td>Martin Rijay X</td>
            <td>MartinRijay.X@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>M6148675</td>
            <td>Mathankumar M</td>
            <td>Mathankumar.M@saint-gobain.com</td>
            <td>Finance Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>N0366451</td>
            <td>Navin H</td>
            <td>Navin.H@ext.saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>N5632243</td>
            <td>Niranjan J</td>
            <td>Niranjan.Jayaprakash@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>P8306733</td>
            <td>PRADEEP P</td>
            <td>Pradeep.P@saint-gobain.com</td>
            <td>Global Admin, Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>R5533774</td>
            <td>Penchalapadu Ranganath</td>
            <td>Ranganath.Penchalpadu@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S4464680</td>
            <td>SABITHA M</td>
            <td>Sabitha.M@saint-gobain.com</td>
            <td>Project Manager</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S3510182</td>
            <td>SANTHOSH J</td>
            <td>Santhosh.J@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S0851151</td>
            <td>SHANKAR R</td>
            <td>Shankar.R@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S0854116</td>
            <td>SOLOMON JEYARAJ P</td>
            <td>Solomon.Jeyaraj@saint-gobain.com</td>
            <td></td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S2226272</td>
            <td>SRI HARAN S</td>
            <td>SriHaran.S@saint-gobain.com</td>
            <td></td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S8803478</td>
            <td>SRINIVASAN T</td>
            <td>Srinivasan.T@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S8574150</td>
            <td>SUGESHNA R</td>
            <td>Sugeshna.R@saint-gobain.com</td>
            <td>System Admin</td>
            <td>👁</td>
          </tr>
          <tr>
            <td>S2522176</td>
            <td>Sruthi R</td>
            <td>Sruthi.R@saint-gobain.com</td>
            <td>Global Admin</td>
            <td>👁</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

