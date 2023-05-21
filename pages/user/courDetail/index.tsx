import { FC, use, useEffect, useState } from "react";
// Core viewer

// Plugins
import {
  defaultLayoutPlugin,
  DefaultLayoutPluginProps,
  ToolbarProps,
} from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import LayoutUser from "@/components/layoutUser";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import dynamic from 'next/dynamic';
import PDFReader from "./PDFReader";

const DynamicFileViewer = dynamic(() => import('./PDFReader'), { ssr: false })
interface Props {
  url: string;
}



const Details = () => {
  const router = useRouter()
    const {data}=useSWR(`http://192.168.137.200:8000/api/cours/${parseInt(router?.query.courId as string)}`,fetcher)     

  console.log(data?.file)

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <Box
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
    
          }}
          w={"100%"}
          h={"100vh"}
    >
<PDFReader url={""} />


      
    </Box>
  );
};

export default Details;

Details.Layout=LayoutUser
