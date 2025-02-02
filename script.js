function checkVowels(){
    var text = document.getElementById("inputText").value;
    var vowelcount = 0;

    // converting it into lower case
    text = text.toLowerCase();

    for(var i=0; i< text.length; i++){
        var char = text.charAt(i);
        if(isVowel(char)){
            vowelcount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelcount;

}

function isVowel(char){
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}