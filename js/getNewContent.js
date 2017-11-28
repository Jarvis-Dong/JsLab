/**
 * Created by jarvis-dong on 15/8/31.
 */
function getNewContent(){
    var request = getHTTPObject();
    if (request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState ==4){

            }
        }
    }
}