import LayoutTeacher from '@/components/layoutTeacher'
import { fetcher } from '@/lib/fetcher';
import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BiBullseye, BiPencil } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import useSWR, { mutate } from 'swr'



const Devoirs = () => {

const {data:session}=useSession()

  const router =useRouter()
      const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [titre,setTitre]=useState("")
    const [categorie,setCategorie]=useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    const {data}=useSWR(`http://192.168.137.200:8000/api/user_exams/${session?.user.id}`,fetcher)     
    const handleFileChange = (event:any) => {
        setFile(event.target.files[0])
    }
  
  const handleSubmit = async () => {
      
        try {
            const formData = new FormData()

            if (!file) {
                console.error('No file selected')
                return
            }
            formData.append('exam', file)
            //@ts-ignore
            formData.append('user',session?.user.id)
          formData.append('course', 5 as any)
            //@ts-ignore
            formData.append('deadLine',format(new Date(),"yyyy-MM-dd"))
            formData.append('description', "testt")
            formData.append('title', "titre")
            const response = await fetch(
                'http://192.168.137.200:8000/api/add_exam',
                {
                    method: 'POST',
                    body: formData,
                }
            )
            console.log(response)
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
  return (
      <Box p={16}><Heading textAlign={"center"} py={16}>Mes Devoirs</Heading>
         <Box display={"flex"} w={"100%"} alignItems={"end"} justifyContent={"end"} p={6}> <Button onClick={onOpen} rightIcon={<BsPlus />} colorScheme='blue' variant='outline'>
   Ajouter
  </Button></Box>  
          <Table variant="striped" colorScheme="gray" bg={"white"}>

      
          
      <Thead>
        <Tr>
          <Th>Exam Name</Th>
          <Th>matter Name</Th>
          <Th>Creation Date</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((item:any) => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            <Td>{item.categorie}</Td>
            <Td>{item.description}</Td>
            <Td>
              <IconButton
                aria-label="View assignment"
                icon={<TbListDetails />}
                variant="ghost"
                onClick={()=>router.push(`/teacher/rondu?devId=${item?.id}`)}
                    />
                    <IconButton
                aria-label="View assignment"
                icon={<MdDeleteOutline />}
                variant="ghost"
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
          </Table>
      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter Cours</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Titre</FormLabel>
              <Input ref={initialRef} placeholder='Titre' onChange={(e)=>setTitre(e.target.value)} value={titre}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Catégorie</FormLabel>
              <Select placeholder='Select Categorie'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
                      </FormControl>
                      
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description' onChange={(e)=>setDescription(e.target.value)} value={description}/>
                      </FormControl>
                         <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
 <Input
      type="file"
                              accept="application/pdf"
                              onChange={handleFileChange}
      // add onChange and other props as needed
    />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></Box>
  )
}

export default Devoirs
Devoirs.Layout = LayoutTeacher
