import LayoutTeacher from '@/components/layoutTeacher'
import LayoutUser from '@/components/layoutUser'
import { fetcher } from '@/lib/fetcher'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React, { use, useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf'
import useSWR from 'swr'

const Details = ({ fileUrl }) => {
    const [report, setReport] = useState('')

    const router = useRouter()
    const { data } = useSWR(
        process.env.NEXT_PUBLIC_BACK_URL +
            `/api/teacher_exam_results/${parseInt(
                router?.query.ronduId as string
            )}`,
        fetcher
    )
    useEffect(() => {
        const ronduUrl = data?.filter(
            (e) => (e.id = parseInt(router?.query.ronduId as string))
        )[0]

        setReport(ronduUrl?.report)
    }, [data, router?.query?.ronduId])
    console.log(report)
    return (
        <Box h={'100vh'}>
            <embed src={report} height={'100%'} width={'100%'}></embed>
        </Box>
    )
}

export default Details
Details.Layout = LayoutTeacher
