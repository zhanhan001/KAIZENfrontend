/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

export default {
  chart: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: { label: "ART Tests", data: [3, 37, 40, 21, 11, 10, 8] },
  },
  items: [
    {
      icon: { color: "primary", component: "person" },
      label: "eligible",
      progress: { content: "110", percentage: 90 },
    },
    {
      icon: { color: "info", component: "today" },
      label: "today",
      progress: { content: "40", percentage: 30 },
    },
    {
      icon: { color: "warning", component: "next_plan" },
      label: "tomorrow",
      progress: { content: "21", percentage: 15 },
    },
    {
      icon: { color: "error", component: "flag" },
      label: "flagged",
      progress: { content: "2", percentage: 10 },
    },
  ],
};
