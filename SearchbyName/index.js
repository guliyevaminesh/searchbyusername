const form = document.getElementById('myform')
const input = document.getElementById('username')
const myDiv = document.getElementById('myDiv')
const API = ('https://api.github.com/users/')


form.addEventListener('submit',(e)=>{
    e.preventDefault(),
    searchUser()
})
searchUser = () =>{
    fetch(API+input.value)
    .then(res => res.json())
    .then(data =>{
        renderUser(data);
    });
};

renderUser = (data) => {
    myDiv.innerHTML = ""
    const userImg = document.createElement('img');
    userImg.src = data.avatar_url;
    const h2 = document.createElement('h2');
    h2.textContent=data.login;
    const p = document.createElement('p');
    p.textContent=`followers: ${data.followers}`;

    myDiv.append(h2, userImg, p)
}