import { parentVariants, transition } from "@/animation/transition";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent kata-kata pembuka
 *
 * @returns React.ReactElement
 */
const Words = () => {
  const salam = "|| श्री गणेशाय नम: ||";
  const words =
    "लक्ष्मीच्या पावलाने, मेहंदीच्या हाताने, कुल देवतेच्या आशीर्वादाने सप्तपदीच्या पवित्र बंधनाने एकमेकांस आजन्म साथ देण्यास निघालेल्या या नवदांम्पत्यास शुभाशीर्वाद देण्यासाठी मारवाडे कुटुंबीयांकडून आपुलकीचे निमंत्रण";

  return (
    <Container
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 20,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {salam.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", mt: 5 }}
      >
        {words.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
    </Container>
  );
};

export default Words;
