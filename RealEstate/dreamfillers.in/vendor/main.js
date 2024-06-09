var versionUpdate = (new Date()).getTime();
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://api2.gtftech.com/scripts/queryform.min.ssl.js?v=" + versionUpdate;
document.body.appendChild(script);

function EnqueryQuery(form, data, project_name){
     debugger;
     $.ajax({
          url : BASE_URL+'__ajax.php?action=queryform',
          type: "POST",
          data: data,
          dataType: 'json',
          contentType: false,
          cache: false,
          processData: false,
          success : function(resp){
               var data=JSON.parse(JSON.stringify(resp));
               if(data.status==3){
                    $('.errors').remove();
                    var keys = Object.keys(data.errors);
                    for (let index = 0; index < keys.length; index++) {
                         var keynam=keys[index];
                         $(form).find('.error-'+keynam).after('<p class="errors text-danger">'+data.errors[keynam]+'<p>');
                         if(index==0){
                              $('#'+keynam).focus();
                         }
                    }
                    alert(data.message);

               }else if(data.status==1){
                    var FormInfo = {
                         "SenderControlID": $(form).find('[data_name="query_name"]').val(),
                         "SenderControlMobileID": $(form).find('[data_name="query_phone"]').val(),
                         "SenderControlEmailID": $(form).find('[data_name="query_email"]').val(),
                         "SenderControlMsgID": $(form).find('[data_name="query_msg"]').val()
                    };
               
                    var AgentInfo = {
                         "vAgentID": AGENT_ID,
                         // "vProject": $('.project-logo-modal').html(),
                         "vProject": project_name,
                         "vURL": WEBSITE_URL,
                         "thankspageurl": "",
                    };
          
                    SubmitLeadData(AgentInfo, FormInfo);

                    window.open(
                         BASE_URL+'thanks.php',
                         '_blank'
                    );
                    alert(data.message);
                    window.location.reload();
               }else{
                    window.location.reload();
                    alert(data.message);
               }
          }
     })
}




function ContactQuery(form, data){
     // debugger;
     $.ajax({
          url : BASE_URL+'__ajax.php?action=contactquery',
          type: "POST",
          data: data,
          dataType: 'json',
          contentType: false,
          cache: false,
          processData: false,
          success : function(resp){
               var data=JSON.parse(JSON.stringify(resp));
               if(data.status==3){
                    $('.errors').remove();
                    var keys = Object.keys(data.errors);
                    for (let index = 0; index < keys.length; index++) {
                         var keynam=keys[index];
                         $(form).find($('.error-'+keynam)).after('<p class="errors text-danger">'+data.errors[keynam]+'<p>');
                         if(index==0){
                              $(form).find($('.error-'+keynam)).focus();
                         }
                    }
                    alert(data.message);

               }else if(data.status==1){

                    var FormInfo = {
                         "SenderControlID": $(form).find('[data_name="query_name"]').val(),
                         "SenderControlMobileID": $(form).find('[data_name="query_phone"]').val(),
                         "SenderControlEmailID": $(form).find('[data_name="query_email"]').val(),
                         "SenderControlMsgID": $(form).find('[data_name="query_msg"]').val()
                    };
               
                    var AgentInfo = {
                         "vAgentID": AGENT_ID,
                         "vProject": PROJECT_NAME,
                         "vURL": WEBSITE_URL,
                         "thankspageurl": "",
                    };
          
                    SubmitLeadData(AgentInfo, FormInfo);

                    window.open(
                         BASE_URL+'thanks.php',
                         '_blank'
                    );
                    
                    alert(data.message);
                    window.location.reload();
               
               }else{
                    window.location.reload();
                    alert(data.message);
               }
          }
     })
}


$(document).ready(function(){

     $(document).on('submit', '#platterQueryform', function(e){
          e.preventDefault(0);
         
          var formdata = new FormData(this);
          var project_name = $(this).find(":selected").text();

          EnqueryQuery('#platterQueryform', formdata, project_name);
     });


     $(".openmoalEnquiry").on('click', function(e){
         e.preventDefault(0);
         $("#modalEnquiryform")[0].reset();

         var project_name = $(this).attr('data-project');
         var project_address = $(this).attr('data-address');
         var website_url = $(this).attr('data-url');
         var project_id = $(this).attr('data-id');
         
          

         if(project_name){
              $("#project_name").html(project_name);
         }else{
               $("#project_name").html("DREAM FILLER");
         }

         $("#project_address").html(project_address);
         $("#project_id").val(project_id);
         $("#project_url").val(website_url);      
         
         
         $("#openmodalquery").modal('show');
     });

     $(document).on('submit', '#modalEnquiryform', function(e){
          e.preventDefault(0);
          debugger;
          var formdata = new FormData(this);
          var project_name = $(this).find("#project_name").text();

          EnqueryQuery('#modalEnquiryform', formdata, project_name);               
     });
     
     
     $(document).on('submit', '#microQueryform', function(e){
          e.preventDefault(0);
     
          var formdata = new FormData(this);
          var project_name = $(this).find("#project_name").val();
          EnqueryQuery('#microQueryform', formdata, project_name);
     });
});











// footer contact form

$(document).on('submit', '#contactQueryForm', function(e){
     e.preventDefault(0);
     var data = new FormData(this);

     ContactQuery('#contactQueryForm', data);
});
