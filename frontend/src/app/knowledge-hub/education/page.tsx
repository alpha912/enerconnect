'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const courses = [
  {
    title: "Renewable Energy Integration",
    level: "Advanced",
    duration: "6 weeks",
    enrolled: 245,
    rating: 4.8,
    topics: ["Grid Integration", "Storage Systems", "Power Management"]
  },
  {
    title: "Energy Storage Technologies",
    level: "Intermediate",
    duration: "4 weeks",
    enrolled: 180,
    rating: 4.7,
    topics: ["Battery Systems", "Thermal Storage", "Grid Applications"]
  },
  {
    title: "Smart Grid Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    enrolled: 320,
    rating: 4.9,
    topics: ["Grid Architecture", "Control Systems", "Data Analytics"]
  }
];

const upcomingWorkshops = [
  {
    title: "Grid Stability Analysis Workshop",
    date: "2024-02-15",
    time: "14:00-17:00 CET",
    format: "Virtual",
    spots: 50,
    registered: 35
  },
  {
    title: "Energy Storage Design Lab",
    date: "2024-02-20",
    time: "10:00-16:00 CET",
    format: "In-Person",
    spots: 30,
    registered: 25
  },
  {
    title: "Renewable Integration Masterclass",
    date: "2024-02-28",
    time: "09:00-12:00 CET",
    format: "Hybrid",
    spots: 100,
    registered: 65
  }
];

const learningPaths = [
  {
    title: "Grid Integration Specialist",
    level: "Advanced",
    duration: "6 months",
    modules: 8,
    skills: ["Power Systems", "Grid Control", "Integration Planning"]
  },
  {
    title: "Energy Storage Expert",
    level: "Intermediate",
    duration: "4 months",
    modules: 6,
    skills: ["Storage Technologies", "System Design", "Performance Analysis"]
  },
  {
    title: "Smart Grid Analyst",
    level: "Beginner to Intermediate",
    duration: "5 months",
    modules: 7,
    skills: ["Grid Operations", "Data Analysis", "System Monitoring"]
  }
];

export default function EducationHub() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Education Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Enhance your expertise with comprehensive training materials and workshops
        </p>
      </div>

      {/* Featured Courses */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Featured Courses
          </h2>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-primary-500 mb-2">{course.level}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                  {course.rating} ({course.enrolled} enrolled)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {course.duration}
                </span>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Upcoming Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingWorkshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {workshop.title}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Date:</span>
                  <span className="text-gray-900 dark:text-white">{workshop.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Time:</span>
                  <span className="text-gray-900 dark:text-white">{workshop.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Format:</span>
                  <span className="text-gray-900 dark:text-white">{workshop.format}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {workshop.registered}/{workshop.spots} Registered
                </span>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Learning Paths
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="text-sm text-primary-500 mb-2">{path.level}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {path.title}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                  <span className="text-gray-900 dark:text-white">{path.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Modules:</span>
                  <span className="text-gray-900 dark:text-white">{path.modules}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {path.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                View Path
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
