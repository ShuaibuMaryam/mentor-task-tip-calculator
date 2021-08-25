const calculator = document.querySelector(".calculator");
const tip_options = calculator.querySelector(".tip-options");
con

tip_options.addEventListener('click', e => {
 if (e.target.matches('button')) {
   
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    console.log(keyContent, action);
     
 }
});

//Get the bill, take the percentage of the bill according to any of the buttons clicked ie, 15%, 20% etc. and divide it by
//the number of people specified by the user. the result without dividing by number of people is displayed
//just beside the text "tip amount" and the result after dividing is displayed beside the text "total / person"
//by the right hand side... or at least that's what i think. sigh! hope i have not succeeded in confusing you.