let noOfrounds=Number.parseInt(prompt("Enter the no of rounds you want to play"))
let rounds=isNaN(noOfrounds)
if(!rounds)
{
let choice=["Snake","Water","Gun"]
let userwins=0;
let computerwins=0;
while(noOfrounds!=0)
  {
let UserChoice=prompt("Enter Snake, Water and Gun")
let computerChoice=choice[Math.floor(Math.random()*3)]

    if(UserChoice==computerChoice)
    {
      noOfrounds--;
      userwins++;
      computerwins++;
      alert(`Its, tie The current score is User Wins ${userwins} and computer wins ${computerwins}`)
      alert(`Computer chooses ${computerChoice}`)
    }
     if(UserChoice=="Snake" && computerChoice=="Water"||UserChoice=="Water"&&computerChoice=="Gun"||UserChoice=="Gun"&&computerChoice=="Snake")
    {
      noOfrounds--;
      userwins++;
      alert(`You won, The current score is User Wins ${userwins} and computer wins ${computerwins}`);
      alert(`Computer chooses ${computerChoice}`)
      
    }
    if(UserChoice=="Water" && computerChoice=="Snake"||UserChoice=="Gun"&&computerChoice=="Water"||UserChoice=="Snake"&&computerChoice=="Gun")
    {
      noOfrounds--;
      computerwins++;
      alert(`You lost, Computer Wins  The current score is User Wins ${userwins} and computer wins ${computerwins}`);
      alert(`Computer chooses ${computerChoice}`)
     
    }
  }
}
else
{
  alert("Enter the correct value")
}

  

