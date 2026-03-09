import { useState } from "react";
import Reveal from "~/components/Reveal";
import ScrambleText from "~/components/ScrambleText";
import GradientOrb from "~/components/ui/GradientOrb";

export interface TypeMember {
  readonly name: string;
  readonly role: string;
  readonly prodi: string;
  readonly batch: string;
}

interface MembersProps {
  members: readonly TypeMember[];
}

export default function Members({ members }: MembersProps) {
  const safeMembers = Array.isArray(members) ? members : [];
  const [selectedCategory, setSelectedCategory] = useState<"software" | "cloud" | null>(null);
  const [selectedMember, setSelectedMember] = useState<TypeMember | null>(null);

  // Separate members by category
  const softwareMembers = safeMembers.filter((member) =>
    member.role.toLowerCase().includes("software"),
  );

  const cloudMembers = safeMembers.filter((member) => member.role.toLowerCase().includes("cloud"));

  const handleCategoryClick = (category: "software" | "cloud") => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedMember(null);
  };

  const handleMemberClick = (member: TypeMember) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  const getCategoryColor = (category: "software" | "cloud") => {
    return category === "software" ? "from-gray-600 to-gray-200" : "from-gray-600 to-gray-200";
  };

  const getCategoryLightColor = (category: "software" | "cloud") => {
    return category === "software"
      ? "bg-gray-50 dark:bg-gray-950/50 border-gray-300 dark:border-gray-300"
      : "bg-gray-50 dark:bg-gray-950/50 border-gray-300 dark:border-gray-300";
  };

  return (
    <section
      aria-labelledby="members-heading"
      className="relative bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <GradientOrb color="blue" position="top-left" size="md" />
      <GradientOrb color="green" position="bottom-right" size="md" />

      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
          <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <ScrambleText
                as="p"
                text="Our Team"
                className="text-lg font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            ></span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <Reveal delay={0.1}>
              <h2
                id="members-heading"
                className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight"
              >
                Meet our talented members.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-600 dark:text-neutral-400 mt-4 max-w-2xl">
                A diverse group of passionate individuals driving innovation in technology.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-100">
          {/* Software Development Card */}
          <button
            type="button"
            onClick={() => handleCategoryClick("software")}
            className={`
              group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer
              bg-transparent text-inherit p-0 border-none
              ${
                selectedCategory === "software"
                  ? "border-gray-500 shadow-2xl scale-[1.02]"
                  : "border-gray-100 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-gray-300"
              }
              ${getCategoryLightColor("software")}
            `}
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="p-8">
              {/* Decorative background */}
              <div
                className={`
                  absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${getCategoryColor("software")}
                  opacity-10 rounded-bl-full transition-transform duration-500
                  group-hover:scale-150
                `}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100">
                    Software Development
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">
                    {softwareMembers.length} Members
                  </p>
                </div>
                <div
                  className={`
                    w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor("software")}
                    flex items-center justify-center text-white text-2xl
                    transform transition-transform duration-500 group-hover:rotate-180
                  `}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                ></div>
              </div>

              {/* Preview of members */}
              <div className="space-y-2 mb-6">
                {softwareMembers.slice(0, 3).map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {member.name}
                  </div>
                ))}
                {softwareMembers.length > 3 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +{softwareMembers.length - 3} more members
                  </p>
                )}
              </div>

              {/* Expand indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-200">
                <span>
                  {selectedCategory === "software" ? "Click to collapse" : "Click to expand"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${selectedCategory === "software" ? "rotate-180" : ""}`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Toggle members"
                >
                  <title>Toggle members visibility</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Cloud Infrastructure Card */}
          <button
            type="button"
            onClick={() => handleCategoryClick("cloud")}
            className={`
              group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer
              bg-transparent text-inherit p-0 border-none
              ${
                selectedCategory === "cloud"
                  ? "border-gray-500 shadow-2xl scale-[1.02]"
                  : "border-gray-100 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-gray-300"
              }
              ${getCategoryLightColor("cloud")}
            `}
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="p-8">
              {/* Decorative background */}
              <div
                className={`
                  absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor("cloud")}
                  opacity-10 rounded-bl-full transition-transform duration-500
                  group-hover:scale-150
                `}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100">
                    Cloud Infrastructure
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">
                    {cloudMembers.length} Members
                  </p>
                </div>
                <div
                  className={`
                    w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor("cloud")}
                    flex items-center justify-center text-white text-2xl
                    transform transition-transform duration-500 group-hover:rotate-180
                  `}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                ></div>
              </div>

              {/* Preview of members */}
              <div className="space-y-2 mb-6">
                {cloudMembers.slice(0, 3).map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {member.name}
                  </div>
                ))}
                {cloudMembers.length > 3 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +{cloudMembers.length - 3} more members
                  </p>
                )}
              </div>

              {/* Expand indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-200">
                <span>
                  {selectedCategory === "cloud" ? "Click to collapse" : "Click to expand"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${selectedCategory === "cloud" ? "rotate-180" : ""}`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Toggle members"
                >
                  <title>Toggle members visibility</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Expanded Member List */}
        {selectedCategory && (
          <div
            className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800"
            style={{
              animation: "fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-neutral-100">
              {selectedCategory === "software" ? "Software Development" : "Cloud Infrastructure"}{" "}
              Members
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(selectedCategory === "software" ? softwareMembers : cloudMembers).map((member) => (
                <button
                  type="button"
                  key={member.name}
                  onClick={() => handleMemberClick(member)}
                  className={`
                    group relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                    bg-transparent text-inherit border-none
                    ${
                      selectedMember === member
                        ? selectedCategory === "software"
                          ? "border-gray-500 shadow-xl scale-[1.02] bg-gray-50 dark:bg-gray-950/20"
                          : "border-gray-500 shadow-xl scale-[1.02] bg-gray-50 dark:bg-gray-950/20"
                        : "border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                    }
                  `}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`
                        w-12 h-12 rounded-full bg-gradient-to-br
                        ${selectedCategory === "software" ? "from-gray-300 to-gray-600" : "from-gray-300 to-gray-600"}
                        flex items-center justify-center text-white font-bold text-lg
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {member.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-neutral-100">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">{member.role}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400"></span>
                      <span className="text-gray-600 dark:text-neutral-400">{member.prodi}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400"></span>
                      <span className="text-gray-600 dark:text-neutral-400">
                        Batch {member.batch}
                      </span>
                    </div>
                  </div>

                  {/* Expanded details when clicked */}
                  {selectedMember === member && (
                    <div
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-neutral-800"
                      style={{
                        animation: "slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <p className="text-sm text-gray-500 dark:text-neutral-400">
                        Member since {member.batch}
                      </p>
                      <div
                        className={`
                        mt-2 inline-block px-3 py-1 text-xs rounded-full
                        ${
                          selectedCategory === "software"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        }
                      `}
                      >
                        Active Member
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-6 sm:p-12 border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 bg-grid-lines overflow-hidden">
          <p className="text-sm text-gray-500 dark:text-neutral-400 text-center">
            Total {safeMembers.length} active members across all divisions
          </p>
        </div>
      </div>
    </section>
  );
}
