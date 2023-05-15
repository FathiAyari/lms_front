import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import LayoutUser from "@/components/layoutUser";

function QuizForm() {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (index:any, value:any) => {
      const newAnswers = [...answers];
      //@ts-ignore
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // handle form submission with answers
  };

  return (
    <Box m={16} p={4} borderWidth={1} borderRadius="lg" bg={"white"}>
      <Text fontWeight="bold" fontSize="2xl" mb={4}>
        Quiz Form
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Question 1: What is the capital of France?</FormLabel>
            <RadioGroup
              onChange={(value) => handleAnswerChange(0, value)}
              value={answers[0]}
            >
              <Stack direction="column">
                <Radio value="paris">Paris</Radio>
                <Radio value="london">London</Radio>
                <Radio value="madrid">Madrid</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>Select one answer.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Question 2: What is the largest ocean?</FormLabel>
            <RadioGroup
              onChange={(value) => handleAnswerChange(1, value)}
              value={answers[1]}
            >
              <Stack direction="column">
                <Radio value="pacific">Pacific Ocean</Radio>
                <Radio value="atlantic">Atlantic Ocean</Radio>
                <Radio value="indian">Indian Ocean</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>Select one answer.</FormHelperText>
          </FormControl>
          {/* repeat for the other 8 questions */}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default QuizForm;
QuizForm.Layout=LayoutUser