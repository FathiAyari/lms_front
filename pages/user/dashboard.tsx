
import React, { use, useEffect } from 'react'
import { Box, Divider, Heading,  Input, InputGroup, SimpleGrid,} from '@chakra-ui/react'
import { MdAutoStories, MdOutlineCastForEducation, MdOutlineQuiz} from 'react-icons/md'

import LayoutUser from '@/components/layoutUser'
import { fetcher } from '@/lib/fetcher'
import useSWR, { mutate } from 'swr'
import CardCour from '@/components/CardCour'


const UserDashboard = () => {
    // const { data: session, status } = useSession()
    // const loading = status === 'loading'
    // useEffect(() => {
    //     if (loading) return // Do nothing while loading

    //     if (status === 'authenticated') {
    //         if (session?.user.role !== 1) {
    //             router.push('/login')
    //         }
    //     } else {
    //         router.push('/login')
    //     }
    // }, [session, status])

  const { data } = useSWR("http://192.168.137.200:8000/api/courses/1", fetcher) 

  

   
    return (

            <Box w={"100%"} h={"100vh"} display={"flex"} flexDirection={"column"}  >
        <Box pt={16} mb={6} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <SimpleGrid spacing={4} columns={[2, null, 3]}>
      <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdOutlineCastForEducation size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les Quiz</div>
      <div className="text-black font-bold text-3xl">999</div>
    </div>
       <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdOutlineQuiz size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les cours</div>
              <div className="text-black font-bold text-3xl">{ data?.length }</div>
    </div>   <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdAutoStories size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les devoirs</div>
      <div className="text-black font-bold text-3xl">999</div>
    </div>
      </SimpleGrid>
       <InputGroup mt={6}>
      <Input type="text" placeholder="Search" bg={"white"}/>
       </InputGroup></Box>
        <Divider size="6xl" color={"black"}/>
                <Heading w={"100%"} textAlign={"center"} p={16}>Tous les cours</Heading>
                <SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
          {data?.map((item, key) => 
<CardCour item={item} key={key} subscribe={false}/>
              )}
        </SimpleGrid>

                
      </Box>
      

    )
}

export default UserDashboard
UserDashboard.Layout = LayoutUser