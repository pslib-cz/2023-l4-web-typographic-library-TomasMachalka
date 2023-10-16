[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zprwltzm)
# Typography CSS library
**Author:** Tomáš Machálka
## Demo site
Link to **[demo](https://pslib-cz.github.io/2023-l4-web-typographic-library-TomasMachalka/)** site for preview.
## Description
This CSS library is designed with a focus on creating web profiles for individuals, making it an ideal choice for building portfolios, personal profiles sites where visually appealing user profiles are important. This library offers an elegant and responsive design that allows for the presentation of content in a user-friendly and modern format. It includes styles for displaying user information, gallery, portfolios, and other profiles cards, making it easy to create attractive and interactive profiles. With this library, you can quickly and easily create web pages that stand out with their visual design and enable users to efficiently share their portfolios and content reviews.
## Library Content
1. [Implemantation](#Implementation)
2. [Fonts](#Fonts)
3. [Colors](#Colors)
4. [Header](#Header)
5. [Profile](#Profile)
6. [Buttons](#Buttons)
7. [Gallery](#Gallery)
8. [Other-profile-card](#Other-profile-card)

## Implementation
1) Open demo
2) Scroll down
3) Click on "Download Profile_library.CSS"
4) Link CSS file to your HTML files
5) If you want to use my Gallery format, download script.js and copy "Gallery part"
## Fonts
CSS library uses two fonts. [Kadwa](https://fonts.google.com/specimen/Kadwa) as primary and [Kalam](https://fonts.google.com/specimen/Kalam) as secundary font for descriptions of profiles and citations.
## Colors
The Library uses 4 colors.
Green colors sets the main visual of the site. Grey color is presented in borders and cards.
Black and white are used for text and complete background.
Check the colors in  `:root`
```html
:root{
    --black: #000000;
    --green: #507600;
    --white: #ffffff;
    --grey: #dadada;
}
```
## Profile
Profile is the main part of the page. It consists of two parts: Profile picture and description. Profile picture should be in square ratio but it can be different. 
```html
<div class="profile">
                <img class="profile_image" src="Your profile picture" alt="profile image">
                <div class="profile_caption">
                    <h2>Profile name</h2>
                    <ul>
                        <li>Property</li>
                        <li>Property</li>
                        <li>Property</li>
                        <li>Property</li>
                    </ul>
                </div>
</div>
```
There are also 2 types of text. Text using Kadwa font is implemented for normal text on your website. The other option (Kalam) should be used for citations.
For this case there are two classes: `.citate` and for a name beyond `.citate_name`.
## Buttons
In demo site are 3 buttons: Button 1, Button 2 and Button 3. Button 3 is more visible in the navigation.
To create a button add class: `.button1`, `.button2` or `.page` on tag `<a>`.
## Gallery
For gallery implementation add Gallery part from my javascript file and use this HTML template:
```html
            <h1>Gallery</h1>
                <div class="gallery">
                    <div class="gallery_main-image">
                        <img id="mainImg" src="Your image 1" alt="Hlavní obrázek">
                    </div>
                    <div class="gallery_thumbnails">
                        <img class="gallery_thumbnails_image" src="Your img 1" alt="Thumbnail 1">
                        <img class="gallery_thumbnails_image" src="Your img 2" alt="Thumbnail 2">
                        <img class="gallery_thumbnails_image" src="Your img 3" alt="Thumbnail 3">
                        <img class="gallery_thumbnails_image" src="Your img 4" alt="Thumbnail 4">
                        <img class="gallery_thumbnails_image" src="Your img 5" alt="Thumbnail 5">
                        <img class="gallery_thumbnails_image" src="Your img 6" alt="Thumbnail 6">
                    </div>
                </div>
                <script src="script.js"></script>
```
## Other profile card
As was mentioned in the description, this CSS library is created for Profile presentation. Other profile card can help to present other interesting profile or site.
Here is the way how to create one:
```html
<a class="other_item" href="#">
                <article>
                    <div><img src="Profile picture" alt="#"></div>
                    <h3>Other profile name</h3>
                    <p class="other_item_description">
                        Short description of this profile. Profile should be somehow related to the main profile.
                    </p>
                </article>
</a>
```

