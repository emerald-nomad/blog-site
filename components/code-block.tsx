import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock: React.FC = ({language, value}: any) => {
  return <div style={{marginTop: "2em", marginBottom: "2em"}}>
<SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  </div> 
}

export default CodeBlock;