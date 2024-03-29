/**
 * @param {number} num
 * @return {string}
**/

const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

// nice solution :)
var intToRoman = function(N) {
    let ans = ""
    for (let i=0; N > 0; i++)
        while(N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};