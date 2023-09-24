
    const userInput = document.getElementById("input");
    const fetchUser = document.getElementById("fetch");
    const userTable = document.getElementById("UserTable");

    
    
    fetchUser.addEventListener('click', () =>{
        const inputId = userInput.value;
        const url = "https://jsonplaceholder.typicode.com/users/" + inputId;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.id){
                console.log("user data: ", data);
             
                    const newRow = userTable.insertRow();
                    const nameCell = newRow.insertCell(0);
                    const phoneCell = newRow.insertCell(1);
                
                    nameCell.textContent = data.name;
                    phoneCell.textContent = data.phone;
                } else console.error("Requested user does not exist")
                
            }) 
            .catch((error) =>{
                console.error("Error fecthing data: " + error)
            })

        })

        const fetchAll = document.getElementById("fetchAll");

        fetchAll.addEventListener('click', () => {
            const url = "https://jsonplaceholder.typicode.com/users/";
        
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // Check if data is an array (list of users)
                    if (Array.isArray(data)) {
                        console.log("All users: ", data);
                        // Clear the existing table content
                        userTable.innerHTML = '';
        
                        // Loop through the array and add each user to the table
                        data.forEach(user => {
                            const newRow = userTable.insertRow();
                            const nameCell = newRow.insertCell(0);
                            const phoneCell = newRow.insertCell(1);
        
                            nameCell.textContent = user.name;
                            phoneCell.textContent = user.phone;
                        });
                    } else {
                         console.error("Requested user does not exist") 
                }   
                    
                }) 
                .catch((error) =>{
                    console.error("Error fecthing data: " + error)
                })
    
            })
