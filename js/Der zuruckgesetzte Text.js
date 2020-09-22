let text = prompt("Geben Sie einen Text ein");
let l = text.length;
z = "" ; 
for (i= 0; i <= l ; i++ ) {
   z += text.charAt(l - i);
}
alert ("Der zurückgesetzte Text ist " + z );
