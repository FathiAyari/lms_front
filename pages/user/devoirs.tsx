import TableDevoirs from "@/components/TableDevoirs";
import LayoutUser from "@/components/layoutUser";
import { fetcher } from "@/lib/fetcher";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Box, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { FiEye } from "react-icons/fi";
import useSWR from "swr";



const AssignmentTable = () => {
const {data:session}=useSession()

  const { data } = useSWR(`http://192.168.137.200:8000/api/user_exams/${session?.user.id}`, fetcher)     
  console.log(data)
  return (
      <Box p={16}><Heading textAlign={"center"} py={16}>Mes Devoirs</Heading><Table variant="striped" colorScheme="gray" bg={"white"}>

      
          
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Teacher Name</Th>
          <Th>Description</Th>
          <Th>DeadLine</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((item ,key) => (
          <TableDevoirs item={item} key={key} />
        ))}
      </Tbody>
    </Table></Box>
  );
};

export default AssignmentTable;
AssignmentTable.Layout = LayoutUser
