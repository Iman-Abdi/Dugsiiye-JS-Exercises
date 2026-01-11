const People = [
  {Name : "Iman" , Age : 20 , City : "Garowe"},
  {Name : "Ali" , Age : 22 , City : "Bossaso"},
  {Name : "Jama" , Age : 25 , City : "Qardho"}
]

console.log("Properties and Valeu of Each Person:")

for (const P of People) {
    for (const Pe in P ) {
      console.log(Pe + ": " + P[Pe]);
    }
    console.log("----->")
}