import {useLocation} from "react-router-dom";
import React from "react";

const NotFound404 = () => {
    let {pathname} = useLocation()
    return (
        <div>
            <h1>
                Чпоньк и нет страницы! 404 error {pathname}
            </h1>
        </div>
    )
}

export default NotFound404