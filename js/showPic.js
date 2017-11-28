/**
 * Created by jarvis-dong on 15/8/24.
 */
function showPic(whichpic){

    var source = whichpic.getAttribute("href");
    var  placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text ;

}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0]

}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

window.onload = function () {

    var body_element = document.getElementsByTagName("body");
    //<img src="images/images.png" alt="my image gallary" id="placeholder"/>
    //<p id="description">Choose an image</p>

    var imgholder = document.createElement("img");
    var pholder = document.createElement("p");
    imgholder.setAttribute("id","placeholder");
    imgholder.setAttribute("src","images/images.png");
    imgholder.setAttribute("alt","my image gallary");

    pholder.setAttribute("id","discription");
    var desctext = document.createTextNode("change an image");

    pholder.appendChild(desctext);
    body_element[0].appendChild(imgholder);
    body_element[0].appendChild(pholder);


};
