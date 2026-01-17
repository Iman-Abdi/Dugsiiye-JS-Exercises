function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const success = false;

            if (success){
                resolve ({ id: 1, name: "Iman" });
            }else{
                reject ("Unable to fetch user data");
            }
        }, 3000 )
    })
}

fetchUserData()
    .then((data) => console.log("User Data ", data))
    .catch((err) => console.log(err))