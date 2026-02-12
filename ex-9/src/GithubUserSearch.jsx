import { useEffect, useState } from "react";

export default function GithubUserSearch() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        setUser(null);

        const response = await fetch(
          `https://api.github.com/users/${searchTerm}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    return () => controller.abort();

  }, [searchTerm]);

  function handleSearch() {
    if (input.trim() !== "") {
      setSearchTerm(input.trim());
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>GitHub User Search</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleSearch} disabled={loading}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />

          <h3>{user.name || "No name provided"}</h3>
          <p>@{user.login}</p>
          <p>{user.bio || "No bio available"}</p>

          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Following:</strong> {user.following}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
