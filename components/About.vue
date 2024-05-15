<template >
    <section class="about-me-section" id="about">
        
            
            <div class="about-me-text">
                <h1>My journey</h1>
                <p>I started programming because I wanted to build using the new LLM's. I could see that they would change the way we interacted with technology. My idea was to build a website that generates recipes using ChatGPT. It goes without saying that this is a monumental task for someone who does not know how to code.</p><br/>

                <p>So Gourmai was born. (gourmai.co.uk) I spent months working every spare hour I could in order to get each iteration out. Adding features, then removing them, then rewriting the old stupid code I had written and so on. I rebuilt it maybe 3 times before even publishing it. At this point I'd had interactions with many technologies such as python flask, databases, API's and of course the front end side like HTML, CSS and JavaScript.</p><br/>

                <p>After pouring many months into this project people were starting to ask for a mobile app. Which to that point I had been putting off because I thought I would have to take on yet another programming language. Then I found cordova (phonegap). </p><br/>

                <p>The mobile app was of course mainly built using JavaScript but I diddnt yet know any frameworks so I built it in Vanilla. I built myself the functionality of SPA's and components to make the app feel like a native app. I diddn't know this was common place using frontend framewoks.</p><br/>

                <p>Anyways, by this point I knew I wanted to develop software full time. So now I am writing mock pages in hopes of landing a junior position so I can learn faster.</p>
            </div>
            


            <div class="skills"> 
                <h1>Some things I work with:</h1>
                <ul class="tabs-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Vue.js</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>postGresDB</li>
                    <li>sqlite</li>
                    <li>Herkou</li>
                    <li>SEO</li>
                    <li>Cordova Mobile</li>
                </ul>
            </div>
            
                
    </section>
</template>

<script setup>

</script>

<style scoped>

.about-me-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    width: 100%;

    box-sizing: border-box;
    color: #fff;
}

.about-me-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}

.about-me-text h1 {
    margin-bottom: 20px;
    font-size: 2.2rem;
    font-weight: 400;
}

.about-me-text p {
    font-weight: 100;
}


.skills {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 50px 0;
}

.skills h1 {
    margin-bottom: 20px;
    font-size: 2.2rem;
    font-weight: 400;
}

.tabs-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
}

.tabs-list li {
    padding: 15px 20px;
    outline: 1px solid #fff;
    border-radius: 10px;
    margin: 10px 5px;
    cursor: pointer;
    box-shadow: 4px 4px 10px black;
    user-select: none;
    font-weight: 400;
    transition: transform 0.2s, box-shadow 0.3s;
   
}

.tabs-list li:hover {
    box-shadow: 2px 2px 15px lightblue;
    transform: translate(0px, -4px);
}
</style>