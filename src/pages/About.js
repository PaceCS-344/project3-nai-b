import React, { useEffect, useState } from "react";
import "./pages.css";

const GITHUB_USERNAME = "nai-b";

export default function About() {
    const [githubData, setGithubData] = useState(null);
    const [githubOrgs, setGithubOrgs] = useState([]);
    const [githubStars, setGithubStars] = useState(0);
    const [loadingGithub, setLoadingGithub] = useState(true);
    const [githubError, setGithubError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchGithubInfo() {
            setLoadingGithub(true);
            setGithubError(null);

            try {
                const [userResponse, orgsResponse, reposResponse] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
                        signal: controller.signal,
                        headers: { Accept: "application/vnd.github.v3+json" },
                    }),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/orgs`, {
                        signal: controller.signal,
                        headers: { Accept: "application/vnd.github.v3+json" },
                    }),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
                        signal: controller.signal,
                        headers: { Accept: "application/vnd.github.v3+json" },
                    }),
                ]);

                if (!userResponse.ok || !orgsResponse.ok || !reposResponse.ok) {
                    throw new Error(`GitHub API error: ${userResponse.status || orgsResponse.status || reposResponse.status}`);
                }

                const userData = await userResponse.json();
                const orgsData = await orgsResponse.json();
                const reposData = await reposResponse.json();
                const totalStars = reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

                setGithubData(userData);
                setGithubOrgs(orgsData);
                setGithubStars(totalStars);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setGithubError(error.message);
                }
            } finally {
                setLoadingGithub(false);
            }
        }

        fetchGithubInfo();

        return () => controller.abort();
    }, []);

    return (
        <div className="page-container">
            <h1>About Me</h1>
            <div className="page-content">
                <section className="about-section">
                    <h2>My Story</h2>
                    <p>
                        Welcome to my portfolio! 
                        
                        My name is Nailah (nai-EE-lah), I'm a passionate developer with a love for creating 
                        innovative solutions and engaging digital experiences. My journey in tech has been 
                        driven by curiosity and a desire to continuously learn and grow, while seeing the joy my work brings to my clients.
                    </p>
                </section>

                <section className="about-github-summary">
                    <h2>GitHub Profile</h2>
                    {loadingGithub ? (
                        <p>Loading GitHub profile information...</p>
                    ) : githubError ? (
                        <p className="repo-error">{githubError}</p>
                    ) : githubData ? (
                        <div className="github-summary-card">
                            <img
                                className="github-avatar"
                                src={githubData.avatar_url}
                                alt={`${githubData.login} avatar`}
                            />
                            <div className="github-summary-details">
                                <div className="github-summary-header">
                                    <div>
                                        <h3>{githubData.name || githubData.login}</h3>
                                        <p className="github-bio">{githubData.bio || "GitHub profile summary."}</p>
                                    </div>
                                    <a
                                        href={githubData.html_url}
                                        className="github-profile-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View GitHub
                                    </a>
                                </div>

                                <div className="github-stats-grid">
                                    <div className="github-stat-item">
                                        <span>{githubData.followers}</span>
                                        <small>Followers</small>
                                    </div>
                                    <div className="github-stat-item">
                                        <span>{githubData.public_gists}</span>
                                        <small>Gists</small>
                                    </div>
                                    <div className="github-stat-item">
                                        <span>{githubStars}</span>
                                        <small>Stars</small>
                                    </div>
                                    <div className="github-stat-item">
                                        <span>{githubOrgs.length}</span>
                                        <small>Organizations</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>No GitHub information available.</p>
                    )}
                </section>

                <section className="about-section">
                    <h2>My Background</h2>
                    <p>
                        With experience in full-stack development, I've worked on a variety of projects 
                        ranging from web applications to interactive games. I'm committed to writing clean, 
                        efficient code and collaborating effectively with teams to bring ideas to life.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Beyond Code</h2>
                    <p>
                        When I'm not coding, you can find me spending time with friends and family, playing video games like
                        Satisfactory and Project Zomboid, or listening to music.
                    </p>
                </section>
            </div>
        </div>
    );
}
