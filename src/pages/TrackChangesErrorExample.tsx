import { FC, useCallback, useRef, useState } from "react";
import { MultiRootEditor } from "@ckeditor/ckeditor5-editor-multi-root";
import { TrackChangesData } from "@ckeditor/ckeditor5-track-changes";

import { appConfig } from "../config/appConfig";
import { ckeditorExampleContent } from "../ckeditor";
import { CollaborativeEditor } from "../components/CollaborativeEditor";

const TRACK_CHANGES_DATA_PLUGIN = "TrackChangesData";

export const TrackChangesErrorExample: FC = () => {
  const editorRef = useRef<MultiRootEditor | null>(null);
  const [sanitizedDataResult, setSanitizedDataResult] = useState<string | null>(
    null
  );

  const getSanitizedData = useCallback(async () => {
    const { current: editor } = editorRef;
    if (!editor) return undefined;
    if (!editor.plugins.has(TRACK_CHANGES_DATA_PLUGIN)) return undefined;

    const trackChangedData = editor.plugins.get(
      TRACK_CHANGES_DATA_PLUGIN
    ) as TrackChangesData;

    if (!trackChangedData) return undefined;

    try {
      const sanitizedRootContentLookup =
        (await trackChangedData.getDataWithAcceptedSuggestions({})) as Record<
          string,
          string
        >;

      const serialized = JSON.stringify(sanitizedRootContentLookup, null, 2);
      setSanitizedDataResult(serialized);
    } catch (error) {
      setSanitizedDataResult(`Error: ${error}`);
    }
  }, []);

  return (
    <div>
      <h2>
        Using CKEditor 5 Track Changes - getting data without the suggestions
      </h2>

      <CollaborativeEditor
        data={{ "multi-root-editor-main": ckeditorExampleContent }}
        token={appConfig.ckEditorToken}
        editorRef={editorRef}
      />

      <button onClick={getSanitizedData}>
        Get data with accepted suggestions
      </button>

      <pre>{sanitizedDataResult}</pre>
    </div>
  );
};
