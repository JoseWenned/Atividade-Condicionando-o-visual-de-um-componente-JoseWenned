import style from "./style.module.scss"

export const UserCard = ({ isName, isEmail, isStatus }) => {
    return(
        <div className={`${style.usercard} ${isStatus ? style.active : ""}`}> 
            <h1>{isName}</h1>
            <p>{isEmail}</p>
        </div>
    )
}