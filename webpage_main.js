var cvb;
var inb;
var momentlikes=20;
var momentlikes1=21;
var liked=false;
var j=6;

function func1(){
    cvb=document.getElementById("cv");
    window.scrollTo(0,700);
}

function func2(){
    inb=document.getElementById("in");
    window.scrollTo(0, 1450);
}

function like(id){
    liked=true;
    var p="s"+id;
    document.getElementById(p).innerHTML=momentlikes+1;
}

function dislike(id){
    liked=false;
    var p="s"+id;
    document.getElementById(p).innerHTML=momentlikes1-1; 
}

function toggleLikes(id) {
    liked ? dislike(id) : like(id);
}


function addComment(id){
    var tmp = id;
    var n = tmp.slice(6, 7);
    addCommentImage(n);
}

function addCommentImage(n){
    var m1="com"+n;
    var commentText=document.getElementById(m1).value;
    document.getElementById(m1).value=" ";

    const element=document.createElement("div");
    element.innerHTML=commentText;

    var w="container"+n;
    var place=document.getElementById(w);
    place.appendChild(element);
    element.setAttribute("class","comments");
    
}

function submitImpressions()
{
    displayInfoImpressions();
    setTimeout(reloading,3000);
}

function displayInfoImpressions(){
    var info=document.createElement("div");    
    info.innerHTML="<strong>Success!</strong> Your impressions have been submited.";
  
    var parent=document.getElementById("formImpressions");
    parent.appendChild(info);
    info.setAttribute("class","alert alert-success");
    info.setAttribute("style","margin-left: 13%; margin-top: 1%; width: 74%");
}

function reloading(){
    window.location.reload();
}

function submitContact(){
    displayInfoContact();
    setTimeout(reloading,3000);
}

function displayInfoContact(){
    var message=document.createElement("div");
    message.innerHTML="<strong>Success!</strong> Your contact information has been submited.";

    var parent=document.getElementById("formContact");
    parent.appendChild(message);
    message.setAttribute("class","alert alert-success");
    message.setAttribute("style", "margin-top: 1%; width: 40%");
}


function addBlogPost(){
    var headingText;
    var descriptionText;
    var text;
    var urlImage;

    headingText=document.getElementById("blogHeading").value;
    document.getElementById("blogHeading").value=" ";

    descriptionText=document.getElementById("blogDescription").value;
    document.getElementById("blogHeading").value=" ";

    text=document.getElementById("blogText").value;
    document.getElementById("blogText").value=" ";

    urlImage=document.getElementById("blogImage").value;
    document.getElementById("blogImage").value=" ";

    var head=document.createElement("h4");
    head.innerHTML=headingText;
    head.setAttribute("class","titleHeading");
    var descr=document.createElement("h6");
    descr.innerHTML=descriptionText;
    var blogPost=document.createElement("p");
    blogPost.innerHTML=text;
    var img = document.createElement("img");
    img.src=urlImage;
    img.setAttribute("class","blogImages");
    img.setAttribute("width","100%");
    img.setAttribute("height","150pt");

    var place=document.createElement("div");
    place.setAttribute("class","container");
    place.setAttribute("style","border-radius: 10px; background-color: #cfcfcf; padding: 20px; width: 65%;");
    place.appendChild(head);
    place.appendChild(descr);
    place.appendChild(img);
    place.appendChild(blogPost);

    var breaK=document.createElement("br");

    var originalplace=document.getElementById("addBlog");
    originalplace.appendChild(place);
    originalplace.appendChild(breaK);

    //https://picsum.photos/600/400
}

function addImage(){
    var picDesc;
    var picURL;
    j++;

    picURL=document.getElementById("pictureURL").value;
    document.getElementById("pictureURL").value=" ";
    picDesc=document.getElementById("pictureDesc").value;
    document.getElementById("pictureDesc").value=" ";

    var img=document.createElement("img");
    img.src=picURL;
    img.setAttribute("width","600");
    img.setAttribute("height","400");

    var des=document.createElement("div");
    des.innerHTML=picDesc;
    des.setAttribute("style","text-align: center");

    var likeButton=document.createElement("button");
    likeButton.setAttribute("type","button");
    likeButton.setAttribute("style","margin-bottom: 5px; margin-top: 5px;");
    likeButton.setAttribute("onclick","toggleLikes(this.id)");
    likeButton.setAttribute("id",j);
    likeButton.setAttribute("class","btn btn-primary");
    likeButton.innerHTML="Like &nbsp;";

    var spanBadge=document.createElement("span");
    var y="s"+j;
    spanBadge.setAttribute("id",y);
    spanBadge.setAttribute("class","badge badge-light");
    spanBadge.innerHTML=20;

    likeButton.appendChild(spanBadge);
    
    var divComments=document.createElement("div");
    var t="containers"+j;
    divComments.setAttribute("id",t);
    
    var textArea=document.createElement("textarea");
    var o="com"+j;
    textArea.setAttribute("id",o);

    divComments.appendChild(textArea);

    var commentButton=document.createElement("button");
    var r="addcom"+j;
    commentButton.setAttribute("type","button");
    commentButton.setAttribute("style","margin-bottom: 5px; margin-top: 5px;");
    commentButton.setAttribute("id",r);
    
    commentButton.setAttribute("class","btn btn-warning");
    commentButton.innerHTML="Add Comment";

    divComments.appendChild(commentButton);
    var breaK=document.createElement("br");
    des.appendChild(breaK);
    des.appendChild(likeButton);
    des.appendChild(divComments);

    var place=document.createElement("div");
    place.setAttribute("class","gallery grid-item");
    place.appendChild(img);
    place.appendChild(des);
    
    var breaK=document.createElement("br");

    var originalplace=document.getElementById("grid-container");
    originalplace.appendChild(place);
    originalplace.appendChild(breaK);

    commentButton.setAttribute("onclick","addComment(this.id)");

    //https://picsum.photos/600/400
}