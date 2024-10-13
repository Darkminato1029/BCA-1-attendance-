document.getElementById('studentForm').addEventListener('submit',function(event){
    event.preventDefault();
    const formData=new FormData(this);
    const presentStudents = formData.getAll('students');
    if (presentStudents.length>0)
     {
        const currentDate= new Date();
     const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
         
        const message=`Date: ${formattedDate}\n\n presentStudents:\n\n${presentStudents.join('\n') }`;
        const botToken='7593207317:AAGgSCeALmDxCzNFrDnffQNvNt5UDUMi1Ac';
        const chatId='-1002447918965';
        const url=`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        fetch(url)
        .then(response=>{
            if (response.ok) {
                alert('Data sent to telegram!'); } 
                else { alert('error data sending to telegram');
                }
              })
        .catch(error=>{
            alert('Error:'+ error);
        });
    }
    else{
        alert('please select at least one student');
    }
});
