function check(form11) {
  form11.preventDefault();/*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form11.target.username.value == "myuserid" && form11.target.pwd.value == "mypswrd") {
                    /*window.open('target.html')/*opens the target page while Id & password matches*/
					location.href = "files/main.html"
					
					alert("Access Granted")
                }
                else {
                    alert("Error Password or Username")}}


const form11 = document.getElementById("form1")
/*check(form)*/

form11.addEventListener('submit', check);