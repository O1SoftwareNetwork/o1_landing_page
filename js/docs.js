/*****************************************************************************************
************************************* DOCUMENTATION **************************************
******************************************************************************************/

document.querySelectorAll("aside h3").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        const page = event.target.getAttribute("data-page");

        if (!page) {
            console.error("No data-page attribute found!");
            return;
        }

        console.log(`Fetching: ${page}`); // Debugging step

        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById("get-involved__section").innerHTML = data;
            
                history.pushState({ page }, "", "docs.html");
            })
            .catch(error => console.error("Error Loading Page: ", error));
    });
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page) {
        fetch(event.state.page)
            .then(response => response.text())
            .then(data => {
                document.getElementById("get-involved__section").innerHTML = data;
            })
            .catch(error => console.error("Error Loading Page: error"));
    }
});