<template>
    <section id="projects">

        <header>
            <h1>Heres some things I have built:</h1>
        </header>

        <div class="projects-container">
            <h2>Websites</h2>
            <ul>
                <li>Smash Burger</li>
                <li>Software Website</li>
                
                
                <li class="gourmai">
                    <a href="https://gourmai.co.uk"  target="_blank">
                        <p>Gourmai</p>
                        <span>View Project</span>
                    </a>
                </li>
                
            </ul>
        </div>

        <div class="projects-container">
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
        </div>

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
    }
    .projects-container ul li:hover {
        box-shadow: 2px 2px 10px lightblue;
        
    }

    .projects-container ul p {
        position: absolute;
        bottom: 10px;
        right: 15px;
        font-size: 1.5rem;
    }
    
    .gourmai {
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
    }
    .gourmai::before {

        background-image: url('../assets/gourman.png');

    }
    .projects-container span {
        
        line-height: 150px; /* Vertical alignment */
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
        font-size: 16px;
        z-index: 3; /* Ensure text is above overlay */
        pointer-events: none;
    }
    .projects-container a::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
        opacity: 0; /* Hide initially */
        transition: opacity 0.3s ease-in-out;
        z-index: 2; /* Above the image, below the text */
    }
    .gourmai:hover::after {
        opacity: 1; 
    }
    .gourmai:hover::after, .gourmai:hover span {
        opacity: 1; /* Show overlay and text on hover */
    }
</style>