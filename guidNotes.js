// npx create-react-app linkedin-clone-yt --template redux
//"firebase" , provided by google for backend.
//  1. Go to firebase click on new project, and enter project name
//  2. open firebase store and then create new database
//  3. open authentication, then go on login, then enabled email,password.
//open linkedin-clone-yt folder in vs code
//Open "App.js"
//Make 'Header' component
//  1. Add material UI for icons, by using npm command give on website, then add icons by using npm.
//  2.
//
//Make all files
//Make firebase folder and file
//  1. open firebase project setting and copy config file and pest in firebas.js
//  2. npm add firebase


//******************real time database on firebase uses******************
// const addPost = async (username, name, description, message, photoUrl)=>{
//     try {
//       const response = await fetch(`${link-firebase-database}/postDB.json`, {
//         method: 'POST',
//         headers:{
//           'content-Type': 'application/json'
//         },
//         body: JSON.stringify({username, name, description, message, photoUrl})
//       });   
//     } 
//     catch(error){
//       console.log(error)
//     }
//   }
// const sendPost = e =>{
//     e.preventDefault();
//     addPost("amanswami51", "aman", "sofware engineer", input)
// }