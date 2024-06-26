
// console.log(window);// Not working in window re check
// console.log(window.document);
// console.dir(document);


// 32. ALL DOM SELECTOR 

    // GET ELEMENT BY ID

        document.getElementById('title');
        document.getElementById("title").id;
        // document.getElementById("title").class; This will not work as it js environment className
        document.getElementById("title").className;
        document.getElementById("title").getAttribute('id');
        document.getElementById("title").getAttribute("class");

        // document.getElementById("title").setAttribute('class','test'); this will overwrite the class heading as test.
        document.getElementById("title").setAttribute("class", "test heading");

        // const title = document.getElementById("title"); Can Store in a Variable and access it.

        // Can Change Style
        title.style.backgroundColor='green';
        title.style.padding="5px";

        // TO get Element

        title.textContent;
        // textContent shows all the content in case of dispay:none also.

        title.innerHTML;
        // It will display the full html values/Nodes
        
        title.innerText;
        // innerText The content which is visible in the selected node if display:none
      
    // GET ELEMENT BY CLASSNAME

        document.getElementsByClassName('list-item')
        const tempClassList = document.getElementsByClassName("list-item");
        // It will give a html collection
        // Conveting it to Array
        Array.from(tempClassList)

    // QUERY SElECTOR
        document.querySelector('h2');
        // It will give the first h1
        document.querySelector('#title');
        document.querySelector('.heading');
        document.querySelector('input[type="password"]');
        document.querySelector("h2").style.backgroundColor = "green";
        
        // NodeList and Html collection are not pure array but have some similarity
        const temp = document.querySelectorAll('li')
        temp[0].style.color = 'red'
        //  Study foreach loop

// 33. HOW TO CREATE NEW ELEMENT IN DOM
    
    const parent =  document.querySelectorAll('.parent')
    console.log(parent);

    // It will give html node
    console.log(parent.children);

    console.log(parent.firstElementChild);
    console.log(parent.children[1].innerHTML);

    // Checking the childNodes present in Parent , I will also include new line as a text node 
    console.log("NODES: ", parent.childNodes);

    const div = document.createElement('div')
    div.className = "main"

    // Compare which is better optimize
    div.innerText = "subh";
    const addText = document.createTextNode("chai");
    div.appendChild(addText); 

    div.setAttribute("id", generated);
    div.style.backgroundColor = "green";

    //Adding the Div to the body 
    document.body.appendChild(div);
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = '${langName}';
        document.querySelector('.language').appendChild(li);
    }
    addLanguage("python");
    addLanguage("typescript");

// 34.EDIT & REMOVE ELEMENTS

    // EDIT

    const secondLang = document.querySelector("li:nth-child(2)");
    //secondLang.innerHTML = "Mojo";
    // secondLang.outerHTML = '<li>TypeScript</li>'
    const newLi = document.createElement('li');
    newLi.textContent = "Mojo";
    secondLang.replaceWith(newLi);

    // REMOVE
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove();

