const inputElement = document.querySelector('#visa');
const errorMessage= document.querySelector('#errorMessage');


function submitBtn() {
    
    const inputvalue = inputElement.value;

    if(inputvalue === "12345678") {
        window.location.href = `Pdf/Norul amen ok.pdf`;
        inputElement.value = ''; // clear the input field after successful validation
    } 

    else if(inputvalue === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter your e-Visa Id";
        inputElement.value = '';
    }
    
    else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Documents not found or invalid credentials.";
        inputElement.value = '';
    }
}