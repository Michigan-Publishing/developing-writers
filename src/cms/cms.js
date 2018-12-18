import CMS from "netlify-cms";
import { FulcrumAudio, FulcrumImage, FulcrumText, FulcrumVideo, ExpandableBlockquote } from './editorComponents';
import { Game1, Game2, PieChart, WordCount } from './editorComponents';

CMS.registerEditorComponent(FulcrumText);
CMS.registerEditorComponent(FulcrumAudio);
CMS.registerEditorComponent(FulcrumImage);
CMS.registerEditorComponent(FulcrumVideo);

CMS.registerEditorComponent(ExpandableBlockquote);

CMS.registerEditorComponent(Game1);
CMS.registerEditorComponent(Game2);
CMS.registerEditorComponent(PieChart);
CMS.registerEditorComponent(WordCount);
