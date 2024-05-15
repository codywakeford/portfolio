<template >
    <section class="about-me-section" id="about">
        
            
            <div class="about-me-text">
                <h1>My journey</h1>

                <h2>From Curiosity to Passion: A Web Developer's Story</h2>
                <p>Welcome to my portfolio! My journey into web development began with a simple curiosity about how websites work. This initial interest quickly grew into a passion as I explored the dynamic interplay of design and functionality that defines the digital landscape.</p><br/>

                <h2>Crafting the Digital Experience</h2>
                <p>Starting with HTML and CSS, I was fascinated by how these fundamental technologies could shape the visual structure of a website. As I progressed, I mastered JavaScript, allowing me to add interactivity and bring static pages to life. The discovery of Vue.js further transformed my approach, enabling me to build sophisticated, responsive web applications with ease.</p><br/>

                <h2>Comprehensive Skill Set</h2>
                <p>Over the years, I've expanded my expertise to include Python and Flask, equipping me to handle both front-end and back-end development. This full-stack capability ensures that I can create robust, end-to-end web solutions tailored to your needs. My proficiency in these technologies means I can deliver seamless, high-quality user experiences that meet and exceed client expectations.</p><br/>

                <h2>Real-World Experience</h2>
                <p>I’ve had the privilege of working on a variety of projects, each enhancing my skills and broadening my perspective. From developing sleek, modern websites for small businesses to creating complex web applications, I’ve consistently delivered projects on time and within budget. My portfolio reflects a diverse array of successful projects, underscoring my adaptability and commitment to excellence.</p><br/>

                <h2>Quality and Reliability</h2>
                <p>When you work with me, you’re not just getting a developer—you’re gaining a dedicated partner committed to your success. I pride myself on writing clean, efficient code and paying meticulous attention to detail. My goal is to create websites that are not only functional and visually appealing but also optimized for performance and scalability.</p>
            </div>
            

            <div class="why-me-text">
                <h1>Why Choose Me?</h1>
                <ul>
                    <li>
                        <strong>Proven Expertise:</strong> My technical skills and experience ensure that your project is in capable hands.
                    </li>
                    <li>
                        <strong>Client-Centric Approach:</strong> I prioritize your vision and requirements, ensuring the final product aligns perfectly with your goals.
                    </li>
                    <li>
                        <strong>Commitment to Excellence:</strong> I strive for the highest standards in every project, delivering websites that are polished, professional, and user-friendly.
                    </li>
                    <li>
                        <strong>Reliable Delivery:</strong> You can count on me to meet deadlines and provide ongoing support as needed.
                    </li>
                </ul>
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
.why-me-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}
.about-me-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}

.about-me-text h1 {
    margin-bottom: 30px;
    font-size: 2.2rem;
    font-weight: 400;
}

h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 400;
}

.about-me-text p {
    font-weight: 100;
    margin-bottom: 25px;
}

.why-me-text ul {
    display: flex;
    flex-direction: column;
    gap: 25px;

    text-align: left;
    font-size: 1.5rem;
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