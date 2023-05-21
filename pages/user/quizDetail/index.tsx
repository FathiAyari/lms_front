
import {
  Box,
  Text,
} from "@chakra-ui/react";
import LayoutUser from "@/components/layoutUser";
import Quiz from "@/components/Quiz";

function QuizForm() {


  return (
    <Box m={16} p={4} borderWidth={1} borderRadius="lg" bg={"white"}>
      <Text fontWeight="bold" fontSize="2xl" mb={4}>
        Quiz Form
      </Text>
      <Quiz/>
    </Box>
  );
}

export default QuizForm;
QuizForm.Layout=LayoutUser