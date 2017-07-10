angular.module("app")
.service("myService", function() {
  var person = {
    firstName: "",
    secondName: "",
    email: "",
  }

  var setInformation = function(first, second, email) {
    person.firstName = first;
    person.secondName = second;
    person.email = email;
  } 

  var getInformation = function() {
    return person;
  }   
  return {
    setInformation: setInformation,
    getInformation: getInformation
  }
});