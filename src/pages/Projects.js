import React, { useEffect, useState } from "react";
import Project from "../components/project";
import cosmicCoinsImage from "../images/cosmiccoins.png";
import yoursSafetyImage from "../images/yourssafety.png";
import nbBaddies from "../images/nbBaddies.png";
import "./pages.css";
import "../lightswind.css";
import { InteractiveCard } from "../components/lightswind/interactive-card.tsx";

const GITHUB_USERNAME = "nai-b";
const GITHUB_REPO_COUNT = 6;

export default function Projects() {
    const [githubRepos, setGithubRepos] = useState([]);
    const [loadingRepos, setLoadingRepos] = useState(true);
    const [repoError, setRepoError] = useState(null);
    const [repoSearch, setRepoSearch] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRepos() {
            setLoadingRepos(true);
            setRepoError(null);

            try {
                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${GITHUB_REPO_COUNT}`,
                    {
                        signal: controller.signal,
                        headers: {
                            Accept: "application/vnd.github.v3+json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setGithubRepos(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setRepoError(error.message);
                }
            } finally {
                setLoadingRepos(false);
            }
        }

        fetchRepos();

        return () => controller.abort();
    }, []);

    const filteredRepos = githubRepos.filter((repo) => {
        const query = repoSearch.trim().toLowerCase();
        if (!query) return true;
        const nameMatch = repo.name.toLowerCase().includes(query);
        const languageMatch = (repo.language || "").toLowerCase().includes(query);
        const descriptionMatch = (repo.description || "").toLowerCase().includes(query);
        return nameMatch || languageMatch || descriptionMatch;
    });

    return (
        <div className="page-container">
            <h1>My Projects</h1>
            <div className="projects-container">
                <InteractiveCard
                    className="InteractiveGalleryCard project-card"
                    InteractiveColor="#abcdff"
                >
                    <Project
                        name="Cosmic Coins"
                        year="2025"
                        image={cosmicCoinsImage}
                        link={"https://nini2255.itch.io/cosmic-coins"}
                        description={"A comically hard platformer game made in Unity"}
                    />
                </InteractiveCard>
                <InteractiveCard
                    InteractiveColor="#abcdff"
                    className="project-card"
                >
                    <Project
                        name="YoursSafetyApp"
                        year="2025"
                        image={yoursSafetyImage}
                        link={""}
                        description={"A safety app providing at event tracking, location sharing, and emergency contact alerts"}
                    />
                </InteractiveCard>
                <InteractiveCard
                    className="InteractiveGalleryCard project-card"
                    InteractiveColor="#abcdff"
                >
                    <Project
                        name="E-Commerce Website"
                        year="2026"
                        image={nbBaddies}
                        link={"https://github.com/PaceCS-344/project1-nbbaddies"}
                        description={"An E-Commerce site selling uncommon items made in collaboration with a friend, Alex Sullivan"}
                    />
                </InteractiveCard>
            </div>

            <section className="github-projects-section">
                <h2>Latest GitHub Repos</h2>

                {loadingRepos ? (
                    <p>Loading GitHub repos...</p>
                ) : repoError ? (
                    <p className="repo-error">{repoError}</p>
                ) : (
                    <>
                        <div className="repo-search-wrapper">
                            <input
                                type="search"
                                className="repo-search-input"
                                placeholder="Search repos by name, language, or description"
                                value={repoSearch}
                                onChange={(e) => setRepoSearch(e.target.value)}
                            />
                        </div>
                        <div className="repo-grid">
                            {filteredRepos.length > 0 ? (
                                filteredRepos.map((repo) => (
                                    <div className="repo-card" key={repo.id}>
                                        <div className="repo-card-header">
                                            <h3>{repo.name}</h3>
                                            <span className="repo-language">{repo.language || "Unknown"}</span>
                                        </div>
                                        <p>{repo.description || "No description available."}</p>
                                        <div className="repo-card-footer">
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="repo-link"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="repo-no-results">
                                    No repositories match that name or language.
                                </div>
                            )}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}
