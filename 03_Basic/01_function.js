function  say() {
    console.log("Hello Function");
}
// say();
function add(Num1,Num2){//Pramiter
    console.log(Num1+Num2);
}
add()//NaN  Calling time ask Argument
add(2,4)//6
add(7,"4");//74
add(7 ,"w")//7w
add(7,null)//7

function addtwoNumber1(Num1,Num2){
    console.log(Num1+Num2);
    
}
const result1= addtwoNumber1(2,4)
console.log("Result",result1);//Undefined

function addtwoNumber2(Num1,Num2){
    console.log("Adarsh");
    let result2=Num1+Num2
    return result2
    console.log("Satish");//   not print
}
const result2= addtwoNumber2(2,8)
console.log("Result",result2);//Result 6



function loginUser (username){
    return `${username} just logged in`
}
loginUser("Gopal")//Not Print
console.log(loginUser("Surendra"));//Surendra just logeed in
console.log(loginUser(""));//just logeed in  Empty String
console.log(loginUser());//not value pass   - undefined just logged in


function loginUser (username){
    if(username === undefined){
        console.log("Plese enter a username");
    }
    return `${username} just logged in`
}
loginUser("Gopal")//Not Print
console.log(loginUser("Surendra"));//Surendra just logeed in
console.log(loginUser(""));//just logeed in  Empty String
console.log(loginUser());//not value pass  Plese enter a username  - undefined 


function loginUser (username){
    if(username===undefined){
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUser());//not value pass  Plese enter a username  - undefind



function loginUser1 (username){
    if(!undefined){//same mining just before
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUser1());//not value pass  Plese enter a username  - undefind

function loginUser2 (username="sam"){
    if(!username){
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUser2());//not value pass  sam is iogged in
console.log(loginUser2("Hitesh"));



function calculateCartPrice(num01){//200
    return num01
}
console.log(calculateCartPrice(200,400,600));


function calculateCartPrice1(...num02){//200  Rest
    return num02
}
console.log(calculateCartPrice1(200,400,600));//[200,400,600]


function calculateCartPrice2(val1,val2,...num03){//200
    return num03
}
console.log(calculateCartPrice2(200,400,600,800,1000));//[ 600, 800, 1000 ]



const user={
    username:"Satish",
    price:199
}
function handeobject(anyobject){
    console.log(`userename is ${anyobject.username} and price is ${anyobject.price}`);
}

// handeobject(user)//userename is Satish and price is 199
handeobject({     //userename is Shyam and price is 6867
    username:"Shyam",
    price:6867
})


const myArray = [20,30,40,50]
function returnSecondValue(myArray){
    return myArray[1]
}

console.log(returnSecondValue(myArray));//30
console.log(returnSecondValue([100,200,300,400]));//200