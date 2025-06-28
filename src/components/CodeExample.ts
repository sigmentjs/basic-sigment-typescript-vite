import { highlightCode } from '../utils/codeHighlighter.js';
import '../assets/css/prism-theme.css';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
  showCopy?: boolean;
}

function CodeExample({ code, language = 'typescript', title, showCopy = true }: CodeExampleProps): HTMLElement {
  const highlightedCode = highlightCode(code, language);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
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

  return div({ class: 'code-block-container' },
    title ? h3({ class: 'code-title' }, title) : null,
    div({ style: 'position: relative' },
      showCopy ? button({ 
        class: 'copy-button',
        onClick: copyToClipboard 
      }, 'Copy') : null,
      pre({ class: `language-${language}` },
        code({ 
          class: `language-${language}`,
          innerHTML: highlightedCode 
        })
      )
    )
  );
}

export default CodeExample;