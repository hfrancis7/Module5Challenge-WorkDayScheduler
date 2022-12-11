$(function () {
  //variable declarations
  let curDateEl = $("#currentDay");
  let saveBtnEl = $(".saveBtn");
  let container = $(".container-lg");
  let now = dayjs();
  
  //save function linked to clicking save button
  saveBtnEl.click(save);
  
  //load page on refresh
  load();
  
  //loads all elements needed on page on refresh, starts interval
  function load(){
    //applies the classes and displays the time immediately before interval starts
    applyClasses();
    displayTime();  

    setInterval(function(){ //display time every second and updates display classes
        now = dayjs(); 
        applyClasses();
        displayTime();
      }, 1000);
      
    //cycles through local storage and sets the textarea values to the previous saved values
    Object.keys(localStorage).forEach((key) => {
        let keyStr = "#" + key;
        let item = localStorage.getItem(key);
        $(keyStr).children("textarea").val(item);
    })

  }

  //function that displays time on page
  function displayTime() {
    let nowText = now.format('MMM DD, YYYY [at] hh:mm:ss a');
    curDateEl.text(nowText);
  }

  //saves the current textarea value that the button is associated with to local storage
  function save(){
    let input = $(this).siblings("textarea").val();
    let id = $(this).parent().attr("id");
    localStorage.setItem(id, input);
  }

  //applies the classes past, present, and future based on the current hour
  function applyClasses(){
    let offset = 9;
    let hour = now.hour();

    container.children().each(function(){
      if(offset < hour){
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past")
      }else if(offset == hour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present")
      }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future")
      }
      offset++;
    });
  }

});
