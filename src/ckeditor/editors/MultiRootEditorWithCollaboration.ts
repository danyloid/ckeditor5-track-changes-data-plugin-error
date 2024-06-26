import { MultiRootEditor as MultiRootEditorBase } from "@ckeditor/ckeditor5-editor-multi-root";

import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { Comments } from "@ckeditor/ckeditor5-comments";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  Font,
  FontBackgroundColor,
  FontFamily,
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { Link } from "@ckeditor/ckeditor5-link";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import {
  RealTimeCollaborativeEditing,
  RealTimeCollaborativeComments,
  RealTimeCollaborativeTrackChanges,
  PresenceList,
} from "@ckeditor/ckeditor5-real-time-collaboration";
import {
  Table,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import {
  TrackChanges,
  TrackChangesData,
} from "@ckeditor/ckeditor5-track-changes";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";

const ckePlugins = [
  Alignment,
  Autoformat,
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  FindAndReplace,
  Font,
  FontBackgroundColor,
  FontFamily,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Link,
  List,
  ListProperties,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  Table,
  TableColumnResize,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  Underline,
  Strikethrough,
  TextTransformation,
  CloudServices,
  RealTimeCollaborativeEditing,
  Comments,
  RealTimeCollaborativeComments,
  TrackChanges,
  RealTimeCollaborativeTrackChanges,
  PresenceList,
  TrackChangesData,
];

export class MultiRootEditorWithCollaboration extends MultiRootEditorBase {
  public static override builtinPlugins = ckePlugins;

  public static override defaultConfig = {
    language: "en",
  };
}
