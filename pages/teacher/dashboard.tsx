import LayoutTeacher from '@/components/layoutTeacher';
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FcBriefcase, FcCollaboration, FcDiploma2, FcPuzzle } from 'react-icons/fc';


interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'} bg={"white"}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Dashboard() {
  return (
    <Box pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Etudient'}
          stat={'25'}
          icon={<FcCollaboration size={'3em'} />}
        />
        <StatsCard
          title={'Cours'}
          stat={'30'}
          icon={<FcBriefcase size={'3em'} />}
        />
        <StatsCard
          title={'Devoirs'}
          stat={'7'}
          icon={<FcDiploma2 size={'3em'} />}
              />
               <StatsCard
          title={'Quiz'}
          stat={'100'}
          icon={<FcPuzzle size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
Dashboard.Layout=LayoutTeacher