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

magarr=[`https://engage4more.com/blog/wp-content/uploads/2022/03/Bassi-_1x1.jpg`,`https://pbs.twimg.com/media/E7jRlxnWQAc_vWA.jpg`
,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nqR4IIVkN33LnPkKpv1TVBckm4rYckO6yw&usqp=CAU`,
`https://i0.wp.com/foxfoster.com/wp-content/uploads/2021/04/michel-grolet-NBRNK4XC1k8-unsplash-scaled.jpg?fit=1024%2C652&ssl=1`,
`https://i0.wp.com/foxfoster.com/wp-content/uploads/2021/04/michel-grolet-NBRNK4XC1k8-unsplash-scaled.jpg?fit=1024%2C652&ssl=1`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAHNtwcLswB2TQ8AlpEgbcKpIuosA1IAR4A&usqp=CAU`,
`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrkJ1VTSeE_5IoQw1Wgenmtl3bA3Xy4VRFA&usqp=CAU`,]

clrr=[`#72ffe5f5`,`#e01eb6`,`#2de01ec2`,`#e058ff`,`#ff5858`]

    const jokebox = (jokes,magarr,clrr) => {
      const tell = document.createElement("p");
      const random = Math.floor(Math.random() * jokes.length);
      tell.textContent = jokes[random];

     
      const hahah = document.getElementById("here");
  
      // changing the background color
      const mags = Math.floor(Math.random() * magarr.length);
      hahah.style.backgroundImage = "url('" + magarr[mags] + "')";
      hahah.style.backgroundSize= "contain ";
     
      
      // changing the coloor of text when it change
      const clss = Math.floor(Math.random() * clrr.length);
      hahah.style.color = `${clrr[clss]}` ;
      hahah.style.transition = "all 2s";
      hahah.style.transform = "rotate(360deg)";
     


;


      // Remove any existing joke
      while (hahah.firstChild) {
        hahah.removeChild(hahah.firstChild);
  
      }
      
      hahah.appendChild(tell);
    };
    

    const telljoke=document.getElementById("pjoke")
    telljoke.addEventListener('click',function(){
       jokebox(jokes,magarr,clrr)
    })
