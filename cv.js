function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}



/*function submit(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputText = document.getElementById('email');
    if(inputText.value.match(mailformat)){
        document.form1.text1.focus();
        return true;
        }
     else{
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
        }
    }


function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}*/