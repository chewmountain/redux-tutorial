// Чтобы можно было получить state (accesing our states) из нашего reducer'а,
// мы используем хук библиотеки react-redux -> useSelector
import { useSelector } from "react-redux";

const Profile = () => {
    // Создаем с помощью этого хука переменную,
    // где передаем в качестве аргумента функцию, которая 
    // принимает state, а далее возвращаем наше изначальный state:
    // state.названиеРедюсера.изначальноеЗначение
    const user = useSelector(state => state.user.value)

    // [P. 3] ... change color theme
    const themeColor = useSelector(state => state.theme.value);
    return (
        <div style={{ color: themeColor }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;