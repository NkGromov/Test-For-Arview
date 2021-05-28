import { useState } from "react";
import Calendar from "react-calendar";
import { Field, Formik, Form } from "formik";
import "react-calendar/dist/Calendar.css";
import "./AppStyle.css";
import * as Yup from "yup";
import { addDay } from "../../Redux/AppReducer";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const [value, onChange] = useState(new Date());
    const [isForm, setIsForm] = useState(false);
    const formShow = () => {
        setIsForm((prev) => !prev);
    };
    return (
        <>
            <section className="calendar">
                <div className="container">
                    <h1 className="calendar__title">Календарь событий</h1>
                    <div className="calendar__wrapper">
                        <div className="calendar__item">
                            <div className={`calendar__calendarWrapper ${isForm ? "calendar__calendarWrapper--disable" : ""}`}>
                                <Calendar onChange={onChange} value={value} className="calendar__calendar" />
                                <button className="calendar__add calendar__button" onClick={formShow}>
                                    Добавить
                                </button>
                            </div>
                            {isForm && <CalendarForm day={value} setIsForm={setIsForm} />}
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

const CalendarForm = ({ day, setIsForm }) => {
    const ddd = useSelector((state) => state.AppReducer.days);
    const dispatch = useDispatch();
    const [type, setType] = useState({
        name: "Мероприятия",
        secondInput: "Куда идти",
        secondInputTwo: "Во сколько",
    });
    const ValidSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        secondOne: Yup.string().required("Required"),
        secondTwo: Yup.string().required("Required"),
    });
    const typeChange = (e) => {
        const type = e.target.value;
        if (type === "event")
            setType({
                name: "Мероприятия",
                secondInput: "Куда идти",
                secondInputTwo: "Во сколько",
            });
        else if (type === "holidays") setType({ name: "Праздничные дни", secondInput: "Бюджет", secondInputTwo: "" });
        else setType({ name: "Другое", secondInput: "Описание", secondInputTwo: "" });
    };

    const closeForm = () => {
        setIsForm(false);
    };
    console.log(ddd);

    const submitForm = (values) => {
        dispatch(
            addDay({
                day: day,
                name: values.name,
                type: type.name,
                secondOne: values.secondOne,
                secondTwo: values.secondTwo,
            })
        );
    };
    return (
        <div className="calendar__form form">
            <h2 className="form__title">Добавить событие</h2>
            <Formik initialValues={{ name: "", type: "", secondOne: "", secondTwo: "" }} validationSchema={ValidSchema} onSubmit={submitForm}>
                {({ values, errors, touched }) => (
                    <Form className="form__Wrapper">
                        <div className="form__inutItem">
                            <span className="form__inputTitlte">Название события</span>
                            <Field type="text" name="name" className="form__input" />
                        </div>
                        <div className="form__inutItem">
                            <span className="form__inputTitlte">Тип события</span>
                            <select className="form__type" onChange={typeChange}>
                                <option value="event">Мероприятия</option>
                                <option value="holidays">Праздничные дни</option>
                                <option value="other">Другое</option>
                            </select>
                        </div>
                        {type.secondInput && (
                            <div className="form__inutItem">
                                <span className="form__inputTitlte">{type.secondInput}</span>
                                <Field type="secondOne" name="secondOne" className="form__input" />
                            </div>
                        )}
                        {type.secondInputTwo && (
                            <div className="form__inutItem">
                                <span className="form__inputTitlte">{type.secondInputTwo}</span>
                                <Field type="secondTwo" name="secondTwo" className="form__input" />
                            </div>
                        )}

                        <div className="form__buttonWrapp">
                            <button className="form__button" onClick={closeForm}>
                                Отмена
                            </button>
                            <button type="submit" className="form__button">
                                Сохранить
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;
