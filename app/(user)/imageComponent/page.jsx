// components/ImageComponent.jsx
import React from "react";

const teamMembers = [
  {
    initials: "VBT",
    name: "Thapa Technical",
    role: "Frontend Developer",
    skills: "React & TypeScript",
  },
  {
    initials: "VT",
    name: "Vinod Thapa",
    role: "Full Stack Developer",
    skills: "Node.js & React",
  },
  {
    initials: "MJ",
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
  },
  {
    initials: "EW",
    name: "Emily Wilson",
    role: "Product Manager",
    skills: "Strategy & Analytics",
  },
  {
    initials: "DL",
    name: "David Lee",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
  },
  {
    initials: "AB",
    name: "Anna Brown",
    role: "QA Engineer",
    skills: "Testing & Automation",
  },
];

const TeamCard = ({ initials, name, role, skills }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
      {initials}
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
    <p className="text-sm text-gray-500">{skills}</p>
  </div>
);

export default function ImageComponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}