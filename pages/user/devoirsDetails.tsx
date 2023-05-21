
import LayoutUser from "@/components/layoutUser";
import { fetcher } from "@/lib/fetcher";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import useSWR from "swr";

const Details = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };
    const router = useRouter()
    const {data}=useSWR(`http://192.168.137.200:8000/api/get_exam/${parseInt(router?.query.devId as string)}`,fetcher)     


console.log("data",data)

  return (
    <Box h={"100vh"}>
      <embed src={data}  height={"100%"} width={"100%"}></embed>
    </Box>
  );
};

export default Details;
Details.Layout=LayoutUser
