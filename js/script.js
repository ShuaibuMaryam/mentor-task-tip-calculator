const calculator = document.querySelector(".calculator"),
    tip_options = calculator.querySelector(".tip-options"),
    get_bill = calculator.querySelector("#bill"),
    get_people = calculator.querySelector("#people"),
    tip_amount = calculator.querySelector("#tip-amount"),
    tip_total_amount = calculator.querySelector("#tip-total-amount"),
    reset_button = calculator.querySelector("[data-action='reset']");

        

tip_options.addEventListener('click', ({target}) => {
 if (target.matches('button')) {
   
    const action = target.dataset.action;
    // const keyContent = target.textContent;

    // console.log(keyContent, action);
     const bill = get_bill.value;
     const numberPersons = get_people.value;
     
    bill_calculation(action, bill, numberPersons);
     
 }
});

const bill_calculation = (x, y, z) => {

    let tmp_result = (x / 100) * y;


    
    console.log(x, y, z);
    return tmp_result;

}

/* const values = [];
    
    get_bill.addEventListener('change', ({ target }) => {
        // const bill_value = target.value;
        values.push(target.value);
        // console.log(values);
    })

    
    get_people.addEventListener('change', ({target}) => {
        // const people_value = target.value;
        values.push(target.value);
        // console.log(values)
    }) */



reset_button.addEventListener('click', () => {
    get_bill.value = 0;
    get_people.value = 0;
})



/* 
09076969865
    Get the bill, take the percentage of the bill according to any of the buttons clicked ie, 15%, 20% etc. and divide it by
    the number of people specified by the user. the result without dividing by number of people is displayed
    just beside the text "tip amount" and the result after dividing is displayed beside the text "total / person"
    by the right hand side... or at least that's what i think. sigh! hope i have not succeeded in confusing you. 
*/