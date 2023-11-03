# Linkedin --clone, created by using `React js` and `Redux toolkit` and `CSS` and `Firebase`

## Steps for Running this code in your leptop
step1 : Create project directory, then open created directory in vs code.

stpe2 : Then, Open new terminal in vs code and paste [  `git clone https://github.com/amanswami51/Linkedin-clone.git`  ].

step3 : Then, run [ `npm i` ] command in vs code terminal for installing dependencies.

step4 : Then run this command [ `npm start`  ] in terminal for the development mode.

Then open browser and run this link `http://localhost:3000` to view it in your browser.\
Then page looks like, First Register for proceeding and Signed in the existing account.
<img width="914" alt="Screenshot 2023-11-03 020726" src="https://github.com/amanswami51/Linkedin-clone/assets/126395625/c740c512-cc0c-449c-b3d5-72585626e3c0">

After authentication
<img width="933" alt="Screenshot 2023-11-03 014920" src="https://github.com/amanswami51/Linkedin-clone/assets/126395625/bb75e79b-c78e-4069-87ee-b8be2ef8cc62">



## Steps for hosting on firebase
step1: search `firebase console` and create the account

step2: Then add project on firebase\
<img width="295" alt="Screenshot 2023-11-03 023321" src="https://github.com/amanswami51/Linkedin-clone/assets/126395625/fde69ca2-f7b5-4f48-a23b-a425240cca2b">
<img width="344" alt="Screenshot 2023-11-03 023747" src="https://github.com/amanswami51/Linkedin-clone/assets/126395625/bfe83a69-25e5-43c1-80c6-4dc96195e5a9">

step3: Then click on `build`(left-top side), and select `hosting`
<img width="549" alt="Screenshot 2023-11-03 024100" src="https://github.com/amanswami51/Linkedin-clone/assets/126395625/ec9e199a-bbcb-4449-ba59-a9fe67c3d80e">

step4: Then click on `get started`

step5: open terminal of vs code in project directory and paste `npm install -g firebase-tools`.

step6: after step5, paste `firebase login` in terminal.

step7: after login, paste `firebase init` in terminal. Then console asked some questions.\
`questions1` Are you ready to proceed? (Y/n) `Answer` Y \
`questions2` >( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys `Answer` press [spacebar] button then press [Enter] button of keyboard. \
`questions3` ? Please select an option: `Answer` Use arrow keys and select [ > Use an existing project ] and press Enter. Then select [ linkedin-clon-95b09 (Linkedin-clon) ] project. \
`questions4` ? What do you want to use as your public directory? `Answer` build \
`questions5` ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `Answer` Y \
`question6` ? Set up automatic builds and deploys with GitHub? (y/N) `Answer` N 

step8: Then, `npm run build` enter this command in console.

step9: Then, `firebase deploy` enter this command in console.


## Learn More About React Js

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Redux toolkit, check out the [Redux toolkit documentation](https://redux-toolkit.js.org/)

