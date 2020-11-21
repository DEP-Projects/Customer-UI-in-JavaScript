/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/
var form = document.getElementById('form');
var id = document.getElementById('txt-id');
var cusName = document.getElementById('txt-name');
var address = document.getElementById('txt-address');
var table = document.querySelector("#tbl-customers").children.item(1);


/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/
document.querySelector("#btn-save").addEventListener('click',function (event){
    event.preventDefault();
    inputsValidation();
});

/*===============================================================================
 * Functions
 *===============================================================================*/
// Todo: add all functions
/*fields validation*/
function inputsValidation(){
     var txtId = id.value;
     var txtName = cusName.value;
     var txtAddress = address.value;
    var regExpId = /^C\d{3}$/;
    var regExpName = /^[A-Za-z][A-Za-z .]{3,}$/;

    var customerId=false;
    var customerName=false;
    var customerAddress=false;
    var inputsValidate=false;


    if (txtId === ''||txtId.trim().length<3) {
        setError(id, 'Customer Id cannot be Empty');
        id.select();
    }
    else if(!regExpId.test(txtId)){
        setError(id,'The Customer ID should follow the pattern CXXX; X={0-9}');
        id.select();
    }
    else {
        setSuccess(id);
        customerId=true;
    }
    if (txtName === '') {
        setError(cusName, 'Customer Name is required');
        cusName.select();
    }
    else if(!regExpName.test(txtName)){
        setError(cusName, 'Invalid Customer Name');
        cusName.select();
    }else {
        setSuccess(cusName);
        customerName=true;
    }
    if (txtAddress === '') {
        setError(address, 'Customer Address is required');
        address.select();
    }else {
        setSuccess(address);
        customerAddress=true;
    }
    if(customerId && customerName && customerAddress){
        inputsValidate=true;
        var template = `
    <tr>
      <td>${txtId}</td>
      <td>${txtName}</td>
      <td>${txtAddress}</td>
    </tr>`;
        table.innerHTML += template;

        var add = 0;
        if(add==0){
            document.getElementById("addBox").style.display='block';
            add=1;
        }else {
            document.getElementById("addBox").style.display='none';
            add=0;
        }
        document.querySelector("#btn").addEventListener('click',function (){
            document.getElementById("addBox").style.display='none';
        });

    }

}



function setError(input, message) {
    var formGroup = input.parentElement;

    // add error class
    formGroup.className = 'form-group error';

    //add error text
    formGroup.querySelector(".inValid").innerText = message;
}

function setSuccess(input) {
    var formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}
