import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { useMultirootEditorConfiguration } from "../ckeditor/hooks/useMultirootEditorConfiguration";
import { CollaborativeEditorUi } from "./CollaborativeEditorUi";
import { MultiRootEditor } from "@ckeditor/ckeditor5-editor-multi-root";

export interface CollaborativeEditorProps {
  token: string;
  data: Record<string, string>;
  editorRef: MutableRefObject<MultiRootEditor | null>;
}

export const CollaborativeEditor: FC<CollaborativeEditorProps> = ({
  editorRef,
  token,
  data,
}) => {
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    setRenderedOnce(true);
  }, []);

  const toolbarContainerRef = useRef<HTMLDivElement>(null);
  const { config, presenceContainerRef, sidebarContainerRef } =
    useMultirootEditorConfiguration({
      token,
      isLayoutReady: renderedOnce,
    });

  return (
    <div>
      <div className="presence-container" ref={presenceContainerRef}></div>
      <div
        className="editor-surface"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <div style={{ flex: "1" }}>
          <div className="toolbar-container" ref={toolbarContainerRef}></div>
          <div
            className="roots-container"
            style={{
              borderBottom: "1px solid var(--ck-color-toolbar-border)",
              borderLeft: "1px solid var(--ck-color-toolbar-border)",
              borderRight: "1px solid var(--ck-color-toolbar-border)",
            }}
          >
            {renderedOnce ? (
              <CollaborativeEditorUi
                editorRef={editorRef}
                data={data}
                config={config}
                toolbarContainerRef={toolbarContainerRef}
              />
            ) : null}
          </div>
        </div>
        <div
          className="sidebar-container"
          ref={sidebarContainerRef}
          style={{ minWidth: "200px" }}
        ></div>
      </div>
    </div>
  );
};
