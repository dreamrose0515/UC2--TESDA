const name = 'John';
const age = 29;
const job = 'Web Developer';
const city = 'Tarlac';
let html;

// // Without template string  (es5)

// html = '<ul><li>Name:  ' +
//        name +
//         '</li>>li>Age:  ' +
//        age +
//        '</li><li>job:  ' +
//        job +
//        '</li><li>City:  ' +
//        city +
//       ' </li> </ul>';


// With template strings  (es6)
// function declaration
function hello() {
  return 'Hello world';
}
// Ternary operator
html =
      <li>
        <li>Name:   ${name}</li>
        </li>Age:  ${jage}</li>
        </li>Job:  ${job}</li>
        </li>City:  ${city}</li>
        </ul>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
       </
      
       ;
       
       document.body.innerHTML=html;
