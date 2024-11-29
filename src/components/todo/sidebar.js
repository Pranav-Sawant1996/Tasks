import React, { useState } from "react";
import styles from "../../style/dashboard.module.css";
import TaskIcon from "@mui/icons-material/Task";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

export default function Sidebar({ setRenderComponent, renderComponent }) {
  const location = useLocation();
  const { logout, userDetails } = useAuth();
  const currentUrl = location.pathname.split("/");
  let currentTab = currentUrl[currentUrl.length - 1];
  const navigate = useNavigate();
  const menuItems = [
    {
      svg: <DashboardIcon />,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fce25d356fd34528c4103107e7f9de413d4c59e3f2d1d468bdc258bb31afe667?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a",
      text: "Dashboard",
      tab: "dashboard",
      active: true,
    },
    {
      svg: <TaskIcon />,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/350ab48258028990b42d0db71853e53e73c8a3995a80ae23ce7c49bd63bc0c20?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a",
      text: "My Task",
      tab: "myTask",
    },
    {
      svg: <TaskIcon />,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/350ab48258028990b42d0db71853e53e73c8a3995a80ae23ce7c49bd63bc0c20?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a",
      text: "Ai Recommended Task",
      tab: "aiRecomm",
    }
  ];

  const changeTab = (tab) => {
    setRenderComponent(tab);
    if (tab === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(`/dashboard/${tab}`);
    }
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{userDetails.firstname} {userDetails.lastname}</h2>
        <p className={styles.userEmail}>{userDetails.email}</p>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => changeTab(item.tab)}
            >
              <a
                className={`${styles.navLink} ${
                  item.tab == currentTab ? styles.active : ""
                }`}
              >
                {item.svg}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.logoutButton} onClick={()=>logout()}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5603ea05e3074663bcfd7383788e4edc7c6581a26085ba938b43aef2dd96a6ca?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
          alt=""
          className={styles.logoutIcon}
        />
        <span>Logout</span>
      </button>
    </aside>
  );
}
