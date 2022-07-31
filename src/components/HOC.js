import React from "react";
const products = [
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Audi Q5 гармонично сочетает в себе изысканный стиль, настоящую универсальность, великолепную динамику и высокую функциональность.",
        id: 12,
        price: "4.500.000",
        img: "https://www.topspeed.sk/userfiles/articles/30-06/17955/gallery/crop_640_480_audi_q5_topspeed.sk-043.jpg",
        style: "Черный",
        title: "Audi Q5",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Автомобили M BMW 4 серии Coupe впечатляющим образом сочетают в себе эстетическую привлекательность, харизму и фирменный спортивный стиль M. Возглавляет трио BMW M4 Competition Coupe с впечатляющими 510 л.с. мощности и 650 Нм крутящего момента. ",
        id: 13,
        price: "9.000.000",
        img: "https://i.pinimg.com/736x/94/75/ab/9475ab87ac6e1c51cac64fc1622ba322.jpg",
        style: "Желтый",
        title: "BMW M4",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Range Rover Velar — это компактный кроссовер сегмента «люкс», производства британской автомобильной компании Jaguar Land Rover.",
        id: 14,
        price: "5.000.000",
        img: "http://www.shopcar.ru/images_newcars/Land%20Rover-Land%20Rover%20Range%20Rover%20Velar/0.jpg",
        style: "Серый",
        title: "RANGE ROVER VELAR",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "BMW X3 — люксовый компактный кроссовер немецкой компании BMW. X3 первого поколения разработан и выпускался совместно с компанией Magna Steyr на заводе в Граце, Австрия.",
        id: 15,
        price: "3.500.000",
        img: "https://cdn.izap24.ru/images/marka/bmw/x3_m/48895_bmw-x3_m_big.jpg",
        style: "Любой",
        title: "BMW X3",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Tesla Model S — пятидверный электромобиль производства американской компании Tesla.",
        id: 11,
        price: "5.500.000",
        img: "https://cdn.izap24.ru/images/marka/tesla/model_s/9084_tesla-model_s_big.jpg",
        style: "Белый",
        title: "Tesla Model S",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Toyota Supra воплощает в себе всю мощь, всю скорость, весь неистовый драйв и все спортивное наследие. Концентрированный экстрим — это дизайнерская и компановочная концепция, олицетворяющая собой всю страсть Toyota.",
        id: 0,
        price: "6.000.000",
        img: "https://hdfon.ru/wp-content/uploads/hdfon.ru-11709139-640x480.jpg",
        style: "Любой",
        title: "TOYOTA GR SUPRA",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Audi Q5 гармонично сочетает в себе изысканный стиль, настоящую универсальность, великолепную динамику и высокую функциональность.",
        id: 12,
        price: "4.500.000",
        img: "https://www.topspeed.sk/userfiles/articles/30-06/17955/gallery/crop_640_480_audi_q5_topspeed.sk-043.jpg",
        style: "Черный",
        title: "Audi Q5",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Автомобили M BMW 4 серии Coupe впечатляющим образом сочетают в себе эстетическую привлекательность, харизму и фирменный спортивный стиль M. Возглавляет трио BMW M4 Competition Coupe с впечатляющими 510 л.с. мощности и 650 Нм крутящего момента. ",
        id: 13,
        price: "9.000.000",
        img: "https://i.pinimg.com/736x/94/75/ab/9475ab87ac6e1c51cac64fc1622ba322.jpg",
        style: "Желтый",
        title: "BMW M4",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Range Rover Velar — это компактный кроссовер сегмента «люкс», производства британской автомобильной компании Jaguar Land Rover.",
        id: 14,
        price: "5.000.000",
        img: "http://www.shopcar.ru/images_newcars/Land%20Rover-Land%20Rover%20Range%20Rover%20Velar/0.jpg",
        style: "Серый",
        title: "RANGE ROVER VELAR",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "BMW X3 — люксовый компактный кроссовер немецкой компании BMW. X3 первого поколения разработан и выпускался совместно с компанией Magna Steyr на заводе в Граце, Австрия.",
        id: 15,
        price: "3.500.000",
        img: "https://cdn.izap24.ru/images/marka/bmw/x3_m/48895_bmw-x3_m_big.jpg",
        style: "Любой",
        title: "BMW X3",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Tesla Model S — пятидверный электромобиль производства американской компании Tesla.",
        id: 11,
        price: "5.500.000",
        img: "https://cdn.izap24.ru/images/marka/tesla/model_s/9084_tesla-model_s_big.jpg",
        style: "Белый",
        title: "Tesla Model S",
    },
    {
        currencyFormat: "RUB",
        currencyId: "RUB",
        description: "Toyota Supra воплощает в себе всю мощь, всю скорость, весь неистовый драйв и все спортивное наследие. Концентрированный экстрим — это дизайнерская и компановочная концепция, олицетворяющая собой всю страсть Toyota.",
        id: 0,
        price: "6.000.000",
        img: "https://hdfon.ru/wp-content/uploads/hdfon.ru-11709139-640x480.jpg",
        style: "Любой",
        title: "TOYOTA GR SUPRA",
    },
    
];
/////////////////////////////////////////////////////////////

const ProductCard = (props) => {
    return (
        <div>
            <hr />
            <img src={props.img}></img>
            <p>
                <b>Название:</b> {props.title}
            </p>
            <p>
                <b>Цвет:</b> {props.style}
            </p>
            <p>
                <b>Цена:</b> {props.price} {props.currencyFormat}
            </p>
            <p>
                <b>Описание:</b> <br></br>{props.description}
            </p>
            <p>
                <b>Валюта:</b> {props.currencyId}
            </p>
            <hr />
        </div>
    );
};

const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    return products.filter((product) => {
        let str =
            `${product.title} ${product.style} ${product.description}`.toUpperCase();
        return str.indexOf(searchTerm) >= 0;
    });
};

const ProductsList = (props) => {
    const { searchTerm } = props;
    let filteredProducts = filterProducts(searchTerm);
    return (
        <div>
            <div>
                <div>
                    <h2>Ассортимент</h2>
                </div>
            </div>
            <div>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

//Компонент высшего порядка здесь withSearch
const withSearch = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchTerm: "",
        };
        handleSearch = (event) => {
            this.setState({ searchTerm: event.target.value });
        };

        render() {
            let { searchTerm } = this.state;
            return (
                <div className="App-header">
                    <div>
                        <input
                            onChange={this.handleSearch}
                            value={searchTerm}
                            type="text"
                            placeholder="Поиск"
                        />
                    </div>
                    <WrappedComponent searchTerm={searchTerm} />
                </div>
            );
        }
    };
};

const HOC = withSearch(ProductsList);

export default HOC;
