import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/projects/:projectId", "routes/projects.$projectId.tsx"),
  route("/experience", "routes/experience.tsx"),
  route("/experience/:experienceId", "routes/experience.$experienceId.tsx"),
  route("/about", "routes/about.tsx"),
] satisfies RouteConfig;
