console.log("loading....")
jokes=[
    `The Funniest Jokes for Kids
    Why did the chicken cross the playground?
    To get to the other slide!`,
    
    `Why did the actor fall through the floorboards?
    They were going through a stage!`,        
    
    `Why did a scarecrow win a Nobel prize?
    He was outstanding in his field!`,
    
    `Why are peppers the best at archery?
    Because they habanero!` ,        
    
    `What did the duck say after she bought chapstick?
    Put it on my bill!`,
    
    `Why did an old man fall in a well?
    Because he couldn’t see that well!`,
    
    `What do you call a fake noodle?
    An impasta!`,
    
    `What did the three-legged dog say when he walked into a saloon?
    I’m looking for the man who shot my paw!`,
    
    `How do you tell the difference between a bull and a cow?
    It is either one or the udder!`,
    
    `What’s red and smells like blue paint?
    Red paint!`,
    
    `What’s the difference between a hippo and a Zippo?
    One is very heavy, the other is a little lighter!`]

    const jokebox = (jokes) => {
      const tell = document.createElement("p");
      const random = Math.floor(Math.random() * jokes.length);
      tell.textContent = jokes[random];
      const hahah = document.getElementById("here");
      
      // Remove any existing joke
      while (hahah.firstChild) {
        hahah.removeChild(hahah.firstChild);
      }
      
      hahah.appendChild(tell);
    };
    

    const telljoke=document.getElementById("pjoke")
    telljoke.addEventListener('click',function(){
       jokebox(jokes)
    })
