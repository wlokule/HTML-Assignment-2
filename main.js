
 let formInput = document.getElementById("number");
 formInput.addEventListener("keypress", function() {
     if (isNaN(this.value + String.fromCharCode(event.keyCode))) {
         alert("That was not a number!");
         return false;
     }
 });

function check() {
    alert("Your Form Has Errors");

}

function validateForm() {
    let x = document.forms["myform"]["doctorname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  <script src="https://cdn.db-ip.com/js/dbip.js"
	data-api-key="p6bcac47ae71f0285cb6343d9697e56e41a2cb92"
	data-auto-select-country>
</script>