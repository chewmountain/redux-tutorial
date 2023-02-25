import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



// Чтобы создать store (хранилище наших state состояний) мы импортируем
// функцию configureStore.
import { configureStore } from "@reduxjs/toolkit";

// Чтобы передать данные наших состояний, нужен Provider
// его тоже импортируем
import { Provider } from 'react-redux';

// Импортируем наш reducer (см. файл user.js)
import userReducer from "./features/user";

// [P. 3] ... CHANGE THEME COLOR
import themeReducer from "./features/theme";


// Создаем store, где в качестве аргумента передаем объект
// Когда мы создадим свой первый reducer, мы его добавим в свойство reducer в качестве объекта
const store = configureStore({
  reducer: {
    user: userReducer,
    // [Ч. 3] ... у нас может быть несколько reducer'ов в нашем приложении, которые
    // отвечают за разные state. Сделаем, например, кнопку, которая будет менять цвет текста всего нашего приложения:
    theme: themeReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Чтобы наше приложение могло получать данные
    в любых своих компонентах, мы используем Provider и
    туда в качестве props передаем наш созданный store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
