let image = document.getElementsByClassName("eltdf-normal-logo");
    
    
    console.log(image.length);


    image[0].src = 'data:image/png;base64,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';