/* eslint-disable no-unused-vars */
import React from "react";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import UserProfileLite from "./views/UserProfileLite";
import Messages from "./views/Messages";
import MyPatients from "./views/MyPatients";

const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard,
  },
  {
    path: "/mypatients",
    layout: DefaultLayout,
    component: MyPatients,
  },
  {
    path: "/messages",
    layout: DefaultLayout,
    component: Messages,
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite,
  },
];

export default routes;
