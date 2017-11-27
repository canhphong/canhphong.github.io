var inputs = document.forms['register'].getElementsByTagName('input');
  var run_onchange = false;
  function valid(){
   var errors = false;
   var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
   for(var i=0; i<inputs.length; i++){
    var value = inputs[i].value;
    var id = inputs[i].getAttribute('id');
   
    // create span element save error information
    var span = document.createElement('span');
    // if span already exists then remove
    var p = inputs[i].parentNode;
    if(p.lastChild.nodeName == 'SPAN') 
      {
        p.removeChild(p.lastChild);
      }
   
    // check empty
    if(value == '')
    {
     span.innerHTML ='Information is required';
    }
    else
    {
    // check other cases

     if(id == 'email')
     {
      if(reg_mail.test(value) == false){ span.innerHTML ='Email không hợp lệ (ví dụ: abc@gmail.com)';}
      var email =value;
     }
     // Check user
     if(id == 'username')
     {
      if (value.length < 8) 
      {
        span.innerHTML = 'Username must be 8 characters';
      }
     }
     // Check password
     if(id == 'password')
     {
      if(value.length < 8)
        {
          span.innerHTML ='Password must be 8 characters';
        }
      var pass =value;
     }
    }
   
    // Nếu có lỗi thì chèn span vào hồ sơ, chạy onchange, submit return false, highlight border
    if(span.innerHTML != '')
    {
     inputs[i].parentNode.appendChild(span);
     errors = true;
     run_onchange = true;
     inputs[i].style.border = '1px solid #c6807b';
     inputs[i].style.background = '#fffcf9';
    }
   }// end for
  
   if(errors == false){alert('Đăng ký thành công');}
   return !errors;
  }// end valid()
 
  // Chạy hàm kiểm tra valid()
  var register = document.getElementById('submit');
  register.onclick = function()
  {
   return valid();
  }
 
  //  Error checking with onchange event -> callback function valid()
   for(var i=0; i<inputs.length; i++)
   {
    var id = inputs[i].getAttribute('id');
    inputs[i].onchange = function(){
     if(run_onchange == true){
      this.style.border = '1px solid #999';
      this.style.background = '#fff';
      valid();
     }
    }
   }// end for