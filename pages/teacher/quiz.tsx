import LayoutTeacher from '@/components/layoutTeacher';
import { Box, Heading, Input, Button, ButtonGroup, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const Quiz = () => {
  const [inputFields, setInputFields] = useState([]);

  const handleAddField = () => {
    setInputFields([...inputFields, { question: '', choices: ['', '', ''], answer: '' }]);
  };

  const handleChange = (index, field, event) => {
    const values = [...inputFields];
    if (field === 'question') {
      values[index].question = event.target.value;
    } else if (field.includes('choice')) {
      const choiceIndex = parseInt(field[field.length - 1]);
      values[index].choices[choiceIndex] = event.target.value;
    } else if (field === 'answer') {
      values[index].answer = event.target.value;
    }
    setInputFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const values = [...inputFields];
    const temp = values[index];
    values[index] = values[index - 1];
    values[index - 1] = temp;
    setInputFields(values);
  };

  const handleMoveDown = (index) => {
    if (index === inputFields.length - 1) return;
    const values = [...inputFields];
    const temp = values[index];
    values[index] = values[index + 1];
    values[index + 1] = temp;
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields); // You can handle the form submission logic here
  };
     const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Box w="100%" p={6}>
      <Heading textAlign="center" py={16}>
        Mes Quiz
          </Heading>
           <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        isClearable={true}
              placeholder="Select an option"
              className='py-6'
      />
          <form onSubmit={handleSubmit}>
              
        {inputFields.map((field, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg p-6">
            <label htmlFor={`question-${index}`}>Question {index + 1}:</label>
            <Input
              type="text"
              id={`question-${index}`}
              value={field.question}
              onChange={(e) => handleChange(index, 'question', e)}
              placeholder="Enter question"
            />
            <div className="mt-2">
              {field.choices.map((choice, choiceIndex) => (
                <div key={choiceIndex}>
                  <label htmlFor={`choice-${index}-${choiceIndex}`}>Choix {choiceIndex + 1}:</label>
                  <Input
                    type="text"
                    id={`choice-${index}-${choiceIndex}`}
                    value={choice}
                    onChange={(e) => handleChange(index, `choice${choiceIndex}`, e)}
                    placeholder={`Enter choice ${choiceIndex + 1}`}
                  />
                </div>
              ))}
            </div>
            <label htmlFor={`answer-${index}`}>Reponse:</label>
            <Select
              options={field.choices.map((choice, choiceIndex) => ({
                value: choice,
                label: `Choix ${choiceIndex + 1}`
              }))}
              value={{ value: field.answer, label: `Choix ${
field.choices.indexOf(field.answer) + 1}` }}
onChange={(selectedOption) => handleChange(index, 'answer', { target: { value: selectedOption.value } })}
placeholder="Select answer"
isSearchable={false}
/>
<ButtonGroup mt={2}>
<Button
onClick={() => handleMoveUp(index)}
disabled={index === 0}
>
Move Up
</Button>
<Button
onClick={() => handleMoveDown(index)}
disabled={index === inputFields.length - 1}
>
Move Down
</Button>
<Button
onClick={() => handleRemoveField(index)}
colorScheme="red"
>
Remove Field
</Button>
</ButtonGroup>
</div>
        ))}
   <HStack> <Button
      onClick={handleAddField}
      colorScheme="blue"

    >
      Add Field
    </Button>

    <Button
      type="submit"
      colorScheme="green"

    >
      Submit
    </Button></HStack>
  </form>
</Box>
);
};

export default Quiz;
Quiz.Layout=LayoutTeacher