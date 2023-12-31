export const changeCssRootVariables = (theme) => {
    const root = document.querySelector(':root')

        const components = [
            'body-background',
            'component-background',
            'card-background',
            'card-shadow',
            'text-color',
        ]
        
        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
            )
        })
}