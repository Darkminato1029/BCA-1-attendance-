document.getElementById('studentForm').addEventListener('submit',function(event){
    event.preventDefault();
    const formData=new FormData(this);
    const presentStudents = formData.getAll('students');
    if (presentStudents.length>0)
     {
        const message=`presentStudents:\n${presentStudents.join('\n') }`;
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
