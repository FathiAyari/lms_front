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

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useRouter } from "next/router";

const Quiz = () => {
  const [answers, setAnswers] = useState([]);

  const router = useRouter();
  const { data } = useSWR(
    `http://192.168.137.200:8000/api/get_qcm/${router?.query?.quizId}`,
    fetcher
  );
  console.log("Score Percentage:", data);

  const handleAnswerChange = (index: number, value: any) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
   

    try {
            const totalQuestions = data.choices.length;
    let correctAnswers = 0;

    for (let i = 0; i < totalQuestions; i++) {
      const correctAnswer = data.choices[i].answer;
      const selectedAnswer = answers[i];
      if (correctAnswer === selectedAnswer) {
        correctAnswers++;
      }
    }

      const scorePercentage = (correctAnswers / totalQuestions) * 100;
      console.log(scorePercentage)
      const body = {
  qcm:parseInt(router?.query?.quizId as string),user: 9 ,note:`${scorePercentage}`
}
            const response = await fetch(
"http://192.168.137.200:8000/api/add_qcm_result",
                {
                    method: 'POST',
                  body: JSON.stringify(body),
 headers: { 'Content-Type': 'application/json' },           
                }
            )
  console.log("Score Percentage:", response);
      
        } catch (error) {
            console.error('Error uploading file:', error)
        }
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        {data?.choices.map((item, key) => (
          <FormControl key={key}>
            <FormLabel>Question {key + 1}:{item.question}</FormLabel>
            <RadioGroup
              onChange={(value) => handleAnswerChange(key, value)}
              value={answers[key]}
            >
              <Stack direction="column">
                <Radio value={item.choices[0]}>{item.choices[0]}</Radio>
                <Radio value={item.choices[1]}>{item.choices[1]}</Radio>
                <Radio value={item.choices[2]}>{item.choices[2]}</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>Select one answer.</FormHelperText>
          </FormControl>
        ))}

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default Quiz;
