class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class DannyWasHere extends HTMLElement{
	connectedCallback(){
		this.innerHTML = "Daniel was here";
	}
}

customElements.define("x-danny", DannyWasHere);

class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="side-a">Odd Jobs Registration</a>&nbsp;<a href="side-b">Shopping Page</a>`;
	}
}

customElements.define("x-twosided", TwoSidedMarket);