import React from "react";
import { Names } from "./Names/Names";
import "./mainPage.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { ReactComponent as Gift } from "../images/gift.svg";
import { ReactComponent as Divider } from "../images/divider.svg";
import { ReactComponent as Bus } from "../images/bus.svg";
import { CountDown } from "./CountDown/CountDown";

const FlexCenter = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const month = [
  [1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30],
];

const titleVariants = {
  offscreen: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  onscreen: {
    opacity: 1,
    transform: "scale(1)",
    transition: {
      delay: 0.3,
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const locationVariants = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const textVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

const busVariants = {
  offscreen: {
    x: "100%",
  },
  onscreen: {
    x: "0%",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

export const MainPage = () => {
  const handleClickLocation = () => {
    window.open(
      "https://yandex.ru/maps/org/leninskiye_gorki/54697041043/?ll=48.410740%2C54.311849&z=17.05"
    );
  };
  return (
    <div className="main">
      <div className="main_start">
        <div className="invitation">приглашение на свадьбу</div>
        <Names />
        <div className="date">07.09.2024</div>
        <FlexCenter
          className="arrow"
          initial={{ opacity: 0 }}
          animate={{ y: [0, 20, 0], opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 4,
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <img
            alt="Albert and Ekaterina"
            width="48px"
            height="32px"
            src="https://static.tildacdn.com/tild3764-3337-4432-b961-316366353332/Frame_1123.png"
          />
        </FlexCenter>
      </div>

      <div className="main_all">
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          У каждого человека есть мечта – найти свою половинку. <br /> Хотим
          поделиться с вами, нашими самыми близкими людьми, своей радостью: мы
          нашли свое счастье! <br />
          Судьба сделала нам прекрасный подарок, и мы устроим по этому поводу
          настоящий праздник!
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
          style={{ fontWeight: 700, marginLeft: "6px" }}
        >
          С огромным удовольствием приглашаем Вас разделить с нами этот важный и
          знаменательный день!
        </motion.div>
        <div className="month">Сентябрь</div>
        <div className="month_container">
          <motion.div
            className="wedding_day"
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <Heart />
          </motion.div>

          {month.map((week, index) => (
            <div
              className="week_container"
              style={{ justifyContent: index === 0 ? "end" : "start" }}
            >
              {week.map((day) => (
                <div
                  style={{
                    width: "28px",
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Divider className="divider" />
        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="title"
        >
          Место проведения
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          г. Ульяновск, ул. Спуск Степана Разина, 33 <br />
          Ресторанный комплекс «Ленинские горки»
        </motion.div>
        <div className="text">СБОР ГОСТЕЙ</div>
        <div
          className="text"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            textDecoration: "underline",
            marginTop: "16px",
          }}
        >
          15:40
        </div>

        <motion.div
          variants={locationVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
        >
          <Location
            style={{ width: "100px", height: "120px", marginTop: "20px" }}
          />
        </motion.div>

        <button className="button_location" onClick={handleClickLocation}>
          Как добраться?
        </button>

        <motion.div
          variants={busVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          style={{ width: "80px", marginLeft: "0px" }}
        >
          <Bus style={{ marginTop: "30px", width: "86px" }} />
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Не волнуйтесь о том, как добраться на наш праздник! <br />
          Всех желающих будет ожидать автобус (место и время сбора сообщим
          дополнительно).
        </motion.div>

        <CountDown date={new Date("Sat, 7 Sep 2024 15:30:00")} />

        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="title"
        >
          Дресс-код
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          На нашей свадьбе ограничений по дресс-коду нет. <br /> Для нас главное
          - Ваше присутствие и хорошее настроение!
        </motion.div>
        <Gift style={{ marginTop: "20px" }} />
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Мы очень ценим Вашу заботу, внимание и будем рады любому подарку!{" "}
          <br /> И не важно, в какой конверт Вы его упакуете :)
        </motion.div>
        <Divider className="divider" />

        <motion.div
          variants={locationVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="title"
          style={{ marginBottom: "60px" }}
        >
          С любовью, <br /> Альберт и Екатерина
        </motion.div>
      </div>
    </div>
  );
};
