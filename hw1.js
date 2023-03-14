const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const list = [];

let student = xmlDOM.querySelectorAll("student");

student.forEach(item =>{
  const student = {};
  student.name = (item.querySelector('name').textContent);
  student.age = (item.querySelector('age').textContent);
  student.prof = (item.querySelector('prof').textContent);
  list.push(student)
})

console.log(list)

