let noOfrounds=Number.parseInt(prompt("Enter the no of rounds you want to play"))
let rounds=isNaN(noOfrounds)
if(!rounds)
{
let choice=["S","W","G"]
let userwins=0;
let computerwins=0;
while(noOfrounds!=0)
  {
let UserChoice=prompt("Enter S for snake, W for water and G for gun")
let computerChoice=choice[Math.floor(Math.random()*3)]

    if(UserChoice==computerChoice)
    {
      noOfrounds--;
      userwins++;
      computerwins++;
      alert(`Its, tie The current score is User Wins ${userwins} and computer wins ${computerwins}`)
    }
     if(UserChoice=="S" && computerChoice=="W"||UserChoice=="W"&&computerChoice=="G"||UserChoice=="G"&&computerChoice=="S")
    {
      noOfrounds--;
      userwins++;
      alert(`You won, The current score is User Wins ${userwins} and computer wins ${computerwins}`);
      
    }
    if(UserChoice=="W" && computerChoice=="S"||UserChoice=="G"&&computerChoice=="W"||UserChoice=="S"&&computerChoice=="G")
    {
      noOfrounds--;
      computerwins++;
      alert(`You lost, Computer Wins  The current score is User Wins ${userwins} and computer wins ${computerwins}`);
     
    }
  }
}
else
{
  alert("Enter the correct value")
}

  

