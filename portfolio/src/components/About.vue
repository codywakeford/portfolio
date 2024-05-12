<template >
    <section class="about-me-section">
        <div class="block"></div>
        <div id="about" class="about-me-content ">
            <h2>About Me</h2>
            <div class="two-cols">
                <p>I have been building web applications of all kinds for 5 years now. I specialize in interactive websites such as database or LLM wrappers. I have built things from mobile apps to extensive websites with thousands of users. Over the years I have picked up many skills that allow me to work quickly and effectivly on any idea. Now, I can bring any idea to life.</p>

                <div>
                    <h3>Skills:</h3>
                    <ul class="tabs-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Vue.js</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>postGresDB</li>
                        <li>Hosting</li>
                        <li>SEO</li>
                        <li>Cordova Mobile</li>
                    </ul>
                </div>
            </div>
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
    align-items: center;
   
    width: 100%;

    box-sizing: border-box;
    color: #fff;   
}

.two-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
}


.about-me-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    padding: 30px 50px;
    min-width: 500px;;
    max-width: 1000px;
    background-color: var(--background-secondary);
    z-index: 100;
}

.about-me-content h2 {
    font-weight: bold;
    margin: 0;
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
    padding: 5px 15px;
    outline: 1px solid #fff;
    border-radius: 5px;
    margin: 5px 5px;
    cursor: pointer;
    box-shadow: 4px 4px 10px black;
    user-select: none
}

.tabs-list li:active {
    transform: translate(2px, 2px);
} 
.tabs-list li:hover{
    transform: translate(0px, -2px);
}
</style>