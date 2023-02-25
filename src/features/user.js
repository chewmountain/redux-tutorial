// Чтобы создать reducer мы используем библиотеку redux toolkit
// В одном месте мы можем сразу указать и имя reducer,
// и изначальное состояние initialState, 
// и actions (в объекте reducers), с помощью которых мы сможем менять наши состояния

// Для этого импортируем функцию createSlice
import { createSlice } from "@reduxjs/toolkit";

// ... [Ч. 2] сначала login, а после login см. функцию logout: тут создаем изначальное состояние, чтобы можно было удобно
// использовать переменную
const initialStateValue = {name: "", age: 0, email: ""};

// Создаем переменную со смежным названием и в конце добавляем "...Slice".
// С помощью createSlice создаем редюсер
export const userSlice = createSlice({
    // Даем имя редюсеру
    name: "user",
    // Указываем изначальное состояние
    // Если бы у нас был какой-нибудь простой счетчик, то указали бы
    // что-то наподобие: initialState: { count: 0 }
    initialState: { value: initialStateValue },
    // Создаем action's (акшены / экшены) с помощью которых
    // будем менять наше состояние.
    // state -> наше изначальное состояние;
    // acition действие, которое мы будем совершать и менять состояние,
    // т.е. оно должно что-то возвращать,
    // здесь payload -> как "полезная нагрузка" = аргумент -> функция
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        // Если бы у нас был простой счетчик, то action счетчика могли бы выглядеть так:
        // increment: state => {
            // state.count += 1;
        // },
        // decrement: state => {
            // state.count -= 1;
        // },
        // incrementByAmount: (state, action) => {
            // state.count += action.payload;
        // }
        // Здесь в качетсве action.payload мы бы передавали какое-либо число, которое указали бы
        // в качестве аргумента
        // [Ч. 2] а теперь сделаем acion логаута. Просто обнуляем state до исходного
        logout: state => {
            state.value = initialStateValue;
        },
    },
});

// Экспортируем action в качестве констант, чтобы можно было их дальше использовать
// в приложении.
export const { login, logout } = userSlice.actions;
// Если бы это был счетчик, то выглядело бы это примерно так:
// export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Чтобы передать наш reducer в наш store его нужно экспортировать,
// но именно reducer -> название.reducer
export default userSlice.reducer;
// Если бы это был счетчик, то выглядело бы это примерно так:
// export default counterSlice.reducer;

// Теперь мы имеем доступ к нашему state и actions в любой части нашего приложения