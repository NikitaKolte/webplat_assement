import React from "react";
import "../styles/sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Sidebar() {
  return (
    <aside className="asidebar">
      <ul>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Transactions</a>
        </li>
        <li>
          <a href="">Settlement</a>
        </li>
        <li>
          <a href="">Refunds</a>
        </li>
        <li>
          <a href="">Reports</a>
        </li>
        <li>
          <a href="">Dispute</a>
        </li>
        <li>
          <a href="">Service Alerts</a>
        </li>
        <li>
          <a href="">Payment Links </a>
        </li>
        <li>
          <a href="">Payment Pages</a>
        </li>
        <li>
          <a className="active" href="">
            <SettingsIcon />
            Settings
          </a>
        </li>
        <li>
          <a href="">My Profile</a>
        </li>
        <li>
          <a href="">Manage Team</a>
        </li>
      </ul>
    </aside>
  );
}
