
function createCard(movie) {
  const card = $("<div>")
    .attr("id", "card")
    .addClass("m-3 position-relative")
    .css({ "width": "310px", "height": "530px" });

  const cardContent = `
  <img id="poster" src="${movie.poster}" alt="${movie.title} poster" style="width: 100%; height: 450px;">
  <h3 id="title" class="fs-6 text-wrap m-3" style="word-break: break-all; height: 50px">${movie.title}</h3>
    <div id="info" class="position-absolute top-0 start-0  text-white p-3" style="width: 100%; height: 100%; display: none; z-index: 1;">
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      <p>Duration: ${movie.duration}</p>
      <p>Genre: ${movie.genre.join(', ')}</p>
      <p>Rate: ⭐${movie.rate}</p>
    </div>
  `;

  card.html(cardContent);

  card.on("mouseenter", function () {
    $(this).find("#info").fadeIn();
    $(this).find("#poster").css("filter", "blur(1px)");
  });

  card.on("mouseleave", function () {
    $(this).find("#info").fadeOut();
    $(this).find("#poster").css("filter", "none");
  });

  $("#cardContainer").append(card);
}

module.exports = createCard;