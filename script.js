// script.js
const mainImg = document.getElementById('mainImg');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const thumbnailSrc = thumbnail.getAttribute('src');
        mainImg.setAttribute('src', thumbnailSrc);
    });
});



document.getElementById('downloadCSSLink').addEventListener('click', (event) => {
    // Zastavte standardní chování odkazu (navigaci na jinou stránku)
    event.preventDefault();

    // Získejte odkaz na CSS soubor
    const cssFileURL = './main.css'; // Změňte URL na správnou cestu k vašemu CSS souboru

    // Vytvořte odkaz na stažení
    const downloadLink = document.createElement('a');
    downloadLink.href = cssFileURL;
    downloadLink.download = 'styles.css'; // Název staženého souboru

    // Simulujte kliknutí na odkaz
    downloadLink.click();
});