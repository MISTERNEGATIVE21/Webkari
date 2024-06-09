function imageValidation(file){
	$(file).next('.errors').remove();
	var fileName=file.value; 
	var idxDot = fileName.lastIndexOf(".") + 1;
	var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  
     if (extFile=="pdf" || extFile=="rtf" || extFile=="txt" || extFile=="docs" || extFile=="docx"){
          
     }else{
          alert("Onlye Allowed (pdf, rtf, txt, docs, docx)"); file.value="";
          $(file).after('<p class="errors text-danger">Invalid File allowed (pdf, rtf, txt, docs, docx)</p>');
     }


     const fileSize = file.files[0].size / 2048 / 1024; 
     if(fileSize > 2)
     {
          alert("File size should be less than 2 MB"); file.value="";
          $(file).after('<p class="errors text-danger">File size should be less than 2 MB</p>');
     
     }
}