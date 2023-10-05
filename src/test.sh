#!/bin/bash

### chmod +x test.sh
### ./test.sh

npm install styled-components @reduxjs/toolkit react-redux redux-saga firebase redux-persist 
npm install react-router-dom localforage match-sorter sort-by
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

mkdir assets assets/img api api/firebase
touch api/index.js api/firebase/firebaseApi.js

mkdir routes routes/professionals routes/services routes/availability
touch routes/professionals/professionals.component.jsx routes/services/services.component.jsx routes/availability/availability.component.jsx 

mkdir components components/header components/main components/footer
mkdir components/main/content components/main/cart 

touch components/main/main.component.jsx components/main/main.styles.jsx
touch components/header/header.component.jsx components/header/header.styles.jsx
touch components/footer/footer.component.jsx components/footer/footer.styles.jsx

touch components/main/content/content.component.jsx components/main/content/content.styles.jsx
touch components/main/cart/cart.component.jsx components/main/cart/cart.styles.jsx

mkdir components/main/content/professional-card
touch components/main/content/professional-card/professional-card.component.jsx
touch components/main/content/professional-card/professional-card.styles.jsx

mkdir components/main/content/service-list
touch components/main/content/professional-list/professional-list.component.jsx
touch components/main/content/professional-list/professional-list.styles.jsx

mkdir components/main/content/service-card
touch components/main/content/service-card/service-card.component.jsx
touch components/main/content/service-card/service-card.styles.jsx

mkdir components/main/content/generic-card
touch components/main/content/generic-card/generic-card.component.jsx
touch components/main/content/generic-card/generic-card.styles.jsx

mkdir redux features features/professionals features/services features/cart config utils styles 

touch redux/rootReducer.js redux/rootSaga.js redux/store.js

touch features/professionals/professionalsSaga.js features/professionals/professionalsSlice.js 
touch features/services/servicesSaga.js features/services/servicesSlice.js 
touch features/cart/cartSlice.js 


touch config/ firebase.js utils/firebase.js styles/globalStyles.js