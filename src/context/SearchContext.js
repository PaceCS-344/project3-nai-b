import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Define all searchable content
  const allContent = [
    // Projects
    {
      id: "project-1",
      title: "Cosmic Coins",
      category: "Project",
      year: "2025",
      description: "A comically hard platformer game made in Unity",
      path: "/"
    },
    {
      id: "project-2",
      title: "YoursSafetyApp",
      category: "Project",
      year: "2025",
      description: "A safety app providing at event tracking, location sharing, and emergency contact alerts",
      path: "/"
    },
    {
      id: "project-3",
      title: "E-Commerce Website",
      category: "Project",
      year: "2026",
      description: "An E-Commerce site selling uncommon items made in collaboration with a friend, Alex Sullivan",
      path: "/"
    },
    // Skills
    {
      id: "skill-1",
      title: "React",
      category: "Skill",
      skillCategory: "Software/App Development",
      path: "/skills"
    },
    {
      id: "skill-2",
      title: "JavaScript",
      category: "Skill",
      skillCategory: "Programming Languages",
      path: "/skills"
    },
    {
      id: "skill-3",
      title: "Python",
      category: "Skill",
      skillCategory: "Programming Languages",
      path: "/skills"
    },
    {
      id: "skill-4",
      title: "Git",
      category: "Skill",
      skillCategory: "Tools",
      path: "/skills"
    },
    {
      id: "skill-5",
      title: "CSS",
      category: "Skill",
      skillCategory: "Software/App Development",
      path: "/skills"
    },
    {
      id: "skill-6",
      title: "React Native",
      category: "Skill",
      skillCategory: "Software/App Development",
      path: "/skills"
    },
    {
      id: "skill-7",
      title: "Node.js",
      category: "Skill",
      skillCategory: "Software/App Development",
      path: "/skills"
    },
    {
      id: "skill-8",
      title: "HTML",
      category: "Skill",
      skillCategory: "Software/App Development",
      path: "/skills"
    },
    {
      id: "skill-9",
      title: "Docker",
      category: "Skill",
      skillCategory: "Other",
      path: "/skills"
    },
    {
      id: "skill-10",
      title: "UI/UX",
      category: "Skill",
      skillCategory: "Other",
      path: "/skills"
    },
    // Work Experience
    {
      id: "exp-1",
      title: "Code Coach",
      category: "Experience",
      company: "The Coder School",
      period: "January 2026 - Present",
      description: "Developed games and programs to teach students how to recreate them through systematic thinking",
      path: "/experience"
    },
    {
      id: "exp-2",
      title: "App Developer",
      category: "Experience",
      company: "Yours Safety",
      period: "September 2025 - December 2025",
      description: "Collaborating with a 3-member team to plan and develop the YoursApp months ahead of schedule",
      path: "/experience"
    },
    {
      id: "exp-3",
      title: "Production Assistant",
      category: "Experience",
      company: "Craig Cutler Studio",
      period: "June 2024 - Present",
      description: "Analyzed video files for National Geographic Magazine",
      path: "/experience"
    }
  ];

  // Search function
  const performSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = allContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const descriptionMatch = item.description?.toLowerCase().includes(lowerQuery);
      const companyMatch = item.company?.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.skillCategory?.toLowerCase().includes(lowerQuery);

      return titleMatch || descriptionMatch || companyMatch || categoryMatch;
    });

    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        isSearchOpen,
        setIsSearchOpen,
        performSearch,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
};
