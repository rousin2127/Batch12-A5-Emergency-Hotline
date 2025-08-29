

1. Difference Between getElementById, getElementsByClassName, querySelector, and querySelectorAll

Answer:This is comparison of these  getElementById, getElementsByClassName, querySelector, and querySelectorAll.

        getElementById is a method of dom which actually retrieve a specific html element from DOM  . Actually it select an element by "id"
        example : <h1 id="title"></h1>
        document.getElementById("title")

        getElementsByClassName is also a method and it retrieve an array by its class name       
        example : <h1 class="title"></h1>
        document.getElementByClassName("title")

        querySelector is retrieve one element and select the first matching element 
        example : <h1 class="title"></h1>
        document.querySelector(".title")

        querySelectorAll is also can retrieve all element and select all element  and match all
        example : <h1 class="title"></h1>
        document.querySelectorAll(".title")   



2.How to Create and Insert a New Element into the DOM     

Answer:Create a new element using document.createElement() and insert it into the page using by appendChild()
    Example:
        let para = document.createElement("p");
        para.textContent = "Hello, I am a new paragraph!";
        document.body.appendChild(para);


3. What is Event Bubbling?

Answer:When you click on Event Bubbling an element, the event work on that element, then it moves upward to its parent → grandparent.......
    Example:
    <div id="parent">
          <button id="child">Click Me</button>
        </div>

        <script>
        document.getElementById("parent").addEventListener("click", function() {
            console.log("Parent clicked");
        });

        document.getElementById("child").addEventListener("click", () => {
            console.log("Button clicked");
        });
</script>



4. What is Event Delegation & Why It’s Useful

Answer: Event Delegation is adding a click listener to every child element,and add one listener to the parent element and detect and clicked using event.target.
    
usefulness:
Saves memory
Works even for dynamically added elements



5. Difference Between preventDefault() and stopPropagation()
Answer: preventDefault() is Stops the default browser behavior.
       and stopPropagation() is Stops the event from bubbling up.

