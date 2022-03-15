import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./Programs.module.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Programs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const handleExpandTwoClick = () => {
    setExpandedTwo(!expandedTwo);
  };

  const [expandedThree, setExpandedThree] = React.useState(false);
  const handleExpandThreeClick = () => {
    setExpandedThree(!expandedThree);
  };

  const [expandedFour, setExpandedFour] = React.useState(false);
  const handleExpandFourClick = () => {
    setExpandedFour(!expandedFour);
  };

  const [expandedFive, setExpandedFive] = React.useState(false);
  const handleExpandFiveClick = () => {
    setExpandedFive(!expandedFive);
  };

  const [expandedSix, setExpandedSix] = React.useState(false);
  const handleExpandSixClick = () => {
    setExpandedSix(!expandedSix);
  };

  return (
    <div className={classes.progWrap}>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
        «От рождения до школы»"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/free-photo/cute-child-boy-studying-and-thinking-at-the-home_184421-434.jpg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Направления работы: развитие элементарных математических
                представлений,развитие речи,обучение дошкольников грамоте и
                звуковой культуре речи,подготовка руки к письму,психологическая
                готовность детей к школе.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
        
            Занятие: Физкультура"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://melkie.net/wp-content/uploads/2018/09/deti-vypolnyayut-uprazhneniya-na-sinih-kovrikah.jpg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expandedTwo}
              onClick={handleExpandTwoClick}
              aria-expanded={expandedTwo}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Ежедневная традиционная утренняя зарядка (15-20 минут); Прогулка
                всегда начинается с Музыкальной разминки и перерастает в
                подвижные игры и веселые старты; А так же обязательным моментом
                являются музыкальные физминутки между занятиями и после тихого
                часа! Цель всего этого: поддержать физическое развитие детей и
                дать возможность детскому организму разрядиться после
                развивающих занятий!
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
        
              Занятие: Кулинария"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sadikhappy.ru/upload/iblock/2a8/2a877cf85489e2d04113c20fa8d38ef9.jpg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expandedThree}
              onClick={handleExpandThreeClick}
              aria-expanded={expandedThree}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedThree} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Многие слышали фразу, что : «Кулинария – это искусство». И как
                всякому искусству, кулинарии надо учиться. В нашем детском саду
                на занятиях по кулинарии у ребят есть возможность по знакомятся
                с процессом приготовления пищи и полюбить его через креативный
                подход педагога. На занятиях ребята знакомятся со свойствами,
                структурой, цветом, формой продуктов питания. Овладевают
                навыками владения ножом. Творчески, креативно подходят к
                приготовлению кулинарных блюд, а так же знакомятся с этикетом и
                культурой принятия пищи. На занятиях ребята не только готовят,
                но и с удовольствием дегустируют приготовленную ими еду.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
            Занятие: 
            Хореография"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sadikhappy.ru/upload/iblock/29d/29dd4bdd8775505b3f2ab1bf8e2b34df.jpeg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expandedFour}
              onClick={handleExpandFourClick}
              aria-expanded={expandedFour}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedFour} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Танцевально-игровая гимнастика для детей Дошкольный возраст -
                один из наиболее ответственных периодов в жизни каждого
                человека. Именно в эти годы закладываются основы здоровья,
                гармоничного умственного, нравственного и физического развития
                ребенка, формируется личность человека.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
            Занятие: 
            Музыка"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sadikhappy.ru/upload/iblock/93e/93e0530c195a1e03b1395869b92edb99.jpeg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expandedFive}
              onClick={handleExpandFiveClick}
              aria-expanded={expandedFive}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedFive} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Музыкальные занятия по методике Железновых + авторские сборники.
                Программа делится по возрастам. Данная методика включает :
                активное слушание музыки развитие слуха песенки с движениями
                пальчиковые игры. сказки - подражалки. веселая логоритмика
                подвижные игры сказки-шумелки. задействована мелкая моторика,
                память и воображение.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div>
        <Card
          className={classes.cardSub}
          sx={{ width: 400, height: 345, margin: "1vw" }}
        >
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="
            Занятие: 
            Английский язык"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sadikhappy.ru/upload/iblock/1f7/1f7da257de03c242a5c78ee816182a5f.jpeg"
            alt="Paella dish"
          />

          <CardActions disableSpacing>
            <ExpandMore
              expand={expandedSix}
              onClick={handleExpandSixClick}
              aria-expanded={expandedSix}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedSix} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Программа «Веселый английский», направлена на воспитание
                интереса к овладению иностранным языком, формирование
                гармоничной личности, развитию психических процессов, а также
                познавательных и языковых способностей; способствует развитию
                активной и пассивной речи, правильному звукопроизношению на
                осознанном уровне.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
