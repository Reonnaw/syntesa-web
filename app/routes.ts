import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    index("routes/_index.tsx"),
    route("programs", "routes/programs.tsx"),
    route("about", "routes/about.tsx"),
    route("members", "routes/members.tsx"),
  ]),
] satisfies RouteConfig;
