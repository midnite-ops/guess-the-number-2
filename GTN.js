const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
let count = 7
function userInfo(){
    const userProfile = document.querySelector('.js-input');
    let userGuess = userProfile.value;
    return userGuess
}
function restart(){
    let reSpawn = prompt(`Congratulations, you guessed the right number. Do you want to restart the game? Yes or No`).toLowerCase()
    if(reSpawn == 'yes'){
        location.reload()
    }
    else{
        alert(`Thanks for playing. Have a nice day`)
    }
}
function reSpawn(){
    let reStart = prompt(`GAME OVER. Do you want to restart the game? Yes or No`).toLowerCase()
    if(reStart == 'yes'){
        location.reload()
    }
    else{
        alert(`Thanks for playing. Have a nice day`)
    }
}
function check(){
    let userGuess = userInfo();
    if(isNaN(userGuess)){
        alert('Please enter valid inputs. Numbers only')
    }
    else{
        if(count != 0){
            if(userGuess < randomNumber){
                count--;
                if(count == 1){
                    alert(`You guessed too low, you have ${count} chance remaining`)
                }
                else{
                    alert(`You guessed too low, you have ${count} chances remaining`)
                }
            }
            else if(userGuess > randomNumber){
                count--;
                if(count == 1){
                    alert(`You guessed too high, you have ${count} chance remaining`)
                }
                else{
                    alert(`You guessed too high, you have ${count} chances remaining`)
                }
                
            }
            else{
                restart();
            }
        }
        else{
            reSpawn();
        }
    }
}

