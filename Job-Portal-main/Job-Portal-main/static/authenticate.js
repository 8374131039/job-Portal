var reg=document.getElementsByClassName('register')[0];
var log=document.getElementsByClassName('login')[0];

function register(){
    if(reg.style.zIndex != '10'){

        reg.style.transform='rotate(0deg) scale(0.8)';
        log.style.transform='rotate(270deg) scale(0.8)';
        reg.style.zIndex='10';
        log.style.zIndex='0';
        reg.style.transform='scale(1)';
        reg.style.opacity='1';
        reg.style.filter='blur(0)';
        log.style.left='calc(50% - 65px)';
        reg.style.left='0px';
        reg.style.top='3px';
        log.style.opacity='0.9';
        log.style.filter='blur(0.1px)';
    }
    else{
          var user_regex=/^[a-zA-Z0-9_\-.+]{1,25}@[a-z]{5}.[a-z]{1,3}$/
          var psw_regex=/^[a-zA-Z0-9]{8,16}$/
          var username=document.getElementById('RegUserName').value;
          var password1=document.getElementById('RegPassword').value;
          var password2=document.getElementById('ConfirmPassword').value;

          if(!username || !password1 || !password2)
          {
            alert("none of the username or password or confirm_password should be blank");
          }

          else if(username.match(user_regex))
          {
            if(password1.match(psw_regex))
            {
              if(password1==password2)
              {
                 document.getElementById('form1').submit();
              }
               else
               {
                 alert("password and confirm password should be same");
               }
             }
            else
            {
              alert("password length should be atleast 8 with numbers or letters or both");
            }
          }
          else
          {
           alert("username must be an email with max length of 35");
          }
    }
}
function login(){
    if(log.style.zIndex != '10'){

        log.style.transform='rotate(0deg) scale(0.8)';
        reg.style.transform='rotate(270deg) scale(0.8)';
        log.style.zIndex='10';
        reg.style.zIndex='0';
        log.style.transform='scale(1)';
        log.style.opacity='1';
        log.style.filter='blur(0)';
        reg.style.left='75px';
        log.style.left='calc(50% - 140px)';
        reg.style.opacity='0.9';
        reg.style.filter='blur(0.1px)';
    }

    else{
        var user_regex=/^[a-zA-Z0-9_\-.+]{1,25}@[a-z]{5}.[a-z]{1,3}$/
        var psw_regex=/^[a-zA-Z0-9]{8,16}$/
        var username=document.getElementById('LogUserName').value;
        var password=document.getElementById('LogPassword').value;

        if(!username || !password)
        {
          alert("none of the username or password should be blank");
        }

        else if(username.match(user_regex))
        {
          if(password.match(psw_regex))
          {
            document.getElementById('form2').submit();
          }
          else
          {
            alert("password length should be atleast 8 with numbers or letters or both");
          }
        }
        else
        {
         alert("username must be an email with max length of 35");
        }
    }
}