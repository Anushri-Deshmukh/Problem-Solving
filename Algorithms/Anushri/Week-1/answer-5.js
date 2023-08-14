let words = ["gin","zen","gig","msg"]



let morshCodeFunction=function(words){
    const codes=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const storeCode = new Set();
    
    for (const word of words) {
        let morseWord = '';
        for (const char of word) {
            morseWord  += codes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        storeCode.add(morseWord);
    }
    
    return storeCode.size;
}

const a = morshCodeFunction(words);
console.log(a);



