import React from "react";
import video from "../../assets/video.mp4";
import classes from "./Home.module.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://kidsafeqld.com.au/wp-content/uploads/2020/08/kidsafe-qld-happy-children-home-hero-banner.jpeg",
  },
  {
    imgPath:
      "https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_desktop/public/his_sofija-05-19-235_0.jpg?itok=Ag_vXOSJ",
  },
  {
    imgPath:
      "https://www.inquirer.com/resizer/Fefrka15SqiWUBbcvDmuq0XQUJU=/arc-anglerfish-arc2-prod-pmn/public/ONZZDH6XJNGHJJWGABHBMVA3VM.jpg",
  },
  {
    imgPath:
      "https://edsource.org/wp-content/uploads/2021/07/RHS_167-768x512.jpg",
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <div className={classes.home}>
        <div className={classes.intro}>
          <video
            className={classes.homeVideo}
            autoPlay
            loop
            muted
            src={video}
          ></video>
          <div className={classes.homeTitle}>
            <h1>
              Добро пожаловать в наш детский сад!
              <br />
              <br />
              "Балажан"
            </h1>
          </div>
        </div>
        <div className={classes.intro2}>
          <div className={classes.intro2_descr}>
            <h2>«Балажан» - Мы больше чем просто детский сад</h2>
            <p>
              Детский сад нацелен на индивидуальное воспитание и развитие. Мы
              обладаем хорошей технической базой, большой и безопасной
              территорией для прогулок, просторным учебным классом, светлыми
              группами, и мощным кадровым ресурсом.
            </p>
          </div>
          <div className={classes.intro2_slide}>
            {" "}
            <Box sx={{ maxWidth: 800 }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          maxWidth: 800,
                          maxHeight: 500,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
          </div>
        </div>
        <div className={classes.intro3}>
          <div className={classes.intro3_title}>
            <h3>Возрастные группы</h3>
          </div>
          <div className={classes.intro3_cards}>
            <div className={classes.junior}>
              <div className={classes.intro3_cards__descr}>
                <h3>от 11 месяцев до 2 лет</h3>
              </div>
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/28/2019/02/top-100-baby-boy-names-2008_182-90c4289.jpg?quality=90&resize=620,413"
                alt=""
              />
              <div className={classes.subjects}>
                <div className={classes.subjects_back}>
                  <h3>от 11 месяцев до 2 лет</h3>
                  <p>Пальчиковая гимнастика</p>
                  <p>Кукольный театр</p>
                  <p>Хореография</p>
                  <p>Творчество</p>
                </div>
              </div>
            </div>
            <div className={classes.middle}>
              <div className={classes.intro3_cards__descr}>
                <h3>от 2 до 4 лет</h3>
              </div>
              <img
                src="https://media.istockphoto.com/photos/a-child-in-a-tshirt-in-the-kitchen-eating-an-omelet-a-fork-picture-id1160049332?k=20&m=1160049332&s=612x612&w=0&h=zmRZ__hVOicYRGiTrgHrgG--PqfgCrFtNT6nlRy68TI="
                alt=""
              />
              <div className={classes.subjects}>
                <div className={classes.subjects_back}>
                  <h3>от 2 до 4 лет</h3>
                  <p>Английский язык</p>
                  <p>Творчество</p>
                  <p>Логопедия</p>
                  <p>Музыка</p>
                </div>
              </div>
            </div>
            <div className={classes.senior}>
              <div className={classes.intro3_cards__descr}>
                <h3>от 5 до 7 лет</h3>
              </div>
              <img
                src="https://cdn.cdnparenting.com/articles/2018/08/643990666-H.jpg"
                alt=""
              />

              <div className={classes.subjects}>
                <div className={classes.subjects_back}>
                  <h3>от 5 до 7 лет</h3>
                  <p>Подготовка руки к письму</p>
                  <p>Английский язык</p>
                  <p>Хореография</p>
                  <p>Логопедия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.intro4}>
          <div className={classes.prefooter_descr}>
            <h4>Квалифицированные воспитатели</h4>
            <p>
              Опыт работы педагогов от 10 лет Найдем подход к любому ребенку
            </p>
          </div>

          <div className={classes.prefooter_descr}>
            <h4>Уникальные методики</h4>
            <p>
              Программы соответствуют стандартам образования для детей от 8 мес.
              до 11 лет
            </p>
          </div>

          <div className={classes.prefooter_descr}>
            <h4>Индивидуальный подход</h4>
            <p>
              Открываем таланты: развиваем умственные и творческие способности
            </p>
          </div>
        </div>
        <div className={classes.intro5_pre}>
          <h3>Наши Занятия</h3>
          <a href="/programs">
            <ArrowForwardSharpIcon />
          </a>
        </div>
        <div className={classes.intro5}>
          <div className={classes.intro5_cards}>
            <div className={classes.intro5_cards__first}>
              <div className={classes.intro5_cards__first_des}>
                <h2>Ведущая программа «От рождения до школы»</h2>
                <p>
                  Направления работы: развитие элементарных математических
                  представлений,развитие
                </p>
              </div>
            </div>
            <div className={classes.intro5_cards__second}>
              <div className={classes.intro5_cards__second1}>Кулинария</div>
              <div className={classes.intro5_cards__second2}>Хореография</div>
            </div>
          </div>
        </div>
        <div className={classes.finalHome}></div>
      </div>
    </>
  );
};

export default Home;
