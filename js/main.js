var options ={
      1: [
        `<div id="attendee_1_wrap">
        <h3>Please provide full names:</h3>
        <label for="name_attendee_1">
                Attendee 1 Name:
        </label>
        <input type="text" id="name_attendee_1">
    </div>`
      ],

      2: [
        `<div id="attendee_1_wrap">
        <h3>Please provide full names:</h3>
        <label for="name_attendee_1">
                Attendee 1 Name:
        </label>
        <input type="text" id="name_attendee_1">
    </div>`

    `<div id="attendee_2_wrap">
     <label for="name_attendee_2">
            Attendee 2 Name:
     </label>
     <input type="text" id="name_attendee_2">
     </div>`
      ],

      3: [
        `<div id="attendee_1_wrap">
        <h3>Please provide full names:</h3>
        <label for="name_attendee_1">
                Attendee 1 Name:
        </label>
        <input type="text" id="name_attendee_1">
    </div>`

    `<div id="attendee_2_wrap">
     <label for="name_attendee_2">
            Attendee 2 Name:
     </label>
     <input type="text" id="name_attendee_2">
     </div>`
     ` <div id="attendee_3_wrap">
     <label for="name_attendee_3">
             Attendee 3 Name:
     </label>
     <input type="text" id="name_attendee_3">
 </div>`
      ],

      4: [
        `<div id="attendee_1_wrap">
        <h3>Please provide full names:</h3>
        <label for="name_attendee_1">
                Attendee 1 Name:
        </label>
        <input type="text" id="name_attendee_1">
    </div>`

    `<div id="attendee_2_wrap">
     <label for="name_attendee_2">
            Attendee 2 Name:
     </label>
     <input type="text" id="name_attendee_2">
     </div>`
     ` <div id="attendee_3_wrap">
     <label for="name_attendee_3">
             Attendee 3 Name:
     </label>
     <input type="text" id="name_attendee_3">
    </div>`
    ` <div id="attendee_4_wrap">
    <label for="name_attendee_4">
            Attendee 4 Name:
    </label>
    <input type="text" id="name_attendee_4">
</div>`
      ],

      5: [
        `<div id="attendee_1_wrap">
        <h3>Please provide full names:</h3>
        <label for="name_attendee_1">
                Attendee 1 Name:
        </label>
        <input type="text" id="name_attendee_1">
    </div>`

    `<div id="attendee_2_wrap">
     <label for="name_attendee_2">
            Attendee 2 Name:
     </label>
     <input type="text" id="name_attendee_2">
     </div>`
     ` <div id="attendee_3_wrap">
     <label for="name_attendee_3">
             Attendee 3 Name:
     </label>
     <input type="text" id="name_attendee_3">
    </div>`
    ` <div id="attendee_4_wrap">
    <label for="name_attendee_4">
            Attendee 4 Name:
    </label>
    <input type="text" id="name_attendee_4">
</div>`
`  <div id="attendee_5_wrap">
<label for="name_attendee_5">
        Attendee 5 Name:
</label>
<input type="text" id="name_attendee_5">
</div> `
      ]

}

var main = document.getElementById('num_attendees')
var sub = document.getElementById('attendee_container')  
//  Trigger the event when the main options changes

main.addEventListener('change', function(){
        // get the selected option 
        var selected_option = inputs[this.value]; 


        // Retriving the inputs options using while loop

         while(sub.inputs.length > 0) {
             
                sub.inputs.remove(0);
         }

        //  convert selected object into array and create a option for the array element
        // using constructors will create html element with the given value and innerText

        Array.from(selected_option).forEach(function(){
              let input = new   input(el, el);
              
        //       append the child option in sub (input area)
        sub.appendChild(input);
              
        })



         
})


console.log(one)