const  submitForm = (event)=>{
    event.preventDefault();
    console.log(event)
    const obj = {};
  const formData =  new FormData( event.target); 
  for (var key of formData.keys()) {
      obj[key] = formData.get(key);
  }
 console.log(obj)
 const newElement = document.createElement('div');
 newElement.className = 'each-message';
 const name = document.createElement("p");
 
 const gender = document.createElement('p');
 // const genderNode = document.createTextNode(`Gender: 
 // ${obj.gender}`)
 const genderNode = document.createTextNode(` 
 ${obj.gender}`)
 // gender.append(genderNode)

 getGenderLabel = () => {
    if(obj.gender === "male"){
       return "Mr"
    }else { return "Mrs"}
    console.log("obj.gender -",obj.gender)
 }



 const nameNode = document.createTextNode( ` ${getGenderLabel()} ${obj.first_name} ${obj.middle_name} ${obj.last_name}`);
 name.appendChild(nameNode);

 const suggession = document.createElement('p');
 const suggessionNode = document.createTextNode(`  ${obj.suggession}`);
 suggession.appendChild(suggessionNode)

 const time = document.createElement('p');
 const timeNode = document.createTextNode(` ${new Date().toDateString()}`)
 time.append(timeNode);

newElement.appendChild(name);
newElement.appendChild(gender);
newElement.appendChild(suggession);
newElement.appendChild(time);

document.getElementById('output').appendChild(newElement)
document.getElementById("form").reset();
}

const restForm = ()=>{
 document.getElementById("form").reset(); 
}
 