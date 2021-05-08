function setdate(){
    document.getElementById("date").innerHTML=new Date().toDateString();
    date = new Date().toDateString();
    console.log(date);
    get_data();
}


function save(){
    notes = document.getElementById("note").value;
    localStorage.setItem("date",date);
    localStorage.setItem(date,notes);
    get_data();
    
}

function get_data(){
    
    date_written = localStorage.getItem("date");
    notes_taken = localStorage.getItem(date);

    name_with_tag = "<h4> "+date_written+"</h4>";
    message_with_tag = "<h4 class='message_h4'> "+notes_taken+" </h4><hr>";

    row= name_with_tag+message_with_tag;
    document.getElementById("output").innerHTML +=row;
    document.getElementById("note").value="";
}  