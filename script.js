

async function getCrew(){
    var info = await fetch("https://api.api-onepiece.com/v2/characters/en");
    const data = await info.json();
    console.log(data);

    var detailsinfo = document.getElementById("details");

    let i = 0;

    for( i; i<=9; i++){

        var box = document.createElement('section');
        box.className = `character${i}`;

        var box1 = document.createElement('div');
        box1.className = `characterbox${i}`;

        var box2 = document.createElement('div');
        box2.className = `imgbox${i}`;

        var name = document.createElement('h2');
        name.textContent = `${data[i].name}`;

        var job = document.createElement('p');
        job.textContent = `${data[i].job}`;

        var bounty = document.createElement('h1');
        bounty.textContent = `${data[i].bounty}`;

        var image = document.createElement('img');
        image.id = `${data[i].name} pic`;
        image.className = "im";


        box1.appendChild(name);
        box1.appendChild(job);
        box1.appendChild(bounty);
        box2.appendChild(image);
        box.appendChild(box1);
        box.appendChild(box2);
        detailsinfo.appendChild(box);
        
    
    }

    document.querySelector(".imgbox0 img").src = 'images/gear5.webp';
    document.querySelector(".imgbox1 img").src = 'images/3sword.avif';
    document.querySelector(".imgbox2 img").src = 'images/download.jpeg';
    document.querySelector(".imgbox3 img").src = 'images/sniper.jpeg';
    document.querySelector(".imgbox4 img").src = 'images/footman.jpeg';
    document.querySelector(".imgbox5 img").src = 'images/chopperda.jpeg';
    document.querySelector(".imgbox6 img").src = 'images/binbin.webp';
    document.querySelector(".imgbox7 img").src = 'images/gfranky.jpeg';
    document.querySelector(".imgbox8 img").src = 'images/brook.jpeg';
    document.querySelector(".imgbox9 img").src = 'images/jinbe.jpeg';
 
    const cont = document.getElementById('f');

    const video = document.querySelectorAll('.video');

//     video.forEach( video =>{
//         video.addEventListener("mouseenter", ()=>video.play());
        
//         video.addEventListener("mouseleave", ()=>video.pause())
        
// })
    
    
    const pictures = document.querySelectorAll(".bpic");


    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
                else{
                    entry.target.classList.remove("show")
                }
            
        });
    });

    pictures.forEach( (el) => observer.observe(el));


    const cbox = document.querySelectorAll("#details section");

    const observer2 = new IntersectionObserver( (entries) => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add("ani");
            }
            else{
                entry.target.classList.remove("ani");
            }
        })

    });

    cbox.forEach( (el) => observer2.observe(el));



    // cont.addEventListener("wheel" , (evt)=> {

    //     evt.preventDefault();
    //     cont.scrollLeft += evt.deltaY;
       

    // })


    const log = document.querySelectorAll(".login");

     const observer3 = new IntersectionObserver( (entries) => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add("show3");
            }
            else{
                entry.target.classList.remove("show3");
            }
        })

    });
    
    log.forEach((el)=> observer3.observe(el));
}