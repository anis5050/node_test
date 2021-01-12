function validateEmail(v)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
    {
        return(true)
    }
    console.log('you have entered an invalid email address!')
    return(false)
}
console.log(validateEmail("aaa@gmail.com"))
console.log(validateEmail("@gmail.com"))

function phonenumber(number){
    var phone=/^\d{10}$/;
    if (phone.test(number)){
        return(true)

    }
    else{
        console.log('invalid number');
        return (false)
    }
}
// console.log(phonenumber('5555524555'))
// console.log(phonenumber('555552455555'))

function phonenumber(number)
{
  var phone = /^\(?([0-9]{3})\)?[-.  ]?([0-9]{3})[-.  ]?([0-9]{4})$/;
  if(phone.test(number))
      {
          return true
      }
      else
      {
          return false
      }
}
console.log(phonenumber('555 552 4555'))
console.log(phonenumber('5555524555'))

function password(number){
    var password=/^[A-Za-z]\w{7,14}$/;
    if(password.test(number))
      {
          return true
      }
      else
      {
          return false
      }
}
    
console.log(password("AZERazer"));