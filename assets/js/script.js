$(function () {
  let curDateEl = $("#currentDay");
  let saveBtnEl = $(".saveBtn");
  let container = $(".container-lg");

  saveBtnEl.click(save);

  let now = dayjs();
  applyClasses();
  displayTime();

setInterval(function(){
    now = dayjs();
    applyClasses();
    displayTime();
  }, 1000);

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  function displayTime() {
    let nowText = now.format('MMM DD, YYYY [at] hh:mm:ss a');
    curDateEl.text(nowText);
  }

  function save(){
    let input = $(this).siblings("textArea").val();
    let id = $(this).parent().attr("id");

    localStorage.setItem(id, input);
    
  }

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
