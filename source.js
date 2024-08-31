@import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC&display=swap');



:root {

    --background-color: #ffffff;

    --overlay-background: rgba(114, 42, 42, 0.5);

    --border-color: #444;

    --text-color: #ffffff;

    --highlight-color: #ffffff;

    --secondary-text-color: #bbb;

    --shadow-color: rgba(255, 255, 255, 0.1);

    --overlay-opacity: 0.5;

    --unit-background-color: rgba(142, 136, 136, 0.5);

}



body {

    background-color: var(--background-color);

    margin: 0;

    font-family: 'Bona Nova SC', Arial, sans-serif;

    color: var(--text-color);

}



#popup-container {

    position: fixed;

    bottom: 30px;

    right: 30px;

    background-color: var(--overlay-background);

    border-radius: 15px;

    padding: 20px;

    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);

    z-index: 1000;

    overflow: hidden;

    max-width: 350px;

    width: auto;

    height: auto;

    box-sizing: border-box;

    text-align: center;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    transform: translateY(-10px);

}



#popup-container:hover {

    transform: translateY(-15px);

    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3);

}



#popup-background {

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 100%;

    background-image: url('בית המקדש.jpg');

    background-size: cover;

    background-position: center;

    mix-blend-mode: overlay;

    opacity: var(--overlay-opacity);

    z-index: 0;

    border-radius: 15px;

    filter: blur(1px);

}



#close-btn {

    position: absolute;

    top: 5px;

    left: 5px;

    background-color: transparent;

    border: none;

    color: var(--text-color);

    font-size: 16px;

    cursor: pointer;

    z-index: 2;

}



#temple-counter {

    position: relative;

    z-index: 1;

}



#temple-counter h2 {

    color: var(--highlight-color);

    font-size: 18px;

    margin-bottom: 10px;

    font-weight: 700;

    line-height: 1.2;

}



.time-unit {

    display: flex;

    justify-content: center;

    align-items: center;

    margin-bottom: 10px;

    flex-direction: row-reverse;

}



.unit {

    display: flex;

    flex-direction: column;

    align-items: center;

    margin: 0 5px;

}



.unit-title {

    font-size: 12px;

    color: var(--secondary-text-color);

    margin-top: 4px;

}



.unit-value-container {

    display: flex;

    flex-direction: row;

    justify-content: center;

    align-items: center;

}



.unit-value {

    display: flex;

    align-items: center;

    justify-content: center;

    border: none;

    padding: 5px;

    border-radius: 6px;

    background-color: var(--unit-background-color);

    font-family: 'Digital-7', Arial, sans-serif;

    font-size: 20px;

    font-weight: 700;

    color: var(--text-color);

    min-width: 20px;

    width: 20px;

    margin: 0 1px;

    height: 30px;

    line-height: 30px;

    text-align: center;

    box-sizing: border-box;

}



.colon {

    font-size: 16px;

    line-height: 30px;

    font-family: 'Digital-7', Arial, sans-serif;

    display: flex;

    align-items: center;

    justify-content: center;

    height: 30px;

    margin: 0 2px;

    position: relative;

    top: -8px;

}



.action {

    font-size: 14px;

    color: var(--highlight-color);

    margin-top: 10px;

    text-transform: uppercase;

    font-weight: 700;

}



@media (max-width: 480px) {

    #popup-container {

        width: 90vw;

        padding: 5px;

        right: 5vw;

    }



    .unit-value {

        font-size: 16px;

        height: auto;

    }



    .colon {

        font-size: 14px;

        line-height: 16px;

    }

}
