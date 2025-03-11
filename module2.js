// Function to update the preview image and text
function upDate(previewPic) {
    console.log("Event triggered"); // Debugging check
    console.log("Image src:", previewPic.src);
    console.log("Image alt:", previewPic.alt);
    
    // Select the div with id 'image' and update its background and text
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

// Function to reset the preview image and text
function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = ""; // Reset background image
    imageDiv.innerHTML = "Hover over an image below to display here."; // Reset text
}
