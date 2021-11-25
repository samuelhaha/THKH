var saveToSession = function () {
    var form = document.querySelector('form');
    console.log(form);
    var formElem = new FormData(form);
    console.log(formElem);

    var formToJSON = JSON.stringify(Object.fromEntries(formElem));
    if (sessionStorage.getItem("FormData" === null)) {
        sessionStorage.setItem("FormData", formToJSON);
    } else {
        var currentFormData = JSON.parse(sessionStorage.getItem("FormData"));
        var newFormToJSON = JSON.stringify(Object.assign(currentFormData, formElem));
        sessionStorage.setItem("FormData", newFormToJSON);
    }
    
};