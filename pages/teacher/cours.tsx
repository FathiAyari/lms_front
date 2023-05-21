import LayoutTeacher from '@/components/layoutTeacher'
import { fetcher } from '@/lib/fetcher';
import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiPencil } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import useSWR, { mutate } from 'swr'



const Cours = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [titre,setTitre]=useState("")
    const [categorie,setCategorie]=useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    const {data}=useSWR("http://192.168.137.200:8000/api/teacher-courses/9",fetcher)


    
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
            formData.append('file', file)
            //@ts-ignore
            formData.append('user',9)
            formData.append('description', description)
            //@ts-ignore
            formData.append('category',1)
            formData.append('title', titre)
            const response = await fetch(
                'http://192.168.137.200:8000/api/add-cours',
                {
                    method: 'POST',
                    body: formData,
                }
            )
onClose()
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
  const handleDelete = async (id) => {

      try {
    const response = await fetch(
        `http://192.168.137.200:8000/api/delete-course/${id}`,
        {
            method: 'DELETE',
        }
    );
    await mutate("http://192.168.137.200:8000/api/teacher-courses/1")
    onClose();
} catch (error) {
    console.error('Error deleting item:', error);
}





    }
  return (
      <Box p={16}><Heading textAlign={"center"} py={16}>Mes Cours</Heading>
         <Box display={"flex"} w={"100%"} alignItems={"end"} justifyContent={"end"} p={6}> <Button onClick={onOpen} rightIcon={<BsPlus />} colorScheme='blue' variant='outline'>
   Ajouter
  </Button></Box>  
          <Table variant="striped" colorScheme="gray" bg={"white"}>

      
          
      <Thead>
        <Tr>
          <Th>Assignment Name</Th>
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
                icon={<BiPencil />}
                variant="ghost"
                    />
                    
              <Popover>
  <PopoverTrigger>
 <IconButton
                aria-label="View assignment"
                icon={<MdDeleteOutline />}
                variant="ghost"
              />
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Are you sure you want to delete!</PopoverHeader>
    <PopoverBody><Button onClick={()=>handleDelete(item.id)}>Yes</Button></PopoverBody>
  </PopoverContent>
</Popover>
             
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

export default Cours
Cours.Layout = LayoutTeacher
