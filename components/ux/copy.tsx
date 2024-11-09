export const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Command copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  