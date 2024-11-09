var userName = "cc";
var password = "123";
function checkLogin(userName, password){
    
}


const studySet = {
    name:'',
    flashCard: [
        correct = true, 
        content = [
            document.getElementById("newFlashItem").innerHTML, document.getElementById("newFlashContent").innerHTML
        ]
    ]
}



function loadStudySet(){
    const response = fetch('');
    const posts = response.json();

    const postContainer_Set = document.getElementById("sets_home");
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = ' <h3>${post.front_text}</h3> <h3>${post.back_text}</h3>';
           
            postContainer_Set.appendChild(postElement)
    })

}