import CardCour from '@/components/CardCour'
import LayoutUser from '@/components/layoutUser'
import { fetcher } from '@/lib/fetcher'
import { Box, Heading, SimpleGrid, Stack, StackDivider,Text} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import React from 'react'
import useSWR from 'swr'

const Cours = () => {
  const router = useRouter()
const {data:session}=useSession()

    const {data}=useSWR(`http://192.168.137.200:8000/api/my-courses/${session?.user.id}`,fetcher)     

  return (


      
    <Box w={"100%"} p={6}>
      <Heading textAlign={"center"} py={16}>Mes Cours</Heading>
         <SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
                   
                 {data?.map((item, key) => 
                   <CardCour item={item} key={key} subscribe={true} />
              )}
               
                </SimpleGrid>
      
</Box>
 
      
  )
}

export default Cours
Cours.Layout = LayoutUser
