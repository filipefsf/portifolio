import { useCallback, useState } from 'react';

export default function useCopiarClipBoard() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Texto copiado para a área de transferência');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.log('Falha ao copiar o texto', err);
        }
    }, []);

    return { copied, copyToClipboard };
}
