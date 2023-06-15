// Write your solution in this file!
employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

let employee;

beforeEach(function () {
  employee = [];
  employee.name = "Sam";
});

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}
 function deleteFromEmployeeByKey(employee, key){
    const { [key]: deleted, ...newEmployee} = employee;
    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
 }