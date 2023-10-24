const sid = `{
 "name" : "Alex Melon",
 "id" : "E002445",
 "role" : ["Dev","DBA"],
 "age" : 22,
 "married" : false,
 "address" : {
  "street" : "32,Laham.st.",
  "city" : "Innsbruck",
  "country" : "Austria"
 },
 "refered-by" : "E0012"
}`
const simp = JSON.parse(sid);
console.log(simp);

  
 let simp3=sid.role[0];
console.log(simp3);