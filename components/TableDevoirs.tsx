import { fetcher } from '@/lib/fetcher'
import { Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Stack, Td, Tr, useDisclosure } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { FcViewDetails } from 'react-icons/fc'
import { AiOutlineFileAdd } from 'react-icons/ai'

import useSWR from 'swr'
import { useRouter } from 'next/router'

interface Props{
    item:any
}

const TableDevoirs: FC<Props> = ({ item }) => {
    const router=useRouter()
  const { data:cours } = useSWR(`http://192.168.137.200:8000/api/cours/${item?.course}`, fetcher)  
    const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [titre,setTitre]=useState("")
    const [categorie,setCategorie]=useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)


    const {data}=useSWR("http://192.168.137.200:8000/api/user_exams/1",fetcher)     
    const handleFileChange = (event:any) => {
        setFile(event.target.files[0])
    }
   
  const handleSubmit = async () => {
      
      try {
            setLoading(true)
            const formData = new FormData()

            if (!file) {
                console.error('No file selected')
                return
            }
            formData.append('report', file)
            //@ts-ignore
            formData.append('user',1)
          formData.append('exam', 1 as any)
            const response = await fetch(
                'http://192.168.137.200:8000/api/add_exam_result',
                {
                    method: 'POST',
                    body: formData,
                }
            )
          setLoading(false)
onClose()
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
  return (
 <><Tr>
            <Td>{item.title}</Td>
            <Td>{cours?.user.full_name}</Td>
            <Td>{item.description}</Td>
            <Td>{item.deadLine}</Td>
            <Td>
             <Stack direction='row' spacing={4}>
  <Button leftIcon={<FcViewDetails />} colorScheme='pink' variant='outline' onClick={()=>router.push(`/user/devoirsDetails?devId=${item?.id}`)}>
    Details
  </Button>
  <Button leftIcon={<AiOutlineFileAdd />} colorScheme='pink' variant='solid' onClick={onOpen}>
Rondu
  </Button>
</Stack>
            </Td>
      </Tr>
       <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter Rondu</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          
                         <FormControl mt={4}>
              <FormLabel>Select Rondu</FormLabel>
 <Input
      type="file"
     onChange={handleFileChange}
    />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} display={"flex"} flexDirection={"row"} gap={2}>
                          Save
                         {loading? <Spinner />:""}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></>
  )
}

export default TableDevoirs