import { highlightCode } from '../utils/codeHighlighter.js';
import '../assets/css/prism-theme.css';

interface CodeExampleProps {
  sourceCode: string;
  language?: string;
  title?: string;
  showCopy?: boolean;
}

function CodeExample({ sourceCode, language = 'typescript', title, showCopy = true }: CodeExampleProps): HTMLElement {
  const highlightedCode = highlightCode(sourceCode, language);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      const button = document.querySelector('.copy-button') as HTMLButtonElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Create the code element and set its HTML content manually
  const codeElement = code({ class: `language-${language}` });
  codeElement.innerHTML = highlightedCode;

  return div({ class: 'code-block-container' },
    title ? h3({ class: 'code-title' }, title) : null,
    div({ style: 'position: relative' },
      showCopy ? button({ 
        class: 'copy-button',
        onClick: copyToClipboard 
      }, 'Copy') : null,
      pre({ class: `language-${language}` }, codeElement)
    )
  );
}

export default CodeExample;