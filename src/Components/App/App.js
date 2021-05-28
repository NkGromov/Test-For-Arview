import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppStyle.css";

const App = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <section className="calendar">
                <div className="container">
                    <h1 className="calendar__title">Календарь событий</h1>
                    <div className="calendar__wrapper">
                        <div className="calendar__item">
                            <Calendar onChange={onChange} value={value} className="calendar__calendar" />
                            <button className="calendar__add calendar__button">Добавить</button>
                        </div>
                        <div className="calendar__item">
                            <div className="calendar__dayDesc">
                                <div className="calendar__descItem">
                                    <h2 className="calendar__descTitle">dsa</h2>
                                    <span className="calendar__desc">ddsa</span>
                                    <button className="calendar__change calendar__button">Редактировать</button>
                                    <button className="calendar__delete calendar__button">Удалить</button>
                                </div>
                                <div className="calendar__descItem">
                                    <h2 className="calendar__descTitle">dsa</h2>
                                    <span className="calendar__desc">ddsa</span>
                                    <button className="calendar__change calendar__button">Редактировать</button>
                                    <button className="calendar__delete calendar__button">Удалить</button>
                                </div>
                                <div className="calendar__descItem">
                                    <h2 className="calendar__descTitle">dsa</h2>
                                    <span className="calendar__desc">ddsa</span>
                                    <button className="calendar__change calendar__button">Редактировать</button>
                                    <button className="calendar__delete calendar__button">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
