
/* YOUTUBE SIN CUENTA 2.3
   Motor: YouTube Data API v3
*/

const API_KEY = "PEGA_AQUI_TU_API_KEY";

const API_URL = "https://www.googleapis.com/youtube/v3";

const query = document.getElementById("query");
const button = document.getElementById("search");
const results = document.getElementById("results");
const message = document.getElementById("message");

const player = document.getElementById("player");
const playerContainer = document.getElementById("playerContainer");
const videoTitle = document.getElementById("videoTitle");

let busy = false;

async function searchVideos() {
  const term = query.value.trim();

  if (!term || busy) return;

  if (API_KEY === "AIzaSyAIm-3I1TPg8vfggVAoobZOJbIwR-tPhbM") {
    message.textContent = "Configura primero tu API Key.";
    return;
  }

  busy = true;
  button.disabled = true;

  results.replaceChildren();
  player.src = "";
  playerContainer.style.display = "none";

  message.textContent = "Buscando vídeos...";

  const params = new URLSearchParams({
    part: "snippet",
    q: term,
    type: "video",
    maxResults: "12",
    regionCode: "ES",
    relevanceLanguage: "es",
    safeSearch: "moderate",
    key: API_KEY
  });

  try {
    const response = await fetch(
      API_URL + "/search?" + params.toString()
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message || "Error " + response.status
      );
    }

    if (!data.items || data.items.length === 0) {
      message.textContent = "No se encontraron vídeos.";
      return;
    }

    message.textContent =
      data.items.length + " resultados encontrados.";

    data.items.forEach(item => {
      const video = item.id.videoId;
      const snippet = item.snippet;

      const card = document.createElement("div");
      card.className = "result";

      const image = document.createElement("img");
      image.src =
        snippet.thumbnails.medium?.url ||
        snippet.thumbnails.default.url;
      image.alt = "Miniatura del vídeo";
      image.loading = "lazy";

      const info = document.createElement("div");
      info.className = "info";

      const title = document.createElement("h3");
      title.textContent = snippet.title;

      const channel = document.createElement("p");
      channel.textContent = snippet.channelTitle;

      const date = document.createElement("p");
      date.textContent = new Date(
        snippet.publishedAt
      ).toLocaleDateString("es-ES");

      const play = document.createElement("button");
      play.textContent = "▶ REPRODUCIR";

      play.addEventListener("click", () => {
        openVideo(video, snippet.title);
      });

      info.append(title, channel, date, play);
      card.append(image, info);
      results.appendChild(card);
    });

  } catch (error) {
    message.textContent = "Error: " + error.message;
  } finally {
    busy = false;
    button.disabled = false;
  }
}

function openVideo(id, title) {
  if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) return;

  videoTitle.textContent = title;

  player.src =
    "https://www.youtube-nocookie.com/embed/" +
    encodeURIComponent(id);

  playerContainer.style.display = "block";

  playerContainer.scrollIntoView({
    behavior: "smooth"
  });
}

button.addEventListener("click", searchVideos);

query.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchVideos();
  }
});

