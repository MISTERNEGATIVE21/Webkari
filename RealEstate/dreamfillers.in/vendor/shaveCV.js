$(document).ready(function(){
     $(".openCVmodal").on('click', function(e){
          e.preventDefault(0);
     
          var jobId = $(this).attr('data-id');
          var jobName = $(this).attr('data-project');
     
          $("#title").html(jobName);
          $("#job_id").val(jobId);
     
          $("#CVModal").modal('show');
     });
});


$(document).on('submit', '#sharecv', function(e){

     e.preventDefault();
     var formData = new FormData(this);

     $.ajax({
          url:'__ajax.php?action=add_sharecv_form',
          type:'POST',
          data: formData,
          enctype: 'multipart/form-data',
          cache: false,
          contentType: false,
          processData: false,
          success:function(res){
               var data=JSON.parse(res);
               if(data.status==3){
                    $('.errors').remove()
                    var keys = Object.keys(data.errors)
                    for (index = 0; index < keys.length; index++){
                         var keyname = keys[index]
                         console.log(keyname)
                         $('#'+keyname).after('<div class="errors text-danger">'+data.errors[keyname]+'<div>');
                         if(index==0){
                         $('#'+keyname).focus();
                         }
                    }

               } else if(data.status==1){
                    alert(data.message);
                    // window.location.href="thanks.php";
                    window.location.reload();
               
               }else{
                    alert(data.message);
                    window.location.reload();
                    
               }

          }
     })
})