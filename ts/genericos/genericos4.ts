function removeChar(theString: string, theChar: string): string {
    let theRegex = new RegExp(theChar, "gi");    
    return theString.replace(theRegex, ''); 
}
console.log(removeChar("holagihola","a"));
