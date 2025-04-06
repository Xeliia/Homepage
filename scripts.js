window.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();

    let greetingText;
    if (hour < 12)
    {
        greetingText = "Good morning,";
    }
    else if (hour < 18)
    {
         greetingText = "Good afternoon,";
    }
    else
    {
        greetingText = "Good evening,";
    }

    greetingElement.textContent = greetingText + " " + greetingElement.textContent;
});
