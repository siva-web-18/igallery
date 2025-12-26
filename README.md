# Ex.07 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```

<html >
<head>
  
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="gal.css">
</head>
<body>

<header>
    Interactive Image Gallery
</header>

<div class="gallery-container">
    <div class="card">
        <img id="galleryImage" src="gal4.png" alt="Gallery Image">
        <div class="caption" id="caption">Space Exploration</div>

        <div class="buttons">
            <button onclick="previousImage()">Previous</button>
            <button onclick="nextImage()">Next</button>
        </div>
    </div>
</div>

<footer>
    © created by SIVA R(25007668)
</footer>

<script src="scripts.js"></script>
</body>
</html>
```
```
java script
const images = [
    {
        src: "gal1.png",
        caption: "rocket view"
    },
    {
        src: "gal2.png",
        caption: "space view"
    },
    {
        src: "gal3.png",
        caption: "rocket launch"
    }
];

let index = 0;

function showImage() {
    document.getElementById("galleryImage").src = images[index].src;
    document.getElementById("caption").innerText = images[index].caption;
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function previousImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
```
```
external css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background: grey;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
}

.gallery-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    background: white;
    padding: 20px;
    width: 420px;
    border-radius: 12px;
    box-shadow: 0 10px 25px black;
    text-align: center;
}

.card img {
    width: 100%;
    border-radius: 10px;
}

.caption {
    margin: 12px 0;
    font-size: 18px;
    font-weight: bold;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: grey;
    color: white;
}

button:hover {
    background: grey;
}

footer {
    background: black;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 14px;
}
```

## OUTPUT:
![alt text](<Screenshot 2025-12-26 105831.png>)
![alt text](<Screenshot 2025-12-26 105849.png>)
 ![alt text](<Screenshot 2025-12-26 105857.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
