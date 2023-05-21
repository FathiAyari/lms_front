import { FC } from "react";
// Core viewer
import { Worker, Viewer } from "@react-pdf-viewer/core";
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

interface Props {
  url: string;
}

const PDFReader: FC<Props> = ({ url }) => {
  const defaultLayoutPluginProps: DefaultLayoutPluginProps = {
    sidebarTabs: () => [],
    renderToolbar: (Toolbar: (props: ToolbarProps) => React.ReactElement) =>
      Toolbar({
        children: ({
          CurrentPageInput,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Zoom,
          ZoomIn,
          ZoomOut,
        }) => (
          <>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div className="flex gap-2 items-center w-20">
              <div className="flex-1">
                <CurrentPageInput />
              </div>
              <div>
                / <NumberOfPages />
              </div>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
          </>
        ),
      }),
  };

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin(defaultLayoutPluginProps);

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={url}
          plugins={[
            // @ts-ignore
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
};

export default PDFReader;