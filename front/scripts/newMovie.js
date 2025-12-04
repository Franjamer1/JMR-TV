

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addMovieForm');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', handleFormSubmit);
    resetButton.addEventListener('click', handleFormReset);

    function handleFormReset() {
        form.reset();
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        const title = document.getElementById('title').value.trim();
        const year = document.getElementById('year').value.trim();
        const director = document.getElementById('director').value.trim();
        const duration = document.getElementById('duration').value.trim()
        const genre = document.getElementById('genre').value.trim();
        const rate = document.getElementById('rate').value.trim();
        const imageUrl = document.getElementById('imageUrl').value.trim();

        if (!title || !year || !director || !duration || !genre || !rate || !imageUrl) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        const movieData = {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster: imageUrl
        };

        try {
            const response = await fetch('http://localhost:3000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            });

            if (response.ok) {
                alert('Película agregada exitosamente');
                form.reset();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
});
