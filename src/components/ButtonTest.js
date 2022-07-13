import React from "react";
const ButtonTest = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Отправлена форма.");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default ButtonTest;
