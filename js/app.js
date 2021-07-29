const bellAlert = document.getElementById("bell-dot");
const bellMessage = document.getElementById("bellMessage");
const dotMessage = document.getElementById("bell-dot");
const alertBanner = document.getElementById("alert");

// create the html for the Banner
alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
    </div>
`
alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if (element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none"
    }
});

// Notification icon
bellAlert.addEventListener('click', e => {
  if(e.target === bellMessage || e.target === dotMessage){
    window.alert('Call your mom back.');
    window.alert('Do a peer review today.');
    dotMessage.style.display = 'none';
  }
  // Pop-ups are ugly, will come back later and make it a more appropriate notification style
});
