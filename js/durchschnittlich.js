let s =0
let n1 = parseInt(prompt("Enter n1"));
let n2 = parseInt(prompt("Enter n2"));
for (i=n1; i<=n2; i++) {
    s+=i;
}
let m = s/( n2-n1+1);
alert ("das Durchschnittlich ist" + m); 
