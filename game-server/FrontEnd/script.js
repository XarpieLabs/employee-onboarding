// Load games and populate the page
async function loadGames() {
  const gamesContainer = document.getElementById("games-container");

  try {
    // Fetch games from API
    const response = await fetch("/api/games");
    const data = await response.json();
    const games = data.games;

    if (games && games.length > 0) {
      // Create games grid
      let html = '<div class="games-grid">';

      games.forEach((game) => {
        const iconSrc = game.icon;

        html += `
          <a href="${game.url}?gameplayId=shs_sample_${game.name}" class="game-card">
              <img src="${iconSrc}" alt="${game.name}" class="game-icon" />
              <h3 class="game-name">${game.name}</h3>
          </a>
        `;
      });

      html += "</div>";
      gamesContainer.innerHTML = html;
    } else {
      gamesContainer.innerHTML = '<div class="no-games">No games found in the Games directory.</div>';
    }
  } catch (error) {
    console.error("Error loading games:", error);
    gamesContainer.innerHTML = '<div class="no-games">Error loading games. Please try again.</div>';
  }
}

// Load games when the page loads
document.addEventListener("DOMContentLoaded", loadGames);
