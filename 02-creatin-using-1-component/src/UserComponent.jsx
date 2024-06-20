function Person(){
    return(
        <>
        <h1>This is person component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis voluptas iusto sed incidunt nostrum nam. Fugiat, voluptas. Est, nostrum.</p>
        </>
    )
}
function MyName(){
    return(
        <h2>My name is Binay</h2>
    )
}
function UserComponent(){
    return(
        <>
        <Person/>
        <MyName/>
        </>
    )
}
export default UserComponent;