<template>
    <section id="projects">

        <header>
            <h1>Heres some things I have built:</h1>
        </header>

        <div class="projects-container">
            <h2>Websites</h2>
            <ul>
                
                <li class="zeplin-architecture">
                    <a href="https://cody-wakeford-website1-4a50ac368339.herokuapp.com/"  target="_blank">
                        <p>Zeplin Architecture</p>
                        <span>View Project</span>
                    </a>
                </li>

                <li class="software-website">
                    <a href="https://cody-wakeford-software-website-965b7e042708.herokuapp.com/"  target="_blank">
                        <p>Software Website</p>
                        <span>View Project</span>
                    </a>
                </li>
                
                <li class="gourmai">
                    <a href="https://gourmai.co.uk"  target="_blank">
                        <p>Gourmai</p>
                        <span>View Project</span>
                    </a>
                </li>
                
            </ul>
        </div>

        <!-- <div class="projects-container">
            <h2>Landing Pages</h2>
            <ul>
                
                    <li class="gourmai">
                        <a href=""  target="_blank">
                            <p>Gourmai</p>
                            <span>View Project</span>
                        </a>
                    </li>
                
            </ul>
        </div>

        <div class="projects-container">
            <h2>Apps</h2>
            <ul>
                <li class="gourmai">
                    <a href=""  target="_blank">
                        <p>Gourmai</p>
                        <span>View Project</span>
                    </a>
                </li>
            </ul>
        </div> -->

    </section>
</template>

<script setup>

</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;

        
        padding-top: 0;
        padding-bottom: 100px;
    }
    
    .projects-container {
        
        text-align: left;
    }
    .projects-container ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        position: relative;
    }
    .projects-container ul li {
        display: flex;
        align-items: center;
        justify-content: center; 

        border: 1px solid #fff;
        list-style-type: none;
        text-decoration: none;
        

        height: 150px;
        width: 250px;

        padding: 15px 20px;
    
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 4px 4px 10px black;
        user-select: none;
        font-weight: 400;
        transition: box-shadow 0.2s;
    }
    .projects-container ul li:hover {
    box-shadow: -2px -2px 5px lightblue, /* Top-left */
                2px -2px 5px lightblue,  /* Top-right */
                -2px 2px 5px lightblue,  /* Bottom-left */
                2px 2px 5px lightblue;   /* Bottom-right */
    }

    .projects-container ul p {
        position: absolute;
        bottom: 10px;
        right: 15px;
        font-size: 1.5rem;
        z-index: 2;
    }
    
    .projects-container li {
        position: relative;
        overflow: hidden;
    }

    .projects-container li::before {
        content: "";
        position: absolute;
        top: 50%; 
        left: 20%;
        width: 175px; 
        height: 150px; 
        background-size: cover;
        background-position: center;
        transform: translate(-50%, -50%) rotate(-25deg); 
        transform-origin: center; /* Ensures the rotation happens at the center */
        z-index: 1;
    }

    .zeplin-architecture::before {
        background-image: url('../assets/zeplin-logo.png')
    }

    .software-website::before {
        background-image: url('../assets/cyan-logo2.png')
    }

    .gourmai::before {
        background-image: url('../assets/gourman.png');
    }

    .projects-container span {
        position: relative;
        line-height: 150px; /* Vertical alignment */
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
        font-size: 16px;
        z-index: 5; /* Ensure text is above overlay */
        pointer-events: none;
    }
    .projects-container a::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 2;
       
    }
    .projects-container a:hover::after {
        opacity: 1; 
    }
    .projects-container li:hover::after, .projects-container li:hover span {
        opacity: 1; 
    }
</style>