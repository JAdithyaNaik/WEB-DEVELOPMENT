// to vhange the values just keep = and assign your new values

// document.innerHTML
// gives the inner html of the element


// document.innerText
// gives the inner text of the element



// document.outerHTML
// gives the outer html of the element inckuding itself

// document.outerText
// gives the outer text of the element inckuding itself



// element.tagName
// gives in which tag it is defined (applicable onnly for elments)

// ellement.nodeNAme
// gives in which Node it is defined (incliding comment and text nodes)


// elemet.hidden = true
// this makes the  element to hide

// elelmet.hasAttribute("style")
// returns true when it has that specified attribute (example style , class etc)

// element.getAttribute("style")
// returns the value of the attribute passed (example "display : flex")

// elemet.setAttribute("style","display : inline")
// to set the values

// elemet.removeAttribute("sttyle")
// removes that specified attribute

// elemet.attributes()
// gives all the attribjtes it has

// document.designMode = "on"
// to edit tthe full website



//                                                                      INSERT




// To add a new element into the already existing element
// 1)create a new Element
// 2)write any text using innerHTML into the newly created elment
// 3)target into which you have to insert
// 4)add by append method (adds at the end)
// 5)if you wamt to add any class to that new Element use setSttribute method amnd declare it 
let newEle = document.createElement("span");
newEle.setAttribute("class","newEle");
newEle.innerHTML = "hey hi i have dinserted using JS";
let div = document.querySelector(".conatiner");
div.append(newEle);


// there ar emany other methods to specify the position where to insert (not onlh the append )
// append - at end of that node
// prepend - at start of that node
// after- after that Node
// before - before that node 
// replacewith - replaces that node with this new node


// If you wan to add a adjacnt HTML elemet or txt
// specify the position and the Text
div.insertAdjacentHTML("afterbegin","<b> Here </br>")


//                                                                      DELETE


// target that eleemt and apply .remove()

newEle.remove()


//                                                                      Related to clsses


// element.classList
// gives the list of clases available for that element

// element.className
// gives all the clases in a string 

// Element.clasList.add("newClass")
// this will include a new class into that elemet


// Element.clasList.remove("newClass")
// this will remove that new class from that elemet

// Element.classList.toggle("className")
// adds if not there , if present removes