if(localStorage.getItem("page_stylesheet_name") != null && document.getElementById("css") != localStorage.getItem("page_stylesheet_name")){
    
    document.getElementById("css").setAttribute("href", localStorage.getItem("page_stylesheet_name"));

}

// function for loading style

function load_style() 
    {
        page_style = localStorage.getItem("page_stylesheet_name");
        if(!page_style) // if page style not found
        {
            page_style = "style.css";
        }
            else if(page_style == "diffStyle.css")
        {
            page_style = "style.css";
        }
            else if(page_style == "style.css")
        {
            page_style = "diffStyle.css";
        }
        document.getElementById("css").setAttribute("href", page_style);
        localStorage.setItem("page_stylesheet_name", page_style);
    }