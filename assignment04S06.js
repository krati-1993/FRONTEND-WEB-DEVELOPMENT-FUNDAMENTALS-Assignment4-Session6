/* Objects in Array pusing as the lenght of the user required  */

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push({
        Employee: 'Employee Name',
        Age : 'Age',
        Salary :  'salary',
        City : 'city',
        State : 'state',
        Pincode : 'pincode',

    });
    console.log(arr[i]);
}

/* Objects in Array */


var array = [
  {Employee: ['Employee Name', 'Age', 'Salary', 'City', 'State', 'Pincode']},
  {Employee: ['Employee Name', 'Age', 'Salary', 'City', 'State', 'Pincode']},
  {Employee: ['Employee Name', 'Age', 'Salary', 'City', 'State', 'Pincode']},
  {Employee: ['Employee Name', 'Age', 'Salary', 'City', 'State', 'Pincode']},
  {Employee: ['Employee Name', 'Age', 'Salary', 'City', 'State', 'Pincode']},
 
];

for(i in array){
	console.log(array[i].Employee);
}