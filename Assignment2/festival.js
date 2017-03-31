  function toggleMenu(id){
    if (document.getElementById(id).style.display=="block"){
      document.getElementById(id).style.display="none";
    }else{
      document.getElementById(id).style.display="block";
    }
  }
  // Closes down menus when a user interacts with other things on the page
  // info, dir... are the id names of the dropdown ULs. Change them if yours are different and add more as needed.
  var boxArray = ['info','entertainment','media'];
  window.addEventListener('mouseup', function(event){
    for(var i=0; i < boxArray.length; i++){
      var box = document.getElementById(boxArray[i]);
      if(event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
      }
    }
  });
