$('#year').text(new Date().getFullYear());
var mail
function getmail()
{
  mail  = document.getElementById("get_mail").value;
  document.getElementById('sub_btn').innerHTML="Submitted";
  console.log('mail submitted successfully.');
}
