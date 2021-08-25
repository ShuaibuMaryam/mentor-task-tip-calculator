const calculator = document.querySelector(".calculator");
const tip_options = calculator.querySelector(".tip-options");

tip_options.addEventListener('click', e => {
 if (e.target.matches('button')) {
   
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    console.log(keyContent, action);
     
 }
});

