import LayoutUser from "@/components/layoutUser";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Box, Heading } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";

const assignments = [
  {
    id: 1,
    name: "Math Assignment",
    teacher: "Ms. Johnson",
    date: "May 20, 2022"
  },
  {
    id: 2,
    name: "History Essay",
    teacher: "Mr. Jones",
    date: "June 5, 2022"
  },
  {
    id: 3,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 4,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 5,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 6,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 7,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 8,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 9,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 10,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 11,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 12,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 3,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 3,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 13,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  },
  {
    id: 14,
    name: "Science Lab Report",
    teacher: "Mrs. Smith",
    date: "June 10, 2022"
  }
];

const AssignmentTable = () => {
  return (
      <Box p={16}><Heading textAlign={"center"} py={16}>Mes Devoirs</Heading><Table variant="striped" colorScheme="gray" bg={"white"}>

      
          
      <Thead>
        <Tr>
          <Th>Assignment Name</Th>
          <Th>Teacher Name</Th>
          <Th>Creation Date</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {assignments.map((assignment) => (
          <Tr key={assignment.id}>
            <Td>{assignment.name}</Td>
            <Td>{assignment.teacher}</Td>
            <Td>{assignment.date}</Td>
            <Td>
              <IconButton
                aria-label="View assignment"
                icon={<FiEye />}
                variant="ghost"
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table></Box>
  );
};

export default AssignmentTable;
AssignmentTable.Layout = LayoutUser
