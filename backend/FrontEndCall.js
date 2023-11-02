const getPosts = async (username)=>{
    try {
        const response = await fetch('http://localhost:5000/api/post/fetchallPosts', {
                method: 'POST',
                headers:{
                  'content-Type': 'application/json'
                },
                body: JSON.stringify({username})
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

getPosts("amanswami51").then((a)=>{
    console.log(a);
});