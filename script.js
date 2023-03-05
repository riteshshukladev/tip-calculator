let bill_in_total = document.getElementById("bill-in-total");
let bill_in_tip = document.getElementById("Tip-in-total");
let total_person= document.getElementsByClassName("total-person");
let total_share = document.getElementsByClassName("total-share");  

let total_person_value = Number.parseInt(total_person.innerText);

// Number.parseInt(total_person.value);
// Number.parseInt(total_share.value);


const CalculateBill = () => {

    const bill=Number(bill_in_total.value);
    const tip_percent=(bill_in_tip.value)/100;

    const tip_amount=bill*tip_percent;
    console.log(tip_amount);
    const total_bill=bill+tip_amount;
    console.log(total_bill);
    const per_person_total=total_bill/total_person_value;

    total_share.innerText=`$${per_person_total}`;
}
const plus_function = () => {
    total_person.value++;
    total_person.innerText=total_person.value;
    CalculateBill();
}
const minus_function = () => {
    if(total_person.value<=1){
        return;
    }
    else
    total_person.value--;
    total_person.innerText=total_person.value;
    CalculateBill();
    
}


const heading = document.getElementsByClassName('.Main');
heading.innerText="Tip Calcula";
heading.style.color="red";