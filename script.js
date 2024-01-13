"use strict";

console.log("subhashis");
console.table([]);

/*
Not to use var bcoz of issue in block scope and functional scope.
*/

// alert(3+3) we are using nodejs, not browser
console.log(typeof null);

//1. Datatype Conversion
    Number()
    // "33"=>33
    // "33abc"=>NaN
    // true=>1; false =>0
    Boolean()
    // 1=>true; 0=>false
    // "subh"=>true
    String()
 //2. Coercion
    console.log(+true);
    // Here '+' operator used for type coercion.When used as a unary operator before a value, it attempts to convert the operand to a number. Ans=1
// 3.Comparison
    console.log(null>0);
    console.log(null==0);
    console.log(null>=0);
    console.log(undefined>=0);
    console.log("2">1);
    console.log(2>1);
    // === strict checking

//4.Data types in js
    // 4.1 Primitive(7) Number,string etc...
    // 4.2 Reference(Non Primitive) Data Types(5-6) Object,Array,Function etc...

//5. Stack and Heap Memory
   //Stack(Primitive--A copy is used)
   //Heap(Non Primitive --reference is used)

// 6.String
    const name="subh";
    const repo=50;
    console.log(name + repo +"value");
    // Using String Interpolation
    console.log(`Hello my name is ${name}`);
    const gameName = new String("subhashis");
    console.log(gameName.length());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('b'));
    console.log(gameName.substring(0,4));
    console.log(gameName.slice(-4,4));
    replace(),inludes(),split();
    const name2="    abcde   ";
    console.log(name2);
    console.log(name2.trim());

// 7.----------NUMBER--------------- 
    const score = 400;
    // Explicit Defining
    const balance = new Number(100);
    console.log(balance.toString());
    console.log(balance.toFixed(2));
    
    const otherNumber = 123.334;
    // It returns a string representation of the number, with a specified number of significant digits. 
    console.log(otherNumber.toPrecision(3));
    const hundreds = 1000000
    // Basicially zeros in format that easily readable,possible in Indian also('en-IN')
    console.log(hundreds.toLocaleString('default',{weekday:"long"}));

// 8.----------MATHS--------------
    console.log(Math);
    console.log(Math.abs(-4));
    console.log(Math.round(4.6));
    console.log(Math.ceil(4.6));
    console.log(Math.floor(4.6));
    console.log(Math.min(4,3,5,7,8));
    // Random number [0,1)
    console.log(Math.random());
    // To a certain range, +1 for cases like 0.04 (To avoid 0 case)
    console.log((Math.random()*20)+1);
    console.log(Math.floor(Math.random()*20)+1);

    const min=10;
    const max=20;
    console.log(Math.floor(Math.random()*(max-min+1))+min);

// 9.-----------DATE and TIME------------
    // Date is an Object
    let myDate = new Date();
    // Date with method basically covert it into more readable value
    console.log(myDate);//Output : 2023-10-09T14:38:09.847Z
    console.log(myDate.getMonth());
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleString()); // Output : 10/9/2023, 7:44:20 AM

    let myCreatedDate = new Date(2024,0,23)
    console.log(myCreatedDate.toDateString());
    // Adding time
    let myCreatedDate2 = new Date(2024, 0, 23,5,3);
    console.log(myCreatedDate.tolocaleString());
    let myCreatedDate3 = new Date("01-14-2024");

    // TIME(Time stamp for quizes, polls etc)
    let myTimeStamp = Date.now()
    console.log(myTimeStamp);
    console.log(myCreatedDate.getTime());
    // Converting to mili second to second
    console.log(Math.floor(Date.now()/1000));

// 10.-----------ARRAY-----------------

    // Js array are resizable and contain mix of different datatypes.
    const myArr = [1,2,3,4];
    const myArr2 = new Array(1,2,3,4);
    // Method push(),pop(),unshift(),shift(),includes(),indexof()
    console.log(myArr.join());
    // Slice--myArr(1,3) It print [1,2] and original array doesn't Change
    // Splice--myArr(1,3) It print [1,2,3] and original array Change([4],1,2,3 are left)

    // Checking a sting is array or not 
        console.log(Array.isArray("Subhahis"));
        // Convert the string to array
        console.log(Array.from("Subhashis"));
        // Interesting Case as it return []
        console.log(Array.from({"Subhashis"}));

    // Create New array from the set of element
        let score1=100;
        let score2=200;
        let score3=300;
        console.log(Array.of(score1,score2,score3));
        
// 11.-------------OBJECTS-----------------
    // Singleton
    // object create
    // This is Object Literal
    const mysym = Symbol("key1");
    const user={
        name:"Subh",
        fullname:{
            firstname:"abcddef",
            lastname:"adsrfnf"
        },
        age:18,
        [mysym]:"key1",
        login: ["Mon","satur"]
    };
    console.log(user.name);
    // Here name is also a string
    console.log(user["name"]);
    // console.log(user.mysym);
    console.log(user[mysym]);

    // When you use a Symbol as a property key, the Symbol serves as a unique identifier, but the value associated with that property can be of any type, including strings.
    console.log(typeof mysym === 'symbol'); // Outputs: true
    console.log(typeof user[mysym] === 'symbol'); // Outputs: false

    // TO change the value in object
         user.name = "Subhashis";
        //  Object.freeze(user);
         user.greeting = function(){
            console.log("Hello");
         }
        //  When referencing same object we use this keyword
         user.greeting2 = function(){
            console.log(`Hello ${this.login}`);
         }
         console.log(user.greeting());
         console.log(user.greeting2());
    
    // Singleton Object
         const user2 = new Object()
         console.log(user2);
    // Non-Singleton Object
         const user3 = {}
         console.log(user3);
         user3.id="123acb";
         user.name="sdfnjsdn";

    // Combining Object
        //  Here Target object is empty{} and user2,user3 is source object.
         const obj= Object.assign({},user2,user3)
        //  Spread operator easy way.
         const obj2 = {...user2, ...user3}

    // Array of Object
         const user4 =[
            {
                name:"asdads",
                id:1
            },
            {
                name:"asdads",
                id:1
            }
         ]
         console.log(user4[1].id);
         console.log(Object.keys(user4));
         console.log(Object.values(user4));
    
    // Destructuring Of Object
        //  It allows you to extract properties from an object and assign them to variables.
         const course ={
            coursename: "js",
            price: "10"
         };
         const {coursename}=course;
         console.log(coursename);
        //  Can create a new variable and assign to it.
         const {coursename: cname} = course;
         console.log(cname);

// 12.------------FUNCTIONS------------------

         function myName(num1,num2){
            console.log(num1+num2);
         }
         myName(3,4);

        //  Func with Array and Object
        //  Rest and Spread Operator are same bt usecase
         function calculateCartPrice(...num1){
            return num1;
         }
         console.log(calculateCartPrice(200,300,400)); //  Output--[200,300,400]
        
         const user5={
            username:"abcdf",
            price: 1200
         }

         function handleObject(anyobject){
            console.log(`Username is ${anyobject.username} and a price ${anyobject.price}`);
         }

        //  HOISTING if we cl addTwo before declaration it will show problem but in this function addTwo(){}
         const addTwo = function(num){
            return num+2
         }
         console.log(addTwo(2));

        //  handleObject(user);
        handleObject({
            username: "sam",
            price: 299
        })
        // Array passing handle([299,299,377])
        
// 13.----------------SCOPE-------------------
        // var is function-scoped
        // let is block-scoped
        if(true){
            var b=10;
            // So here a value will not print out side the scope but b value will.
        }
        console.log(b);

// 14.----------THIS AND ARROW FUNCTION-------
        const user6 ={
            username:"hitesh",
            price:999,
            // Refering to curr context use "this" keyword.
            welcomeMessage: function(){
                console.log(`${this.username} , welcome to Website`);
                console.log(this);// OUTPUT--Print the whole obj 
            }
        }
        user6.welcomeMessage()
        user6.username = "sam";
        user6.welcomeMessage()
        console.log(this); // OUTPUT-{} when refering to no object in global(Node) ,When run in browser global object is window.
        
        function laude (){
            console.log(this);// OUTPUT --A bunch of things.
            let nam = "subha"
            console.log(this.nam);
            // OUTPUT--undefined, this works in OBJ only.
        }
        laude();

    // ARROW FUNCTION
        const user7 = () => {
            console.log(this);// OUTPUT --{}
        }

        // Explict return, when we use the keyword 
        const user8 = (num1,num2) => {
            return num1+num2
        }

        // Implict Return
        // const user9 = (num1,num2) => num1+num2
        const user9 = (num1,num2) => (num1+num2)

        // Return a object, Use bracket() or else it will show undefined.
        const user10 = (num1,num2) => ({username:"subh"})










    
