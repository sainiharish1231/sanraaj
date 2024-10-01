import React from "react";
import Team from "../Component/Team";
import { Metadata } from "next";
import { useTeam } from "@/hooks/useTeamData";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: ` San Raj  Team  Mambers `,
    description: ` San Raj is a Software Development company providing   technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.`,
    keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution", san raj team`,
  };
}
export default function TeamPage() {
  return (
    <div className="p-6 bg-[#101118] mb-10">
      <h1 className="text-3xl font-bold text-center mb-6">Meet Our Team</h1>
      <Team />
    </div>
  );
}
