import React from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        {({title, subTitle, click}) => (
            <div>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
        )}
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class ContextTest extends React.Component {
    render() {
        return (
            <div>
                <TitleContext.Provider value = {{title: "Simple title", subTitle: "Sub Title", click: () => {alert("Hello!")}}}>
                    <LevelOne />
                </TitleContext.Provider>
            </div>
        )
    }
}

export default ContextTest;