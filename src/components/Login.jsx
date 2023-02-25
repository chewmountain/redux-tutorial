// Чтобы мы могли модифицировать наш state, мы используем
// useDispatch хук из библиотеки react-redux.
import { useDispatch } from "react-redux";

// Импортируем наш action, чтобы его можно было передать в dispatch
import { login, logout } from "../features/user";

const Login = () => {
    // Создаем dispatch (отправщик / модификатор), с помощью которого будем менять наш state
    const dispatch = useDispatch()
    return (
        <div>
            {/* Навешиваем на кнопнку событие по нажатию
            вызываем dispatch и внутрь него передаем наш action.
            Так мы будем модифицировать наш state. 
            
            Если бы это был обычный счетчик и эта кнопка была бы инкрементом, то далее 
            в этот action мы бы ничего не передавали, т.к. уже в редюсере написали простую функцию:
            <button onClick={() => dispatch(increment())}>Прибавить</button>
            
            Но, т.к. в нашем случае мы указали action.payload (полезная нагрузка),
            то мы передаем данные, которые будем менять.
            В этом случае для простоты жестко (захард кодим) укажем какие данные будем устанавливать.
            
            Иначе можно было бы получать данные из инпутов, записывать их в state компонента и передавать
            в качестве переменных в наш reducer.
            
            И по нажатию мы передаем эти данные в reducer и он далее модифицирует и передает
            модифицированный state в наш store.*/}
            <button onClick={() => {
                dispatch(login({ name: "Maxim", age: 25, email: "maxim@gmail.org" }))
            }}>Login</button>

            {/* [Ч. 2] А теперь добавим кнопку логаута.
            Т.к. action logout у нас не содержит payload (полезной нагрузки), то
            и в него ничего не передаем */}
            <button onClick={() => {
                dispatch(logout());
            }}>LOGOUT</button>
        </div>
    );
};

export default Login;