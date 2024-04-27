var pranksElement = document.getElementById('pranksKnop');
pranksElement.textContent = 'test';


var booElement = document.getElementById("boo").addEventListener("click", booAanpassing);

function booAanpassing(){
  booElement.textContent = '!!!BOO!!!';
}

document.getElementById('loginButton').addEventListener('click', function() {
  document.getElementById('name').innerHTML = 'Welcome, you are logged in&#128515;'   
});
  