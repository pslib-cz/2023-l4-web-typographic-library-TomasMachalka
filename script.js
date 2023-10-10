
const mainImg = document.getElementById('mainImg');
const thumbnails = document.querySelectorAll('.gallery_thumbnails_image');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const thumbnailSrc = thumbnail.getAttribute('src');
        mainImg.setAttribute('src', thumbnailSrc);
    });
});


document.getElementById('downloadProfileCSSLink').addEventListener('click', (event) => {
    // Zastavte standardní chování odkazu (navigaci na jinou stránku)
    event.preventDefault();
    
    // Simulujte kliknutí na odkaz pro stažení
    const downloadLink = document.createElement('a');
    downloadLink.href = './profile_library.css'; // URL k souboru profile_library.css
    downloadLink.download = 'profile_library.css'; // Název staženého souboru
    downloadLink.style.display = 'none'; // Skryjte odkaz
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
});
