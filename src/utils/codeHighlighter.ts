import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

export function highlightCode(code: string, language: string = 'typescript'): string {
  try {
    return Prism.highlight(code, Prism.languages[language] || Prism.languages.typescript, language);
  } catch (error) {
    console.warn('Code highlighting failed:', error);
    return code;
  }
}

export function createCodeBlock(code: string, language: string = 'typescript'): HTMLElement {
  const highlightedCode = highlightCode(code, language);
  
  return pre({ class: `language-${language}` },
    code({ class: `language-${language}` }, highlightedCode)
  );
}