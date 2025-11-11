mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
        darkMode: true,
        primaryColor: '#E9AB21',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#ffffff',
        lineColor: '#ffffff',
        secondaryColor: '#23356E',
        tertiaryColor: '#910048',
        background: '#0f1419',
        mainBkg: '#0f1419',
        secondBkg: '#1a1f2e'
    },
    flowchart: {
        useMaxWidth: true,
        htmlLabels: false,
        curve: 'basis'
    }
});
console.log('✅ Mermaid configured successfully');