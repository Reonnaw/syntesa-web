import type { LinksFunction, MetaFunction } from "react-router";
import Members from "~/components/memberLists/Member";
import { SEO } from "~/components/SEO";
import { members } from "~/constants/index_contents";
import { generateLinks, generateMeta } from "~/utils/seo";

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Members - Syntesa, Software Engineering Lab UNESA",
    description:
      "Advanced software engineering education and research facility at UNESA. Join our community of researchers and engineers advancing software construction, cloud infrastructure, and applied ML.",
    path: "/",
  });

export const links: LinksFunction = () => generateLinks("/");

export default function Member() {
  const breadcrumbs = [
    { name: "Home", path: "" },
    { name: "Members", path: "/member" },
  ];

  return (
    <div className="space-y-2 pt-16 sm:pt-18">
      <SEO breadcrumbs={breadcrumbs} />
      <Members members={members} />
    </div>
  );
}
