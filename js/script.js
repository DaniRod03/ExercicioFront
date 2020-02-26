let inputCRM = document.getElementById("crm");
let inputCPF = document.getElementById("cpf");

inputCRM.addEventListener('keyup', (event) => {
    if (isNaN(inputCRM.value)) {
        inputCRM.value = inputCRM.value.substring(0, (inputCRM.value.length - 1));
    }
    if (inputCRM.value.length >= 6) {
        inputCRM.value = inputCRM.value.substring(0, 6)
    }
})
inputCPF.addEventListener('keyup', (event) => {
    if(isNaN(inputCPF.value)){
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1));
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0, 11)
    }
}) 
