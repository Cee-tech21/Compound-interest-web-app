// Get elements from DOM
let enteredAmountEl = $("#entered-amount")
let submitButtonEl = $("#submit-btn")
//let viewTransHistory = $("#trans-history")
let transHistDiv = $("#tranz-hist")
let currentBalEl = $("#current-bal")
let numOfYearsEl = $("#num-of-years")

// Declare some variables
let theTotal = 0;
let cashHistory = "";
let transHist = "";

// Manipulate DOM
submitButtonEl.click(function(){
    if (numOfYearsEl.val()>= 1 && enteredAmountEl.val()>= 1){
        let interest = 0
        theTotal = enteredAmountEl.val()
        //console.log("numOfYears ", numOfYearsEl.val())
        // Do computations
        for (let index = 0; index < numOfYearsEl.val(); index++) {
            interest = 0.04 * theTotal
            theTotal = Number(theTotal) + Number(interest)
        }
        console.log("the total", theTotal)
        currentBalEl.text( theTotal.toFixed(2) )
        transHist = `<p class="bg-light py-2 px-2">
                    ${enteredAmountEl.val()} unit(s) 
                        compounded for 
                     ${numOfYearsEl.val()} years at 4% 
                     giving ${theTotal.toFixed(2)} unit(s)
                      </p>`
        transHistDiv.append(transHist)
                    
    }else{swal("Enter positive numbers for amount and years.")}

})