import CMS from "netlify-cms";
import { FulcrumAudio, FulcrumImage, FulcrumText, FulcrumVideo, ExpandableBlockquote } from './editorComponents';

CMS.registerEditorComponent(FulcrumText);
CMS.registerEditorComponent(FulcrumAudio);
CMS.registerEditorComponent(FulcrumImage);
CMS.registerEditorComponent(FulcrumVideo);

CMS.registerEditorComponent(ExpandableBlockquote);
