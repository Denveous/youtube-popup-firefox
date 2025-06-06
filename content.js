function handleVideoClick(event) {
    const link = event.target.closest('a');
    if (!link) return;

    if (link.href && link.href.includes('youtube.com/watch?v=')) {
        event.preventDefault();
        event.stopPropagation();

        const videoId = link.href.split('v=')[1].split('&')[0];
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

        window.open(embedUrl, 'YouTube Embed', 'width=1280,height=720');

        if (window.location.href !== 'https://www.youtube.com/') {
            window.history.pushState({}, '', 'https://www.youtube.com/');
        }
    }
}

document.addEventListener('click', handleVideoClick, true);

document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link && link.href && link.href.includes('youtube.com/watch?v=')) {
        event.preventDefault();
        event.stopPropagation();
    }
}, true);