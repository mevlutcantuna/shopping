import styled from "styled-components";
import { motion } from "framer-motion";

const BackShadow = ({ isOpen }) => {
  const animationVariants = {
    display: {
      opacity: 1,
      display: "block",
    },
    hide: {
      opacity: 0,
      display: "none",
      transition: {
        display: { delay: 0.6 },
      },
    },
  };

  return (
    <StyledBackShadow
      variants={animationVariants}
      initial="hide"
      animate={isOpen ? "display" : "hide"}
    />
  );
};

export default BackShadow;

const StyledBackShadow = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
`;
