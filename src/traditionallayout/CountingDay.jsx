import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";

const image = {
  md: "/image/7.jpg",
  xl: "/image/bg-1.jpg",
};
const imageMd = `linear-gradient(180deg,rgba(0,0,0,0.50) 0%,rgba(0,0,0,0.54) 100%),url(${image.md})`;
const imageXl = `linear-gradient(180deg,rgba(0,0,0,0.50) 0%,rgba(0,0,0,0.54) 100%),url(${image.xl})`;
const akadUrl =
  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Fanni+%26+Dimas:+Akad+Nikah&dates=20220925T010000Z/20220925T040000Z&details&location&sprop&sprop=name";
const resepsiUrl =
  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Fanni+%26+Dimas:+Resepsi&dates=20220925T040000Z/20220925T070000Z&details&location&sprop&sprop=name";
const maps = "https://goo.gl/maps/AugMQ5bNdYS2Rauo8";

export default function CountingDay() {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const countDownDate = new Date("Sep 25, 2022 08:00:00").getTime();

  React.useEffect(() => {
    countDown();
    return clearInterval(countDown);
  }, []);

  const countDown = () =>
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);
    
  const handleNewTab = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <Box sx={style.wrapper}>
      <Box sx={{ textAlign: "center" }}>
        <Text sx={style.TitleCount}>Our wedding day!</Text>
        <Text sx={{ fontSize: "13px", mt: 5 }} data-aos="zoom-in-down">
          Untuk melaksanakan syariat agama-Nya, mengikuti sunnah rasul-Nya dalam
          membentuk keluarga yang Sakinah, Mawaddah, Warahmah yang Insya Allah
          akan diselenggarakan pada :
        </Text>
        <Text sx={{ fontSize: "12px", mt: 10 }} data-aos="fade-up">Sunday</Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "50px", fontWeight: "700" }} data-aos="fade-right">25</Text>
          <Box textAlign="left" data-aos="fade-left">
            <Text>September</Text>
            <Text>2022</Text>
          </Box>
        </Box>
      </Box>
      <Box sx={style.countDownWrapper} data-aos="flip-up">
        <Box sx={style.count}>
          <Text sx={style.numberTime}>{days}</Text>
          <Text sx={style.descNumber}>Days</Text>
        </Box>
        <Box sx={style.count}>
          <Text sx={style.numberTime}>{hours}</Text>
          <Text sx={style.descNumber}>Hours</Text>
        </Box>
        <Box sx={style.count}>
          <Text sx={style.numberTime}>{minutes}</Text>
          <Text sx={style.descNumber}>Minutes</Text>
        </Box>
        <Box sx={style.count}>
          <Text sx={style.numberTime}>{seconds}</Text>
          <Text sx={style.descNumber}>Seconds</Text>
        </Box>
      </Box>
      <Box sx={{ display: ["block", "flex"], justifyContent: "space-around" }}>
        <Box sx={style.agendaWrapper} data-aos="fade-left">
          <Text sx={style.TitleCount}>Akad Nikah</Text>
          <Text sx={{ fontSize: "18px" }}>08:00 - 09:00</Text>
          <Button
            leftIcon={<CalendarIcon />}
            sx={{ color: "gray.800" }}
            onClick={() => handleNewTab(akadUrl)}
          >
            Save Date
          </Button>
        </Box>
        <Box sx={style.agendaWrapper}  data-aos="fade-right">
          <Text sx={style.TitleCount}>Resepsi</Text>
          <Text sx={{ fontSize: "18px" }}>11:00 - 14:00</Text>
          <Button
            leftIcon={<CalendarIcon />}
            sx={{ color: "gray.800" }}
            onClick={() => handleNewTab(resepsiUrl)}
          >
            Save Date
          </Button>
        </Box>
      </Box>

      <Box sx={style.agendaWrapper} textAlign="center" data-aos="fade-up">
        <Text sx={{ fontWeight: "700", fontSize: "15px" }}>
          Aula Gedung Batalyon Zeni Tempur 11/DW (YONZIPUR)
        </Text>
        <Text sx={{ textAlign: "center", fontSize: "14px" }}>
          ASRAMA YONZIPUR 11, Jl. Kesatrian IV,
          <br />
          RT.: 024/RW.003, KEL, Kb. Manggis, Kec. Matraman,
          <br />
          Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150
        </Text>
        <Button
          leftIcon={<Icon icon="carbon:map" />}
          sx={{ color: "gray.800" }}
          onClick={() => handleNewTab(maps)}
        >
          View Map
        </Button>
      </Box>

      {/* <Box sx={style.agendaWrapper}>
        <Text></Text>
      </Box> */}
    </Box>
  );
}

const style = {
  wrapper: {
    p: "40px 20px",
    color: "gray.100",
    bgColor: "gray.800",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundImage: [imageMd, null, imageXl],
  },
  TitleCount: {
    fontSize: "25px",
    fontWeight: "700",
    textAlign: "center",
  },
  countDownWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: ["10px", "20px"],
    p: "20px",
  },
  count: {
    p: "10px 20px",
    bgColor: "rgba(255,255,255,0.5)",
    color: "gray.100",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    borderRadius: "5px",
  },
  numberTime: {
    fontSize: "22px",
    fontWeight: "700",
  },
  descNumber: {
    fontSize: "14px",
  },
  agendaWrapper: {
    marginY: "40px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
};
