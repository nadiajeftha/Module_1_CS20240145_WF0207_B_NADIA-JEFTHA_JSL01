function validateSyntax() {
    let input = document.getElementById('petInput').value;
    const pattern = /^pet_[a-zA-Z0-9]+$/;
    let resultElement = document.getElementById('result'); 

        if (pattern.test(input)) {
            resultElement.innerText = '✅ Valid Syntax' ;
        } else {
            resultElement.innerText = '❌ Invalid Syntax' ;
        }
}



