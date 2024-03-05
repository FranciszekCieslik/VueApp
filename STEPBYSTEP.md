mkdir app
npm install -g @vue/cli
vue create client
cd client
npm install bootstrap-vue bootstrap axios vue-i18n

npm run serve

cd ..

npm install -g express-generator
npm install -g nodemon
express server
cd server
npm install express body-parser cors helmet mongodb passport 

//in package.json

"scripts": {
    "start": "nodemon server.js"
}

npm start