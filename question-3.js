// Question #3
let userPassword = "";
//let userPassword = "ssswnalWadqQ"
//let userPassword = "TechUp"
//  let userPassword = "abcde"
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (userPassword) {
    if (userPassword.length < 6) {
        return "Weak";
    } else if 
        (userPassword.length <= 10 ) {
            return "Medium";
        }
        else {
            return "Strong";
        }
    }

    console.log (checkPasswordStrength(userPassword));