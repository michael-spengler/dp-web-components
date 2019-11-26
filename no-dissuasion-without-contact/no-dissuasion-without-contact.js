
class NoDissuationWithoutContact extends HTMLElement {

    template = `
    <h1 style='padding-top: 60px; text-align: center'>
        Keine Abmahnung ohne Kontakt
    </h1>
    <p><br></p>
        Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich ohne Kostennote.
        Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die
        Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten
        werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung
        vorgenannter Bestimmungen eingereicht.
    `

    constructor() {
        super()
        this.shadow = this.createShadowRoot()
        this.shadow.innerHTML = this.template
    }
}

window.customElements.define("no-dissuasion-without-contact", NoDissuationWithoutContact)