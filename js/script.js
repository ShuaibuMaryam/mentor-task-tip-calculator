const calculator = document.querySelector('.calculator');
const tip_options = calculator.querySelector('.tip-options');
const get_bill = calculator.querySelector('#bill');
const get_people = calculator.querySelector('#people');
const tip_amount = calculator.querySelector('#tip-amount');
const tip_total_amount = calculator.querySelector('#tip-total-amount');
const reset_button = calculator.querySelector("[data-action='reset']");

tip_options.addEventListener('click', ({ target }) => {
  if (target.matches('button')) {
    const action = target.dataset.action;
    // const keyContent = target.textContent;

    const bill = get_bill.value;
    const numberPersons = get_people.value;

    if (!get_bill.value || !get_people.value) {
        console.log('Values needed!');
    } else if (isNaN(get_bill.value) && isNaN(get_people.value)) {
      console.log('Invalid Input');
    } else {
      bill_calculation(action, bill, numberPersons);
    }
      
  }
});

reset_button.addEventListener('click', () => {
  get_bill.value = null;
  get_people.value = null;
  tip_amount.innerHTML = '---';
  tip_total_amount.innerHTML = '---';
});

/* METHODS */
const bill_calculation = (x, y, z) => {
  let tmp_result = (x / 100) * y;
  tmp_result = tmp_result.toFixed(2);

  tip_amount.innerHTML = tmp_result;
  tip_total_amount.innerHTML = tmp_result * z;
};

/* 
    Get the bill, take the percentage of the bill according to any of the buttons clicked ie, 15%, 20% etc. and divide it by
    the number of people specified by the user. the result without dividing by number of people is displayed
    just beside the text "tip amount" and the result after dividing is displayed beside the text "total / person"
    by the right hand side... or at least that's what i think. sigh! hope i have not succeeded in confusing you. 
*/
