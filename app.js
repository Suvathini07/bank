let userName = document.querySelector(".login__input--user")
let Pin = document.querySelector(".login__input--pin")
let logButton = document.querySelector(".login__btn")
let app = document.querySelector(".app")
let balance = document.querySelector(".balance__value")
let welcome = document.querySelector(".welcome")

let loanAmt = document.querySelector(".form__input--loan-amount")
let loanBtn = document.querySelector(".form__btn--loan")

let transferAmt = document.querySelector(".form__input--amount")
let transferTo = document.querySelector(".form__input--to")
let transferBtn = document.querySelector(".form__btn--transfer")

let movements=document.querySelector(".movements")

let account={
    user:"suva",
    pin:111
}
let account2={
    user:"nethra",
    pin:222
}
let account3={
    user:"priya",
    pin:333
}


let acc= [account,account2,account3]
logButton.addEventListener("click",function(){
    for (let i=0;i<acc.length;i++) {
        if (acc[i].user==userName.value&&acc[i].pin==Pin.value) {
            app.style.opacity=1;
            if (userName.value=="suva") {
                balance.innerHTML=300+"$";
                welcome.innerHTML="welcome suva";
            }
            else if(userName.value=="nethra") {
                balance.innerHTML=600+"$";
                welcome.innerHTML="welcome nethra";
            }
            else if(userName.value=="priya") {
                balance.innerHTML=900+"$";
                welcome.innerHTML="welcome priya";
            } else {
                balance.innerHTML=500+"$";
                welcome.innerHTML="welcome unknown user";
            }
            return
        }
    }
    console.log("invalid user");
    app.style.opacity=0;
})



loanBtn.addEventListener("click",function() {   
    let i=0;
    while (i<acc.length) {
        if (acc[i].user==userName.value) {
            let amt = parseFloat(loanAmt.value);
            let bal = parseFloat(balance.textContent);
            let totalAmt = amt+bal;
            balance.innerHTML = totalAmt + "$";
                
                let divbar=document.createElement("div")
                let typediv=document.createElement("div")
                let datediv=document.createElement("div")
                let amtdiv=document.createElement("div")

                divbar.classList.add("movements__row")
                typediv.classList.add("movements__type")
                typediv.classList.add("movements__type--deposit")
                datediv.classList.add("movements__date")
                amtdiv.classList.add("movements__value")


            typediv.innerHTML="deposit"
            datediv.innerHTML=new Date().toDateString()
            amtdiv.innerHTML=amt+"$"

            divbar.appendChild(typediv)
            divbar.appendChild(datediv)
            divbar.appendChild(amtdiv)
            movements.appendChild(divbar)
        }
        i++; 
        
    }                                                                                                                                                             
})


transferBtn.addEventListener("click",function(){
    let i=0;
    while (i<acc.length) {
        if (acc[i].user==transferTo.value) {
            let traAmt = parseFloat(transferAmt.value)
            let traBal = parseFloat(balance.textContent)
            let totalAmount = traBal - traAmt
            
            if (totalAmount>=0) {
                balance.innerHTML = totalAmount+"$"


                let divbar=document.createElement("div")
                let typediv=document.createElement("div")
                let datediv=document.createElement("div")
                let amtdiv=document.createElement("div")

                divbar.classList.add("movements__row1")
                typediv.classList.add("movements__type1")
                typediv.classList.add("movements__type--withdrawal")
                datediv.classList.add("movements__date1")
                amtdiv.classList.add("movements__value1")


            typediv.innerHTML="withdrawal"
            datediv.innerHTML=new Date().toDateString()
            amtdiv.innerHTML=traAmt+"$"

            divbar.appendChild(typediv)
            divbar.appendChild(datediv)
            divbar.appendChild(amtdiv)
            movements.appendChild(divbar)
            }

        }
        i++;
        
    }


})
