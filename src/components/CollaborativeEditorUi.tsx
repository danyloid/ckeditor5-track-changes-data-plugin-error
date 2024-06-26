import {
  MultiRootHookProps,
  useMultiRootEditor,
} from "@ckeditor/ckeditor5-react";
import { FC, MutableRefObject } from "react";
import { createPortal } from "react-dom";
import { MultiRootEditor } from "@ckeditor/ckeditor5-editor-multi-root";

import { MultiRootEditorWithCollaboration } from "../ckeditor";

export interface CollaborativeEditorUiProps {
  editorRef: MutableRefObject<MultiRootEditor | null>;
  data: Record<string, string>;
  config: Record<string, unknown>;
  toolbarContainerRef: React.RefObject<HTMLDivElement>;
  isLayoutReady?: boolean;
}

const Editor =
  MultiRootEditorWithCollaboration as unknown as MultiRootHookProps["editor"];

export const CollaborativeEditorUi: FC<CollaborativeEditorUiProps> = (
  props
) => {
  const { editorRef, data, config, toolbarContainerRef, isLayoutReady } = props;

  const { editor, toolbarElement, editableElements } = useMultiRootEditor({
    data,
    isLayoutReady,
    editor: Editor,
    config,
  });

  editorRef.current = editor;

  return (
    <div>
      {toolbarContainerRef.current
        ? createPortal(toolbarElement, toolbarContainerRef.current)
        : null}
      {editableElements}
    </div>
  );
};
