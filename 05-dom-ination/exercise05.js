/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {



    let header = document.querySelector(".panel h1")
    

    header.addEventListener("click", function (){ 
        
        console.log(header)

        if (header.style.color === "red"){
            header.style.color = "black"
        }
        else {header.style.color = "red"}
    
    
    
    })


    let listElements = document.querySelectorAll(".section")
    for(i = 0; i< listElements.length; i++){
        // console.log (listElements[i])
        if (i % 2 === 1){
            listElements[i].style.display = "none"
        }
    }
    
    document.body.innerHTML = document.body.innerHTML.replace(/bacon/gi, 'LAZER VISION');


    let postElementArray = document.querySelectorAll('.post')
    postElementArray[postElementArray.length-2].remove()
    postElementArray[postElementArray.length-1].remove()
    

    
    let imageArray = document.querySelector('.hide-for-small');
    console.log(imageArray)
    imageArray.remove()
    
//     //your code here


})();


